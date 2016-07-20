export default class HarcWidgetTemperatureApiService {

  constructor($http) {
    this.$http = $http;
  }

  /**
   * Save temperature settings for a single room
   *
   * @param {Object} room - room object containing id and value
   * @returns {Promise}
   */
  save(room) {
    return this.$http.put(`/api/dashboard/temperature/${room.id}`, { value: room.value })
      .then((response) => response.data);
  }

}

HarcWidgetTemperatureApiService.$inject = ['$http'];
