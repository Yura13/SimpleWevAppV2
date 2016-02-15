(function() {
    'use strict';

    angular.module('app')
        .directive("appFooter", appFooter);

    function appFooter() {
        var footerDirective = {
            restrict: 'EA',
            templateUrl: 'footer/footer.directive.html'
        };

        return footerDirective;
    }
})();