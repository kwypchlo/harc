import angular from 'angular';
import harcWidget from '../harc-widget';
import harcWidgetCurtainsComponent from './harc-widget-curtains-component';
import HarcWidgetCurtainsApiService from './harc-widget-curtains-api-service';
import './harc-widget-curtains.css';

const module = angular.module('harcWidgetCurtains', [harcWidget])
  .component('harcWidgetCurtains', harcWidgetCurtainsComponent)
  .service('harcWidgetCurtainsApiService', HarcWidgetCurtainsApiService);

export default module.name;
