import Collapsible from '@/components/Collapsible'
export default {
  name: 'SortKuliner',
  data () {
    return {
      selectedSort: ''
    }
  },
  components: {
    Collapsible
  },
  props: {
  },
  computed: {
    listOfSortCriteria () {
      let sortCriteria = [
        {sortParam: 'name', sortName: 'Nama Ascending', type: 'asc', isActive: false, idx: 1},
        {sortParam: 'name', sortName: 'Nama Descending', type: 'dsc', isActive: false, idx: 2},
        {sortParam: 'price', sortName: 'Harga Terendah', type: 'asc', isActive: false, idx: 3},
        {sortParam: 'price', sortName: 'Harga Tertinggi', type: 'dsc', isActive: false, idx: 4}
      ]
      return sortCriteria
    }
  },
  methods: {
    onSortBy (criteria) {
      let self = this
      criteria.isActive = true

      this.listOfSortCriteria.forEach(function (list) {
        if (list.idx !== criteria.idx) {
          list.isActive = false
        }
      })

      this.selectedSort = {
        param: criteria.sortParam,
        type: criteria.type
      }

      this.$emit('onSortBy', this.selectedSort)
    },
  }
}
