(function() {
    'use strict';

    angular.module("app")
        .controller("photosController", photosController);

    photosController.$inject = ["dataFactory"];

    function photosController(dataFactory) {
        var vm = this;
        vm.title = "My photos";
        vm.slideInterval = 3000;
        vm.slides = dataFactory.slides;
    }
})();