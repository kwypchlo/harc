import angular from 'angular';
import harcWidget from '../harc-widget';
import harcWidgetLightsComponent from './harc-widget-lights-component';
import HarcWidgetLightsApiService from './harc-widget-lights-api-service';
import './harc-widget-lights.css';

const module = angular.module('harcWidgetLights', [harcWidget])
  .component('harcWidgetLights', harcWidgetLightsComponent)
  .service('harcWidgetLightsApiService', HarcWidgetLightsApiService);

export default module.name;