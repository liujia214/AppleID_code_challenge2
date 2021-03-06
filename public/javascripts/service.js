/**
 * Created by allenbklj on 10/13/15.
 */
var myApp = angular.module('buddyApp',['ngAnimate']);
myApp.controller('buddyController',function($scope){
    $scope.master = {};
    $scope.types = ['username','firstName','lastName','status','email','birthday'];
    //mock data
    $scope.buddies = [{username:'Amy',firstName:'Jia',lastName:'Liu',status:'available',
        email:'amy@gmail.com',birthday:'12/04/1988',bio:'Jia is a student in Beijingjiaotong University'},
        {username:'Lei',firstName:'Lei',lastName:'Liu',status:'busy',
            email:'lei@gmail.com',birthday:'12/04/1989',bio:'Lei is a really really good good developer'},
        {username:'Allen',firstName:'allen',lastName:'Han',status:'idle',
            email:'allen@gmail.com',birthday:'12/04/1989',bio:'Allen is a Berkeley grand, he really likes technology'},
        {username:'Alex',firstName:'Alex',lastName:'Long',status:'offline',
            lastSeen:'05/09/2015',email:'alex@gmail.com',birthday:'12/04/1988',bio:'Alex is a good spanish guy'},
        {username:'Natalie',firstName:'Natalie',lastName:'Park',status:'available',
            email:'natalie@gmail.com',birthday:'12/04/1988',bio:'Natalie is a good girl'}];

    //prioritize function
    $scope.prioritize = function(obj){
        var index = $scope.buddies.indexOf(obj);
        $scope.buddies.splice(index,1);
        $scope.buddies.unshift(obj);
    };
    //delete function
    $scope.delete = function(obj){
        document.getElementById('deleteBuddy').showModal();
        //confirm to delete buddy
        $scope.confirm = function(){
            document.getElementById('deleteBuddy').close();
            var index = $scope.buddies.indexOf(obj);
            $scope.buddies.splice(index,1);
        };
    };
    //cancel deleting buddy
    $scope.cancel = function(){
        document.getElementById('deleteBuddy').close();
    };
    //show add buddy dialog
    $scope.showDialog = function(){
        document.getElementById('addBuddy').showModal();
    };
    //cancel add buddy dialog
    $scope.close = function(event,form){
        document.getElementById('addBuddy').close();
        event.preventDefault();
        if(form){
            form.$setPristine();
            form.$setUntouched();
        }
        console.log($scope.user);
        $scope.user = angular.copy($scope.master);
        $scope.user.firstName = '';
        $scope.user.email = '';
    };
    //confirm to add buddy
    $scope.add = function(valid,event,form){
        if(valid){
            $scope.buddies.push($scope.user);
            $scope.close(event,form);
        }
    }
});