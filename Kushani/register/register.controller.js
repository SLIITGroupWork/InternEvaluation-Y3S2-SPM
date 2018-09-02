export class RegistertController {
    constructor ($timeout, webDevTec, toastr,  $q, $scope, $http) {
        'ngInject';

        this.toastr = toastr;
        this.$http=$http;


    }

}

export class MainController {
    constructor($timeout, webDevTec, toastr, $http) {
        'ngInject';


        this.myfaves = [];
        this.toastr = toastr;
        this.$http=$http;


        this.theatre = '';
        this.tickPrice = '';
        this.snackPrice = '';
        this.movie = '';
        this.Bdate = '';
        this.nseat = 0;
        this.snackpack='';
        this.ntable = 0;
        this.qty = 0;
        this.rest='';
        this.mode='';


        debugger;
        this.loadinitialdata();

    }
    getWebDevTec(webDevTec) {
        this.myfaves = webDevTec.getTec();

        angular.forEach(this.myfaves, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }

    loadinitialdata() {
        var vm =this;
        this.$http.get('http://localhost:5000/api/').then(function(result){
            console.log(result.data.theatre);
            vm.theatres = result.data.theatre;
            console.log(vm.theatres);
            console.log(vm.theatres.movies);

        })

    }

    resetFields() {

    }

    loadDegrees(){
        var vm=this;
        console.log(this.theatre);
        var thr=this.theatre;
        vm.movies=thr.movies;
        console.log(thr.movies);
        vm.snacks=thr.snacks;
        console.log(thr.snacks);
        vm.rests=thr.rest;
        console.log(thr.rest);
    }
}