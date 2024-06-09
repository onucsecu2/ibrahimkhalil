(function() {
    let sectionElems = document.getElementsByTagName('section');
    for(let i=0; i<sectionElems.length; i++) {
        if (i%2===1){
            sectionElems[i].classList.add('section-bg');
        }
    }
})();
