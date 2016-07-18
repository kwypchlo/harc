import HarcWidgetCurtainsController from './harc-widget-curtains-controller';

export default {
  template: require('./harc-widget-curtains.html'),
  controller: HarcWidgetCurtainsController,
  bindings: {
    data: '<'
  },
  require: {
    dashboardCtrl: '^^harcDashboard'
  }
};