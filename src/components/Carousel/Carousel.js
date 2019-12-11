export default {
  name: 'CustomCarousel',
  data () {
    return {
      directionClass: '',
      images: [
        {
          id: 0,
          source: require('@/assets/desktop.jpg'),
          text: 'Pantai Lumban Bulbul Balige',
        },
        {
          id: 1,
          source: require('@/assets/Overlooking_by_Lance_Asper.jpg'),
          text: 'Pantai Pasir Putih Porsea',
        },
        {
          id: 2,
          source: require('@/assets/The_Gongga_Mountain_by_wangjinyu.jpg'),
          text: 'Dolok Tolong Balige',
        }
      ]
    }
  },
  methods: {}
}
