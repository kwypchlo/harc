export default {
  template: require('./harc-widget.html'),
  transclude: {
    title: '?widgetTitle',
    icon: '?widgetIcon',
    content: '?widgetContent'
  }
};