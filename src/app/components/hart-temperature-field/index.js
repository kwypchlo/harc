import angular from 'angular';
import hartTemperatureFieldComponent from './hart-temperature-field-component';
import './hart-temperature-field.css';

const module = angular
  .module('hartTemperatureField', [])
  .component('hartTemperatureField', hartTemperatureFieldComponent);

export default module.name;