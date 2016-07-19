import HarcWidgetLightsController from './harc-widget-ligths-controller';

export default {
  template: require('./harc-widget-lights.html'),
  controller: HarcWidgetLightsController,
  bindings: {
    data: '<',
  },
  require: {
    dashboardCtrl: '^^harcDashboard',
  },
};
