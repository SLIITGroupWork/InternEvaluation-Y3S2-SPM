export class AuthController {
    constructor($timeout, webDevTec, toastr, $auth, $http,$location) {
        'ngInject';

        this.toastr = toastr;
        this.$auth = $auth;
        this.$location=$location;
        this.$http=$http;
    }

    // showToastr() {
    //   this.toastr.success('Successfully registerd! please sign in');
    // }
    register(){

        var vm =this;
        this.$auth.signup(this.user).then(function(token){
            vm.$auth.setToken(token);

        });
    }

    login(){

        var vm =this;
        this.$auth.login(this.login.user).then(function(token){
            vm.$auth.setToken(token);
            this.$location.path('#/home');
        });
    }


}