import { debounce } from 'lodash';

const debounced = {};

export default class HarcWidgetCurtainsController {

  constructor(harcWidgetCurtainsApiService) {
    this.api = harcWidgetCurtainsApiService;
  }

  $onInit() {
    this.dashboardCtrl.registerWidget('curtains');
  }

  change(room) {
    if (!debounced[room.id]) {
      debounced[room.id] = debounce((item) => {
        return this.api.save(item).then((response) => (this.data[this.data.indexOf(item)] = response));
      }, 500);
    }

    // call debounced function
    debounced[room.id](room);
  }
}

HarcWidgetCurtainsController.$inject = ['harcWidgetCurtainsApiService'];
