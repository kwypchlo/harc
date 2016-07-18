import angular from 'angular';
import hartWidget from '../hart-widget';
import hartWidgetLightsComponent from './hart-widget-lights-component';
import HartWidgetLightsApiService from './hart-widget-lights-api-service';
import './hart-widget-lights.css';

const module = angular.module('hartWidgetLights', [hartWidget])
  .component('hartWidgetLights', hartWidgetLightsComponent)
  .service('hartWidgetLightsApiService', HartWidgetLightsApiService);

export default module.name;