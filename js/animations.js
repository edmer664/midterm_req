function removePreloader(){
    console.log('removing preloader');
    var preloader = document.getElementById('preloader__body');
    // animate out exit up
    preloader.classList.add('preloader-exit');
    // hide preloader after animation
    preloader.addEventListener('animationend', function(){
        setTimeout(function(){
            preloader.style.display = 'none';
        }, 1000);
    });

}

export { removePreloader };