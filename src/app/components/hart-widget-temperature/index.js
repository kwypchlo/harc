import angular from 'angular';
import hartWidget from '../hart-widget';
import hartTemperatureField from '../hart-temperature-field';
import hartWidgetTemperatureComponent from './hart-widget-temperature-component';
import HartWidgetTemperatureApiService from './hart-widget-temperature-api-service';
import './hart-widget-temperature.css';

const module = angular.module('hartWidgetTemperature', [hartWidget, hartTemperatureField])
  .component('hartWidgetTemperature', hartWidgetTemperatureComponent)
  .service('hartWidgetTemperatureApiService', HartWidgetTemperatureApiService);

export default module.name;