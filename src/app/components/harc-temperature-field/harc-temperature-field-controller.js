export default class HarcTemperatureFieldController {

  /**
   * Increase value by 1 (use ngModel controller $viewValue, do not modify the model directly)
   */
  increase() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue + 1);
  }

  /**
   * Decrease value by 1 (use ngModel controller $viewValue, do not modify the model directly)
   */
  decrease() {
    this.modelCtrl.$setViewValue(this.modelCtrl.$viewValue - 1);
  }

}

HarcTemperatureFieldController.$inject = [];
