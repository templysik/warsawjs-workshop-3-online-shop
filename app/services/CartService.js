(function () {
    "use strict";

    function cartService(productsService) {
        let products = {
            list: []
        }

        return {
            get(){
                return products;
            },
            addToCart(product)
            {
                let index = products.list.findIndex((_product) => {
                    return _product.id === product.id;
                });
                if (index == -1)
                    products.list.push(product);
            },
            removeFromCartById(id)
            {
                let index = products.list.findIndex((product) => {
                    return product.id === id;
                });
                products.list.splice(index, 1);
                // productsService.get().list[index].added = false;
            }

        }
    }

    angular.module('shop')
        .factory("cartService", cartService)

})();
/**
 * Created by efplpilys on 2017-02-05.
 */
