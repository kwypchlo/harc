import {debounce} from 'lodash';

const debounced = {};

export default class HarcWidgetTemperatureController {

  constructor($scope, harcWidgetTemperatureApiService) {
    this.$scope = $scope;
    this.api = harcWidgetTemperatureApiService;
  }

  $onInit() {
    this.dashboardCtrl.registerWidget('temperature');
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

HarcWidgetTemperatureController.$inject = ['$scope', 'harcWidgetTemperatureApiService'];