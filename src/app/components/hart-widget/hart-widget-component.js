export default {
  template: require('./hart-widget.html'),
  transclude: {
    title: '?widgetTitle',
    icon: '?widgetIcon',
    content: '?widgetContent'
  }
};