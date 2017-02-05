(function () {
    "use strict";

    function productsService($http) {
        let products = {
            list: []
        };
        $http.get('http://localhost:2095/products').then(loadProducts);
        function loadProducts(response) {
            products.list = response.data;
        }

        return {
            get(){
                return products;
            },

        }
    }

    angular.module('shop')
        .factory("productsService", productsService)

})();
