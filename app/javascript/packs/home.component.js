import HomeController from './home.controller';

const HomeComponent = {
  controller: HomeController,
  controllerAs: 'vm',
  template: `<div ng-repeat="user in vm.users">
              <h2>{{user}}</h2>
            </div>`
}

export default HomeComponent;
