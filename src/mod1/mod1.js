/**
 * @ngdoc module
 * @name mod1
 * @description
 * Contains helper services
 */
angular.module('mod1', [])

  /**
 * @ngdoc service
 * @name service1
 * @description  
 * Uses the $http service
 */
.factory('service1', ['$http', function($http) {

 
  return {
    /**
     * @ngdoc method
     * @name service1#get
     * @param  {string} itemId The id of the items to retrieve
     * @return {Promise}       A promise to the returned item.
     */
    get: function(itemId) {
      return $http.get('some/url/' + itemId).then(function(response) {
        return response.data;
      });
    }
  };
}]);