(function () {
    "use strict";

    class ProductListComponent {
        constructor() {
            this.templateUrl = "app/templates/ProductListTemplate.html";

            this.controller = function (productsService) {
                this.products = productsService.get();
            }
        }
    }
    angular.module('shop')
    .component("productListComponent", new ProductListComponent())

})();