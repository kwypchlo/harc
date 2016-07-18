import HarcTemperatureFieldController from './harc-temperature-field-controller';

export default {
  template: require('./harc-temperature-field.html'),
  controller: HarcTemperatureFieldController,
  require: {
    modelCtrl: 'ngModel'
  }
};