import angular from 'angular';
import ngMaterial from 'angular-material';
import harcDashboard from './components/harc-dashboard';

import 'normalize.css/normalize.css';
import 'angular-material/angular-material.css';
import '../style/icomoon.css';
import '../style/app.css';

const app = () => ({
  template: require('./app.html'),
  controller: 'AppCtrl',
  controllerAs: 'app',
});

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial, harcDashboard])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
