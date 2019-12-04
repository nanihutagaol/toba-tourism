let routes = [
  {
    method: 'GET',
    url: '/api/experience/popular',
    response: {
      code: 'OK',
      message: 'Accepted',
      data: [
        {
          experienceId: 1,
          userName: 'Abdi Elman Daniel Aruan',
          profilePicture: '',
          picture: '',
          experience: 'Pengalaman yang sangat menyenangkan bisa berada di tempat ini. Ini tempat yang sangat recomended',
          rating: 4
        },
        {
          experienceId: 2,
          userName: 'Leni Maya Sihombing',
          profilePicture: '',
          picture: '',
          experience: 'Pengalaman yang sangat menyenangkan bisa berada di tempat ini. Ini tempat yang sangat recomended',
          rating: 5
        },
        {
          experienceId: 3,
          userName: 'Leonaldo Jose Pasiribu',
          profilePicture: '',
          picture: '',
          experience: 'Pengalaman yang sangat menyenangkan bisa berada di tempat ini. Ini tempat yang sangat recomended',
          rating: 4
        },
        {
          experienceId: 4,
          userName: 'Nani Hutagaol',
          profilePicture: '',
          picture: '',
          experience: 'Pengalaman yang sangat menyenangkan bisa berada di tempat ini. Ini tempat yang sangat recomended',
          rating: 3
        }
      ]
    }
  }
]

export default {
  routes
}
