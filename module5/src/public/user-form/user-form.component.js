(function () {
    "use strict"
    
    angular.module('public')
    .component('userForm', {
        templateUrl: 'src/public/user-form/user-form.html',
        bindings: {
            shortNames: '<'
        },
        controller: UserFormController
    });
    
    UserFormController.$inject = ['MenuService'];
    
    function UserFormController(MenuService) {
        var $ctrl = this;
        
        $ctrl.submit = function () {
            MenuService.setUserInfo($ctrl.user);
            $ctrl.comleted = true;
        };
    }
})();