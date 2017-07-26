(function () {
    'use strict';

    angular
        .module('searches')
        .run(menuConfig);

    menuConfig.$inject = ['Menus'];

    function menuConfig(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', {
            title: 'Searches',
            state: 'searches',
            type: 'dropdown',
            roles: ['*']
        });

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'searches', {
            title: 'List Searches',
            state: 'searches.list'
        });

        // Add the dropdown create item
        Menus.addSubMenuItem('topbar', 'searches', {
            title: 'Create Search',
            state: 'searches.create',
            roles: ['user']
    });
  }
}());
