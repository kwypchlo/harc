import HarcWidgetController from './harc-widget-controller';

export default {
  template: require('./harc-widget.html'),
  controller: HarcWidgetController,
  bindings: {
    widgetName: '@',
  },
  transclude: {
    title: '?widgetTitle',
    icon: '?widgetIcon',
    content: 'widgetContent',
  },
  require: {
    dashboardCtrl: '^^harcDashboard',
  },
};
