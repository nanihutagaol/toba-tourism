export default {
  method: 'GET',
  url: '/backend/api/get-all-culinary',
  response: {
    'code': 200,
    'message': 'OK',
    'data': {
      'restaurantList': [
        {
          'restaurantId': 'Rest-123',
          'restaurantName': 'Toba Resto',
          'restaurantLocation': 'Balige, Toba Samosir',
          'foodList': [
            {
              'foodId': 'FC-123',
              'foodName': 'Brownies',
              'foodPrice': '125000'
            },
            {
              'foodId': 'FC-124',
              'foodName': 'Susu Formula',
              'foodPrice': '125000'
            },
            {
              'foodId': 'FC-125',
              'foodName': 'Andaliman Cake',
              'foodPrice': '125000'
            },
          ]
        },
        {
          'restaurantId': 'Rest-234',
          'restaurantName': 'Toba Waw',
          'restaurantLocation': 'Balige, Toba Samosir',
          'foodList': [
            {
              'foodId': 'FC-123',
              'foodName': 'Brownies',
              'foodPrice': '125000'
            },
            {
              'foodId': 'FC-124',
              'foodName': 'Susu Formula',
              'foodPrice': '125000'
            },
            {
              'foodId': 'FC-125',
              'foodName': 'Andaliman Cake',
              'foodPrice': '125000'
            },
          ]
        },
      ]
    }
  }
}
