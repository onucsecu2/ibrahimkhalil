// (function() {
//     let sectionElems = document.getElementsByTagName('section');
//     for(let i=0; i<sectionElems.length; i++) {
//         if (i%2===1){
//             sectionElems[i].classList.add('section-bg');
//         }
//     }
// })();
(function() {
    let locationImageElem = document.getElementById('callout-location');
    let locationTextElem = document.getElementById('location');
    locationTextElem.addEventListener("mouseenter", function (e) {
        locationImageElem.style.display="inline-block";
        locationImageElem.classList.add("animate-fade");
        locationImageElem.classList.remove("fade-out");


    })

    locationTextElem.addEventListener("mouseout", function (e) {
        locationImageElem.classList.add("fade-out");
    })
})();