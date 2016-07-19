export default class HarcDashboardController {

  constructor($log, harcDashboardApiService) {
    this.$log = $log;
    this.api = harcDashboardApiService;
    this.data = {};
    this.widgets = [];
  }

  $onInit() {
    this.refresh();
  }

  refresh() {
    this.api.get(this.widgets).then((data) => {
      this.data = data;
    }, (error) => {
      this.$log.error('Unhandled error!', error);
    });
  }

  registerWidget(widget) {
    if (this.widgets.indexOf(widget) === -1) {
      this.widgets.push(widget);
    }
  }

}

HarcDashboardController.$inject = ['$log', 'harcDashboardApiService'];
