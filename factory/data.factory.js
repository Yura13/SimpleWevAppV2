(function() {
    "use strict";

    angular.module("app")
        .factory("dataFactory", dataFactory);

    function dataFactory() {
        var myDataFactory = {
            person: {
                name: "Yura",
                surname: "Dutchak",
                photo: "images/main_photo.jpg",
                description: "Lorem ipsum dolor sit amet, ut vero erant has, libris equidem est te, ius te agam eruditi. Est cu oratio vivendo, eu enim quidam his. No quod numquam sea, id fabulas tractatos mediocrem duo."
            },
            slides: [
                {id: 1, image: "images/slide_1.jpg"},
                {id: 2, image: "images/slide_2.jpg"}
            ],
            contacts: {
                city: "Ivano-Frankivsk",
                country: "Ukraine",
                phone: "(099) 999-99-99",
                fb: "https://www.facebook.com/iurii.dutchak",
                vk: "https://vk.com/id29553857"
            }
        };
        return myDataFactory;
    }
})();