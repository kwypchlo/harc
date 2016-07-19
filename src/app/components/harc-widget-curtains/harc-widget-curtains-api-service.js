export default class HarcWidgetCurtainsApiService {

  constructor($http) {
    this.$http = $http;
  }

  save(room) {
    return this.$http.put(`/api/dashboard/curtains/${room.id}`, { value: room.value })
      .then((response) => response.data);
  }

}

HarcWidgetCurtainsApiService.$inject = ['$http'];
