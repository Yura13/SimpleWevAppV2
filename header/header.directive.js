(function() {
    'use strict';

    angular.module('app')
        .directive("appHeader", appHeader);

    function appHeader() {
        var headerDirective = {
            restrict: 'EA',
            templateUrl: 'header/header.directive.html',
            controller: headerController,
            controllerAs: 'vm'
        };

        return headerDirective;
    }

    function headerController() {
        var vm = this;
        vm.isCollapsed = true;
    }
})();