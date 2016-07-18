import angular from 'angular';
import hartWidget from '../hart-widget';
import hartWidgetCurtainsComponent from './hart-widget-curtains-component';
import HartWidgetCurtainsApiService from './hart-widget-curtains-api-service';
import './hart-widget-curtains.css';

const module = angular.module('hartWidgetCurtains', [hartWidget])
  .component('hartWidgetCurtains', hartWidgetCurtainsComponent)
  .service('hartWidgetCurtainsApiService', HartWidgetCurtainsApiService);

export default module.name;