export default class HarcDashboardApiService {

  constructor($http) {
    this.$http = $http;
  }

  /**
   * Fetch the fresh data from the server for all the passed widgets
   *
   * @param {Array} widgets - array of widget names (strings)
   * @returns {Promise}
   */
  get(widgets = []) {
    return this.$http.get('/api/dashboard.json', { params: { widgets } }).then((response) => response.data);
  }

}

HarcDashboardApiService.$inject = ['$http'];
