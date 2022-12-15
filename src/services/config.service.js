angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapiamh-env.eba-pkfahdt3.us-west-2.elasticbeanstalk.com/';

    return service;
}]);