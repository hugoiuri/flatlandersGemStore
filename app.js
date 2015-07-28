(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.teste = "teste";
        this.products = gems;
    });

    var gems = [{
        name: "Dodecahedron",
        price: 2.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel hendrerit eros. Proin facilisis nulla a dolor fermentum, non suscipit tellus sagittis. Suspendisse facilisis sit amet ex sed pretium. Nullam condimentum malesuada sapien sed luctus. Curabitur pellentesque lacus ut arcu fermentum, quis placerat dolor congue. Ut dictum interdum metus, euismod vestibulum nulla congue a. Nulla ornare sit amet turpis id eleifend. Ut fermentum neque quis ipsum facilisis aliquam. Curabitur justo tortor, gravida a vestibulum eget, cursus in neque. Proin eu lacus ut mi dictum suscipit. Donec id est vel libero efficitur viverra eu et leo.",
        canPurchase: true,
        soldOut: false
    }, {
        name: "Dodecahedron 2",
        price: 2.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel hendrerit eros. Proin facilisis nulla a dolor fermentum, non suscipit tellus sagittis. Suspendisse facilisis sit amet ex sed pretium. Nullam condimentum malesuada sapien sed luctus. Curabitur pellentesque lacus ut arcu fermentum, quis placerat dolor congue. Ut dictum interdum metus, euismod vestibulum nulla congue a. Nulla ornare sit amet turpis id eleifend. Ut fermentum neque quis ipsum facilisis aliquam. Curabitur justo tortor, gravida a vestibulum eget, cursus in neque. Proin eu lacus ut mi dictum suscipit. Donec id est vel libero efficitur viverra eu et leo.",
        canPurchase: false,
        soldOut: true
    }, {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel hendrerit eros. Proin facilisis nulla a dolor fermentum, non suscipit tellus sagittis. Suspendisse facilisis sit amet ex sed pretium. Nullam condimentum malesuada sapien sed luctus. Curabitur pellentesque lacus ut arcu fermentum, quis placerat dolor congue. Ut dictum interdum metus, euismod vestibulum nulla congue a. Nulla ornare sit amet turpis id eleifend. Ut fermentum neque quis ipsum facilisis aliquam. Curabitur justo tortor, gravida a vestibulum eget, cursus in neque. Proin eu lacus ut mi dictum suscipit. Donec id est vel libero efficitur viverra eu et leo.",
        canPurchase: true,
        soldOut: false
    }, {
        name: "Hexagonal Gem",
        price: 9.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel hendrerit eros. Proin facilisis nulla a dolor fermentum, non suscipit tellus sagittis. Suspendisse facilisis sit amet ex sed pretium. Nullam condimentum malesuada sapien sed luctus. Curabitur pellentesque lacus ut arcu fermentum, quis placerat dolor congue. Ut dictum interdum metus, euismod vestibulum nulla congue a. Nulla ornare sit amet turpis id eleifend. Ut fermentum neque quis ipsum facilisis aliquam. Curabitur justo tortor, gravida a vestibulum eget, cursus in neque. Proin eu lacus ut mi dictum suscipit. Donec id est vel libero efficitur viverra eu et leo.",
        canPurchase: false,
        soldOut: false
    }];
}())
