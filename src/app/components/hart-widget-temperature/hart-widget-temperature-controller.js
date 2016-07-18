import {debounce} from 'lodash';

const debounced = {};

export default class HartWidgetTemperatureController {

  constructor($scope, hartWidgetTemperatureApiService) {
    this.$scope = $scope;
    this.api = hartWidgetTemperatureApiService;
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

HartWidgetTemperatureController.$inject = ['$scope', 'hartWidgetTemperatureApiService'];