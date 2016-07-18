export default class HarcTemperatureFieldController {

  constructor() {
  }

  increase() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue + 1);
  }

  decrease() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue - 1);
  }

}

HarcTemperatureFieldController.$inject = [];