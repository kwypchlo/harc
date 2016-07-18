import HartWidgetTemperatureController from './hart-widget-temperature-controller';

export default {
  template: require('./hart-widget-temperature.html'),
  controller: HartWidgetTemperatureController,
  bindings: {
    data: '<'
  },
  require: {
    dashboardCtrl: '^^hartDashboard'
  }
};