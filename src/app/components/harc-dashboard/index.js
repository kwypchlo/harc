import angular from 'angular';
import harcWidgetCurtains from '../harc-widget-curtains';
import harcWidgetLights from '../harc-widget-lights';
import harcWidgetTemperature from '../harc-widget-temperature';
import harcDashboardComponent from './harc-dashboard-component';
import HarcDashboardApiService from './harc-dashboard-api-service';
import './harc-dashboard.css';

/**
 * # Dashboard component
 *
 * This is a main application dashboard component that groups all widgets and fetches data.
 * All displayed widgets should be imported in this component.
 *
 * ## Creating widget component
 *
 * TL:DR: copy one of the pre-made widgets (eg. `harc-widget-lights`) and modify template, controller and service to fit your needs
 *
 * Creating new widget component step by step:
 *
 * - create a component with prefix `harc-widget-` (eg. `harc-widget-audio`)
 * - in a template file, your widget should be wrapped in `harc-widget` component
 * (see `harc-widget` documentation, make sure to import `harcWidget` module)
 *
 * ## Using widget component
 *
 * - in harc-dashboard component, add your widget to harc-dashboard.html with a class `harc-dashboard-widget`
 * - extend dashboard api to return widget data on general api call (with name of the widget as a param)
 */
const module = angular
  .module('harcDashboard', [harcWidgetCurtains, harcWidgetLights, harcWidgetTemperature])
  .component('harcDashboard', harcDashboardComponent)
  .service('harcDashboardApiService', HarcDashboardApiService);

export default module.name;
