import HartWidgetLightsController from './hart-widget-ligths-controller';

export default {
  template: require('./hart-widget-lights.html'),
  controller: HartWidgetLightsController,
  bindings: {
    data: '<'
  },
  require: {
    dashboardCtrl: '^^hartDashboard'
  }
};