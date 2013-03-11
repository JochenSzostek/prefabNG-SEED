'use strict';

/* Controllers */


function HomeCtrl($scope, $log) {
	$log.info('> HomeCtrl');
}


//HomeCtrl.$inject = [$log];


function LogCtrl($scope, log) {
	$scope.$log = log;
	$scope.message = 'default logmsg';
}

function TreeCtrl($scope, $log, logutil) {
	$log.info('> TreeCtrl');
//	$log.log('logutil: ',logutil);
//	_logutil.inspect('angular');
    $scope.selected = function () {
        $log.info(this.item.name + ' is selected: ' + this.$selected);
    };
    $scope.model = [
        {
            name: 'Item 1',
            children: [
                {
                    name: 'Item 1.1'
                }, {
                    name: 'Item 1.2',
                    children: [
                        {
                            name: 'Item 1.2.1',
                            children: [
                                {
                                    name: 'Item 1.2.1.1'
                                }, {
                                    name: 'Item 1.2.1.2'
                                }
                            ]
                        }, {
                            name: 'Item 1.2.1'
                        }
                    ]
                }
            ]
        }
    ];

    $scope.changeTree = function(){
        $log.info("> changeTree: ",$scope.model[0].children[1].name);
        $scope.model[0].children[1].name = "test";
    }

}
//LogCtrl.$inject = [$log];
