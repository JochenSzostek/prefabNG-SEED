/**
 * Created with JetBrains WebStorm.
 * User: jochen
 * Date: 19/03/13
 * Time: 19:07
 * To change this template use File | Settings | File Templates.
 */

angular.module('myApp', ['prefabLog']).//, 'myApp.psServices']). , 'psUtil'
//angular.module('myApp', ['prefabLog']).//, 'myApp.psServices']).

  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/logging', {templateUrl: 'partials/logging.html', controller: LogCtrl});
    $routeProvider.otherwise({redirectTo: '/logging'});
  }])

//  .run(['$rootScope',prefab.include]);
;
