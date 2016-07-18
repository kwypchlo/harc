import angular from 'angular';
import hartWidgetCurtains from '../hart-widget-curtains';
import hartWidgetLights from '../hart-widget-lights';
import hartWidgetTemperature from '../hart-widget-temperature';
import hartDashboardComponent from './hart-dashboard-component';
import HartDashboardApiService from './hart-dashboard-api-service';

const module = angular
  .module('hartDashboard', [hartWidgetCurtains, hartWidgetLights, hartWidgetTemperature])
  .component('hartDashboard', hartDashboardComponent)
  .service('hartDashboardApiService', HartDashboardApiService);

export default module.name;