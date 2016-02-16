(function() {
    "use strict";

    angular.module("app")
        .controller("homeController", homeController);

    homeController.$inject = ["dataFactory"];

    function homeController(dataFactory) {
        var vm = this;
        vm.person = dataFactory.person;
        vm.showMore = true;
    }
})();