export default class HarcWidgetCurtainsApiService {

  constructor($http) {
    this.$http = $http;
  }

  /**
   * Save curtains settings for a single room
   *
   * @param {Object} room - room object containing id and value
   * @returns {Promise}
   */
  save(room) {
    return this.$http.put(`/api/dashboard/curtains/${room.id}`, { value: room.value })
      .then((response) => response.data);
  }

}

HarcWidgetCurtainsApiService.$inject = ['$http'];
