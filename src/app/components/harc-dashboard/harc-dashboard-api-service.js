export default class HarcDashboardApiService {

  constructor($http) {
    this.$http = $http;
  }

  get(widgets) {
    return this.$http.get('/api/dashboard.json', {params: widgets}).then((response) => response.data);
  }

}

HarcDashboardApiService.$inject = ['$http'];