export default class HarcWidgetController {
  $onInit() {
    this.dashboardCtrl.registerWidget(this.widgetName);
  }
}

HarcWidgetController.$inject = [];
