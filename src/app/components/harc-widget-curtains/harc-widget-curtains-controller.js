import { debounce } from 'lodash';

const debounced = {};

export default class HarcWidgetCurtainsController {

  constructor($mdToast, harcWidgetCurtainsApiService) {
    this.$mdToast = $mdToast;
    this.api = harcWidgetCurtainsApiService;
  }

  $onInit() {
    this.dashboardCtrl.registerWidget('curtains');
  }

  /**
   * Change callback for curtains slider. Debounces the api call by 500ms.
   *
   * @param {Object} room - full room object, as returned by the api
   */
  change(room) {
    if (!debounced[room.id]) {
      debounced[room.id] = debounce((item) => {
        return this.api.save(item).then(
          (response) => (this.data[this.data.indexOf(item)] = response),
          () => {
            // TODO: this code below is commented out for the purpose of demo (uncomment for production)
            // this.dashboardCtrl.refresh('curtains'); // TODO: this could refresh only one room
            // this.$mdToast.show(this.$mdToast.simple().textContent('Unhandled API error!'));
          }
        );
      }, 500);
    }

    // call debounced function
    debounced[room.id](room);
  }
}

HarcWidgetCurtainsController.$inject = ['$mdToast', 'harcWidgetCurtainsApiService'];
