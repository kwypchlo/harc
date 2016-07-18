import {debounce} from 'lodash';

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
      debounced[room.id] = debounce((room) => {
        return this.api.save(room).then((response) => this.data[this.data.indexOf(room)] = response);
      }, 500);
    }

    // call debounced function
    debounced[room.id](room);
  }
}

HarcWidgetCurtainsController.$inject = ['harcWidgetCurtainsApiService'];