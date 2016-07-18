export default class HartDashboardApiService {

  constructor($http) {
    this.$http = $http;
  }

  get(widgets) {
    return this.$http.get('/api/dashboard.json', {params: widgets}).then((response) => response.data);
  }

}

HartDashboardApiService.$inject = ['$http'];