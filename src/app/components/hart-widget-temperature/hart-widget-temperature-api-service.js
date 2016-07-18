export default class HartWidgetTemperatureApiService {

  constructor($http) {
    this.$http = $http;
  }

  save(room) {
    return this.$http.put(`/api/dashboard/temperature/${room.id}`, {value: room.value})
      .then((response) => response.data);
  }

}

HartWidgetTemperatureApiService.$inject = ['$http'];