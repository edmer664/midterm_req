import { removePreloader } from "./animations.js";

document.addEventListener('DOMContentLoaded', function () {


    setTimeout(function () {
        removePreloader();
        setTimeout(function () {
            console.log('running aos');
            AOS.init();
        }, 1000);
    }, 3000);


    document.getElementById('sup').addEventListener('click', function () {
        alert('Don\'t be afraid to break the link. Sometimes, a new connection is all you need.');
    });
});