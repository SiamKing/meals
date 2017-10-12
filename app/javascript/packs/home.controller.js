import ngResource from 'angular-resource';

class HomeController {
  constructor($resource) {
    this.$resource = $resource;

  }

  users() {
    $resource.get('/users')
      .then(response => {
        console.log(response)
        return response.data
      })
  }


}

HomeController.$inject = ["ngResource"];

export default HomeController;
