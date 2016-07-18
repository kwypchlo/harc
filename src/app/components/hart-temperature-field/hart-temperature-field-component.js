import HartTemperatureFieldController from './hart-temperature-field-controller';

export default {
  template: require('./hart-temperature-field.html'),
  controller: HartTemperatureFieldController,
  require: {
    modelCtrl: 'ngModel'
  }
};