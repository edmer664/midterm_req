import { removePreloader } from "./animations.js";

document.addEventListener('DOMContentLoaded', function () {


    setTimeout(function () {
        removePreloader();
        setTimeout(function () {
            console.log('running aos');
            AOS.init();
        }, 1000);
    }, 5000);
});