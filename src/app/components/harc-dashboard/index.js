import angular from 'angular';
import harcWidgetCurtains from '../harc-widget-curtains';
import harcWidgetLights from '../harc-widget-lights';
import harcWidgetTemperature from '../harc-widget-temperature';
import harcDashboardComponent from './harc-dashboard-component';
import HarcDashboardApiService from './harc-dashboard-api-service';

const module = angular
  .module('harcDashboard', [harcWidgetCurtains, harcWidgetLights, harcWidgetTemperature])
  .component('harcDashboard', harcDashboardComponent)
  .service('harcDashboardApiService', HarcDashboardApiService);

export default module.name;