import HomeController from './home.controller';

const HomeComponent = {
  controller: HomeController,
  controllerAs: '$ctrl',
  template: `<div ng-repeat="user in $ctrl.users">
              <h2>{{user.name}}</h2>
            </div>`
}

export default HomeComponent;
