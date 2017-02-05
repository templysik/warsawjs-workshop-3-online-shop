/**
 * Created by efplpilys on 2017-02-05.
 */
(function () {
    "use strict";

    class ShopComponent {
        constructor() {
            this.templateUrl = "app/templates/ShopTemplate.html"
        }

    }
    angular.module('shop')
        .component("shopComponent", new ShopComponent())

})();