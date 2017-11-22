var app = angular.module('app');

app.controller('accountCtrl', ['serverURL', '$scope', '$http', '$state', function(serverURL, $scope, $http, $state) {

	$scope.user = "";

    $scope.name = "";
    $scope.email = "";
    $scope.password = "";
    $scope.repeatPassword = "";
	
    user = function(user_id) {
    	$http({
    		method: 'GET', 
			url: serverURL.value + '/user/' + user_id
    	}).then(function success(response){
    		if(response.status == 200){
    			$scope.user = response.data;
            } else {
                alert('Houve um erro!');
            }
    	}, function error(response){
            console.log(response.status);
        });
    }

    user(sessionStorage.getItem("user"));

	$scope.delete = function(){
		$http({
			method: 'DELETE',
			url: serverURL.value + '/user/' + sessionStorage.getItem("user")
		}).then(function success(response){
            if(response.status == 200){
                sessionStorage.clear(); 
                $state.go("home");
            } else {
                alert('Houve um erro!');
            }
        }, function error(response){
            console.log(response.status);
        });
	}

	$scope.update = function() {
        data = {
            "name": $scope.name,
            "email": $scope.email,
            "password": $scope.password,
            "repeatPassword": $scope.repeatPassword,
        }

        $http({
            method: 'PUT',
            url: serverURL.value + '/user/edit/' + sessionStorage.getItem("user"),
            data: data
        }).then(function(response){
            console.log(response);
        });
	}

}]);

app.directive('ngConfirmClick', [
    function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
}])