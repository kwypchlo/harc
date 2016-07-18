import HartWidgetCurtainsController from './hart-widget-curtains-controller';

export default {
  template: require('./hart-widget-curtains.html'),
  controller: HartWidgetCurtainsController,
  bindings: {
    data: '<'
  },
  require: {
    dashboardCtrl: '^^hartDashboard'
  }
};