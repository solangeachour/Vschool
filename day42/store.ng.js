var store = angular.module("mystore",[]);
store.service("store", function () {
    this.items = [];
    this.total = 0;
    this.add = function (item) {

        this.items.push(item);
        this.total += item.cost;

    };
});
 