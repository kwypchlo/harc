import angular from 'angular';
import ngMaterial from 'angular-material';
import hartDashboard from './components/hart-dashboard';

import 'normalize.css/normalize.css';
import 'angular-material/angular-material.css';
import '../style/icomoon.css';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {

  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial, hartDashboard])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;