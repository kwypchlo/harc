export default class HarcDashboardController {

  constructor($mdToast, harcDashboardApiService) {
    this.$mdToast = $mdToast;
    this.api = harcDashboardApiService;
    this.data = {};
    this.widgets = [];
  }

  $onInit() {
    this.refreshAll();
  }

  /**
   * Refresh chosen widget (fetch new data from the server and assign it to component)
   */
  refresh(widget) {
    this.api.get([widget]).then(
      (data) => (this.data[widget] = data[widget]),
      () => this.$mdToast.show(this.$mdToast.simple().textContent('Unhandled API error!'))
    );
  }

  /**
   * Refresh all the widgets (fetch new data from the server and assign it to component)
   */
  refreshAll() {
    this.api.get(this.widgets).then(
      (data) => (this.data = data),
      () => this.$mdToast.show(this.$mdToast.simple().textContent('Unhandled API error!'))
    );
  }

  /**
   * Register widget component instance in the dashboard. All widgets that are displayed, have to be registered.
   *
   * @param {string} widget - widget identifier (eg. 'lights')
   */
  registerWidget(widget) {
    if (this.widgets.indexOf(widget) === -1) {
      this.widgets.push(widget);
    }
  }

}

HarcDashboardController.$inject = ['$mdToast', 'harcDashboardApiService'];
