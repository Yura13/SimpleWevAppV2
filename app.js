(function () {
    "use strict";

    angular.module("app", ["ui.router", "ui.bootstrap", "ngAnimate"])
        .config(configApp);

    function configApp($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "home/home.html",
                controller: "homeController as info"
            })
            .state("home.details", {
                views: {
                    "details": {
                        templateUrl: "home/home.details.html",
                        controller: "homeDetailsController as detail"
                    }
                }
            })
            .state("photos", {
                url: "/photos",
                templateUrl: "photos/photos.html",
                controller: "photosController as photos"
            })
            .state("contacts", {
                url: "/contacts",
                templateUrl: "contacts/contacts.html",
                controller: "contactsController as contacts"
            })
    }

})();
