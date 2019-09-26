import Vue from 'vue'
import vueResource from 'vue-resource'
import apiRoutes from 'mock/api-routes'
import Url from 'url'

let routes = apiRoutes

Vue.use(vueResource)

if (process.env.NODE_ENV !== 'production' && window.concatMockRoutes(routes)) {
  Vue.http.interceptor.unshift((request, next) => {
    let urlParse = Url.parse(request.url, true)
    let urlPath = urlParse.pathname
    let urlQuery = urlParse.query
    let route = routes.find((item) => {
      return (request.method === item.method && urlPath === url.path)
    })
    if (!route) {
      next(request.respondWith({status: 404, statusText: 'Not Found'}))
    } else {
      let validParams = true
      let errors = {}

      if (route.param_body) {
        if (request.body) {
          let body = JSON.parse(request.body)
          for (let i in route.param_body) {
            if (typeof body[route.param_body[i]] === 'undefined') {
              validParams = false
              errors[route.param_body[i]] = ['BLANK', 'Required']
            }
          }
        } else {
          validParams = false
          for (let i in route.param_body) {
            validParams = false
            errors[route.param_body[i]] = ['BLANK', 'Required']
          }
        }
      }

      if (validParams && route.params) {
        for (let i in route.params) {
          if (typeof urlQuery[route.params[i]] === 'undefined') {
            validParams = false
            errors[route.params[i]] = ['BLANK', 'Required']
          }
        }
      }
      if (validParams) {
        next(
          request.respondWith(
            route.response,
            {status: 200}
          )
        )
      } else {
        next (
          request.respondWith (
            {
              code: 400,
              status: 'Error',
              errors: errors
            },
            {status: 400}
          )
        )
      }
    }
  })
} else {
  window.concatMockRoutes(routes)
}
