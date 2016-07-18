import angular from 'angular';
import hartWidgetComponent from './hart-widget-component';
import './hart-widget.css';

const module = angular.module('hartWidget', [])
    .component('hartWidget', hartWidgetComponent);

export default module.name;