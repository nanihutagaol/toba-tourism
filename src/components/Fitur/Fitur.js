export default {
  name: "Fitur",
  data () {
    return {
      features : [
        {
          id: 0,
          name : 'pariwisata',
          description: 'Kunjungi tempat menarik',
          image : require('@/assets/Pariwisata.jpg')
        },
        {
          id: 1,
          name : 'kuliner',
          description: 'Lihat makanan daerah yang menggugah selera',
          image : require('@/assets/Kuliner.jpg')
        },
        {
          id: 2,
          name : 'transportasi',
          description: 'Mau Naik Apa Hari ini ?',
          image : require('@/assets/Transportasi.jpg')
        }
      ]
    }
  },
  methods: {

  }
}
