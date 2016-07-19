import { debounce } from 'lodash';

const debounced = {};

export default class HarcWidgetLightsController {

  constructor(harcWidgetLightsApiService) {
    this.api = harcWidgetLightsApiService;
  }

  $onInit() {
    this.dashboardCtrl.registerWidget('lights');
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

HarcWidgetLightsController.$inject = ['harcWidgetLightsApiService'];
