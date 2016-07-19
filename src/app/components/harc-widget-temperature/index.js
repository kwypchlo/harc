import angular from 'angular';
import harcWidget from '../harc-widget';
import harcTemperatureField from '../harc-temperature-field';
import harcWidgetTemperatureComponent from './harc-widget-temperature-component';
import HarcWidgetTemperatureApiService from './harc-widget-temperature-api-service';
import './harc-widget-temperature.css';

const module = angular.module('harcWidgetTemperature', [harcWidget, harcTemperatureField])
  .component('harcWidgetTemperature', harcWidgetTemperatureComponent)
  .service('harcWidgetTemperatureApiService', HarcWidgetTemperatureApiService);

export default module.name;
