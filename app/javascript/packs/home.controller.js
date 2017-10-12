class HomeController {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  $onInit = () => {
    this.$http({
      method: 'GET',
      url: '/users.json'
    })
    .then(res => {
      console.log(res.data)
      this.users = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default HomeController;
