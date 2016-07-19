import angular from 'angular';
import harcWidgetComponent from './harc-widget-component';
import './harc-widget.css';

const module = angular.module('harcWidget', [])
  .component('harcWidget', harcWidgetComponent);

export default module.name;