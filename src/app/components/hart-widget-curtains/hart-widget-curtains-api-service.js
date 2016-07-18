export default class HartWidgetCurtainsApiService {

  constructor($http) {
    this.$http = $http;
  }

  save(room) {
    return this.$http.put(`/api/dashboard/curtains/${room.id}`, {value: room.value})
      .then((response) => response.data);
  }

}

HartWidgetCurtainsApiService.$inject = ['$http'];