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
          (response) => (this.data[this.data.indexOf(item)] = response), // TODO: add some notification?
          () => this.$mdToast.show(this.$mdToast.simple().textContent('Unhandled API error!')) // TODO: revert old value
        );
      }, 500);
    }

    // call debounced function
    debounced[room.id](room);
  }
}

HarcWidgetCurtainsController.$inject = ['$mdToast', 'harcWidgetCurtainsApiService'];
