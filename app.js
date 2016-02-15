(function() {
    'use strict';

    angular.module("app", ["ui.router", "ui.bootstrap", "ngAnimate"])
        .config(configApp);

    function configApp($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home/home.html",
                controller: "homeController",
                controllerAs: "info"
            })
            .state("home.details", {
                views: {
                    "details": {
                        templateUrl: "home/home.details.html",
                        controller: "homeDetailsController",
                        controllerAs: "detail"
                    }
                }
            })
            .state("photos", {
                url: "/photos",
                templateUrl: "photos/photos.html",
                controller: "photosController",
                controllerAs: "photos"
            })
            .state("contacts", {
                url: "/contacts",
                templateUrl: "contacts/contacts.html",
                controller: "contactsController",
                controllerAs: "contacts"
            })
    }

})();
