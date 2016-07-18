export default class HartTemperatureFieldController {

  constructor() {
  }

  increase() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue + 1);
  }

  decrease() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue - 1);
  }

}

HartTemperatureFieldController.$inject = [];