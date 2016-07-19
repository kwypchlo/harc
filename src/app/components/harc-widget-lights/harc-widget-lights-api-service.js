export default class HarcWidgetLightsApiService {

  constructor($http) {
    this.$http = $http;
  }

  save(room) {
    return this.$http.put(`/api/dashboard/lights/${room.id}`, { value: room.value })
      .then((response) => response.data);
  }

}

HarcWidgetLightsApiService.$inject = ['$http'];
