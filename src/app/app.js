import angular from 'angular';
import ngMaterial from 'angular-material';
import harcDashboard from './components/harc-dashboard';

import 'normalize.css/normalize.css';
import 'angular-material/angular-material.css';
import '../style/icomoon.css';
import '../style/app.css';

const appComponent = {
  template: require('./app.html'),
  controller: 'AppCtrl',
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/kwypchlo/harc';
  }
}

const module = angular.module('app', [ngMaterial, harcDashboard])
  .component('app', appComponent)
  .controller('AppCtrl', AppCtrl)
  .config(['$mdThemingProvider', ($mdThemingProvider) => {
    $mdThemingProvider.theme('default').accentPalette('indigo');
  }]);

export default module.name;
