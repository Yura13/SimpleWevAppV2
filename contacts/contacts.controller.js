(function() {
    'use strict';

    angular.module("app")
        .controller("contactsController", contactsController);

    contactsController.$inject = ["dataFactory"];

    function contactsController(dataFactory) {
        var vm = this;
        vm.info = dataFactory.contacts;
    }
})();