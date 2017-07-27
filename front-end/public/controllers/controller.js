var app = angular.module('app', ['ui.router', 'ngFileUpload']);
app.value('serverURL', { value: 'http://localhost:8080' });

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

    .state('login', {
        url: "/login",
        templateUrl: 'templates/login.html',
        controller:"loginCtrl"
    })
    .state("home",{
        url:"/home",
        templateUrl : "templates/home.html",
        controller: "homeCtrl"
    })
    .state("addNewBuilding",{
        url:"/addNewBuilding",
        templateUrl : "templates/add-new-building.html",
        controller: "newBuildingController"
    })
    .state("editBuilding",{
        url:"/editBuilding",
        params: {
            _id: null,
            name: null,
            year: null,
            style: null,
            description: null,
            history: null,
            tipology: null,
            address:null
        },
        templateUrl : "templates/add-new-building.html",
        controller: "editBuildingController"
    })
    .state("building",{
        url:"/building",
        params: {
            _id: null,
            name: null,
            year: null,
            style: null,
            description: null,
            history: null,
            tipology: null,
            address:null,
            additionalInformations: null
        },
        templateUrl : "templates/building.html",
        controller: "buildingCtrl"
    })
    .state('addNewComplaint', {
        url: "/addNewComplaint",
        templateUrl: 'templates/add-new-complaint.html',
        controller:"addComplaintCtrl"
    })
    .state('complaintsPage', {
        url: "/complaintsPage",
        templateUrl: "templates/complaints-page.html",
        controller: "complaintsPageCtrl"
    })
    .state('complaint', {
        url: "/complaint",
        params: {
            _id: null,
            title: null,
            description: null,
            address: null
        },
        templateUrl: "templates/complaint.html",
        controller: "complaintCtrl"
    })
    .state('institutesInformationPage', {
        url: "/institutesInformationPage",
        templateUrl: "templates/institutes-information-page.html"
    })
    .state('searchBuildings', {
        url: "/searchBuildings",
        templateUrl: 'templates/search-for-buildings.html',
        controller:"searchForBuildingsCtrl"
    })
    .state('addNewTicket', {
        url: "/addNewTicket",
        templateUrl: 'templates/add-new-ticket.html',
        controller:"addTicketCtrl"
    })
    .state('ticketsPage', {
        url: "/ticketsPage",
        templateUrl: 'templates/tickets-page.html',
        controller:"ticketsPageCtrl"
    })

});

app.controller('MenuCtrl', ['serverURL', '$rootScope', '$scope', '$http', '$state', function(serverURL,$rootScope , $scope, $http, $state) {

    $scope.state = "default";

    $rootScope.$on('$viewContentLoading', function(event, viewConfig)
    {
        $scope.state = $state.current.name;
    });

    $scope.addPatrimony = function(){
        $state.go("addNewBuilding");
    }

    $scope.patrimonies = function() {
        $state.go("home");
    }

    $scope.login = function() {
        $state.go("login");
    }

    $scope.report = function() {
        $state.go("addNewComplaint");
    }

    $scope.institutes = function() {
        $state.go("institutesInformationPage");
    }

    $scope.listOfReports = function() {
        $state.go("complaintsPage");
    }

    $scope.search = function(){
        $state.go("searchBuildings");
    }
    
    $scope.addNewTicket = function(){
        $state.go("addNewTicket");
    }

    $scope.tickets = function(){
        $state.go("ticketsPage");
    }
}]);
