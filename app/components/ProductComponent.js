(function () {
    "use strict";

    class ProductComponent {
        constructor() {
            this.templateUrl = "app/templates/ProductTemplate.html";
            this.bindings = {
                product: '='
            };
            this.controller = function (cartService) {
                // this.added= false;
                this.addToCart = function (product) {
                    cartService.addToCart(product);
                    // this.added = true;
                }
            }
        }
    }
    angular.module('shop')
        .component("productComponent", new ProductComponent())
})();