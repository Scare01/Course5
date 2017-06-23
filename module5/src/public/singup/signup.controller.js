
(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['shortNames'];
    function SignUpController(shortNames) {
        var $ctrl = this;
        $ctrl.shortNamesFromMenuItems = shortNames;
    }

})();