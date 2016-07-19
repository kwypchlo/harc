import angular from 'angular';
import harcTemperatureFieldComponent from './harc-temperature-field-component';
import './harc-temperature-field.css';

const module = angular
  .module('harcTemperatureField', [])
  .component('harcTemperatureField', harcTemperatureFieldComponent);

export default module.name;
