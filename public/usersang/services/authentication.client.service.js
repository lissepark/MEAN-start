angular.module('usersang').factory('Authentication',[
	function(){
		this.user = window.user;

		return {
			user: this.user
		};
	}
]);