export default class HarcWidgetLightsApiService {

  constructor($http) {
    this.$http = $http;
  }

  /**
   * Save lights settings for a single room
   *
   * @param {Object} room - room object containing id and value
   * @returns {Promise}
   */
  save(room) {
    return this.$http.put(`/api/dashboard/lights/${room.id}`, { value: room.value })
      .then((response) => response.data);
  }

}

HarcWidgetLightsApiService.$inject = ['$http'];
