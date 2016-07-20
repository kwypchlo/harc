import { debounce } from 'lodash';

const debounced = {};

export default class HarcWidgetTemperatureController {

  constructor($mdToast, harcWidgetTemperatureApiService) {
    this.$mdToast = $mdToast;
    this.api = harcWidgetTemperatureApiService;
  }

  $onInit() {
    this.dashboardCtrl.registerWidget('temperature');
  }

  /**
   * Change callback for temperature field. Debounces the api call by 500ms.
   *
   * @param {Object} room - full room object, as returned by the api
   */
  change(room) {
    if (!debounced[room.id]) {
      debounced[room.id] = debounce((item) => {
        return this.api.save(item).then(
          (response) => (this.data[this.data.indexOf(item)] = response),
          () => {
            this.dashboardCtrl.refresh('temperature'); // TODO: this could refresh only one room
            this.$mdToast.show(this.$mdToast.simple().textContent('Unhandled API error!'));
          }
        );
      }, 500);
    }

    // call debounced function
    debounced[room.id](room);
  }

}

HarcWidgetTemperatureController.$inject = ['$mdToast', 'harcWidgetTemperatureApiService'];
