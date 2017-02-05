/**
 * Created by efplpilys on 2017-02-05.
 */
(function () {
    "use strict";

    class CartComponent {
        constructor() {
            this.templateUrl = "app/templates/CartTemplate.html";
            this.controller = function (cartService) {
                this.items = cartService.get();
                this.removeItem = function (id) {
                    cartService.removeFromCartById(id);
                }
            }
        }


    }
    angular.module('shop')
        .component("cartComponent", new CartComponent())

})();