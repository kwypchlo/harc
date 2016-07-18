export default class HarcWidgetTemperatureApiService {

  constructor($http) {
    this.$http = $http;
  }

  save(room) {
    return this.$http.put(`/api/dashboard/temperature/${room.id}`, {value: room.value})
      .then((response) => response.data);
  }

}

HarcWidgetTemperatureApiService.$inject = ['$http'];