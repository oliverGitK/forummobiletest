(function (){
	'use strict';
	angular.module('eliteApp')
	.controller('ForumsCtrl', ['$scope', '$state','forumApi', ForumsCtrl]);

	function ForumsCtrl($scope, $state, forumApi){
		var vm = this;
		$scope.username = forumApi.currentUser;
		console.log("forum user" +  $scope.username);
		console.log(forumApi);
		forumApi.getServices().then(function (data){
			vm.services = data;
			console.log(data);
		});

		vm.selectForum = function(id){
			forumApi.setForumId(id);
			$state.go("app.forum-detail");
		}
	}
})();