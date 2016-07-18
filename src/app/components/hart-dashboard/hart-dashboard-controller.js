export default class HartDashboardController {

  constructor(hartDashboardApiService) {
    this.api = hartDashboardApiService;
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
      // error handling
    });
  }

  registerWidget(widget) {
    if (this.widgets.indexOf(widget) === -1) {
      this.widgets.push(widget)
    }
  }

}

HartDashboardController.$inject = ['hartDashboardApiService'];