import HarcWidgetTemperatureController from './harc-widget-temperature-controller';

export default {
  template: require('./harc-widget-temperature.html'),
  controller: HarcWidgetTemperatureController,
  bindings: {
    data: '<'
  },
  require: {
    dashboardCtrl: '^^harcDashboard'
  }
};