/*
    Scroll To
*/

// Eine scroll to animation die von unten bei back-to-top bis ganz nach oben scrollt.
document.querySelector('#back-to-top').addEventListener('click', (_e) => {
    _e.preventDefault();
    TweenLite.to(window, 1, { scrollTo: 0 });
});

// Eine scroll to animation. Wenn man auf das Logo drückt kommt man immer bis ganz nach oben.
document.querySelector('#logo').addEventListener('click', (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, {scrollTo: 0});
});

// Eine scroll to animation. Wenn man ganz unten auf das Footer Logo drückt kommt man bis ganz nach oben.
document.querySelector('.f_logo').addEventListener('click', (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, {scrollTo: 0});
})

// Eine scroll to animation. Wenn man auf den nav link Products drückt, scrollt die Animation zur h2 Products.
document.querySelector('.nav_products').addEventListener('click', (_e) => {
  _e.preventDefault();
  TweenLite.to(window, 1, {scrollTo: "#products"});
});



/*
    Sticky Nav
*/

window.addEventListener('scroll', stickyNavigation)

const nav = document.querySelector('.j-nav');
const navTop = nav.offsetTop;
const header = document.querySelector('header');

function stickyNavigation() {

  if (window.scrollY <= navTop) {
    header.style.paddingTop = 0;
    header.classList.remove('fixed-nav');
  } else {
    header.style.paddingTop = nav.offsetHeight + 'px';
    header.classList.add('fixed-nav');
    
  }
};


/*
  Scroll down animation. Textfeld und Bild kommen von links hineingeflogen.
*/

window.sr = ScrollReveal ({
    distance: '50px',
    duration: 1000,
    easing: 'ease',
    reset: true,
    viewFactor: 0.4,
});

    sr.reveal('.first_sect',{
        origin: 'left', 
    });


/*
    Text animation. Die Buchstaben werden nacheinander geschrieben.
*/

let txt = "Gintastic \n Gin it yourself.";
let splitten = txt.split("");
let headline = document.querySelector('.headline_txt');

(function animate() {
let x = splitten.shift();

splitten.length > 0 ? headline.innerHTML += ( x === '\n'?'<br>':x) : clearTimeout(running); 
let running = setTimeout(animate, 90);
})();

    
/*
  Button animation mit Einkaufwagen bounce. 
*/

window.onload = function(){
  let tl = new TimelineMax();
  let btns = document.querySelectorAll('.btn_item');
  let counter = 0;
  for (const btn of btns) {

    btn.addEventListener("click", function(_e) {
      _e.preventDefault();
      let clickedBtn = _e.target;
      

     // Button Animation. Bei klick schließt es sich und öffnet sich wieder.
      tl.to(clickedBtn, 1, {opacity:1, rotationY:0, ease:Expo.easeOut});
      tl.to(clickedBtn, 0.2, {rotationY:90, ease:clickedBtn.easeOut});
      tl.to(clickedBtn, 0.2, {opacity:0});
      tl.to(clickedBtn, 0.1, {css:{backgroundColor:"#ccc"}, ease:Circ.easeOut});
      tl.to(clickedBtn, 0.2, {scaleX:0.5, transformOrigin:"50% 50%", ease:Expo.easeOut});
      tl.to(clickedBtn, 0.25, {rotationX: 90});
  
      tl.set(clickedBtn, {clearProps:"all"});

      // Einkaufwagen Animation Bounce Effekt, wenn der Button "Add to Cart" geklickt wird.
      tl.to("#svg_animation", .10, {transformOrigin: "50% 100%", scaleY:0.25, yoyo:true, repeat:1})
        .to("#svg_animation", .15, {y:-10, ease:Circ.easeOut, yoyo:true, repeat:1}); 

      // Bei Button klick wird die Anzahl raufgezählt und nach 2 Sekunden ausgegeben.
          setTimeout(function (){
          counter = counter+1;
          document.getElementById('count').innerHTML = counter;
        }, 2000);
    });

  };
  
  // Animation für das Logo im Nav Bereich.
  let lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: function(el, i) { return i * 250 },
    direction: 'forwards',
    loop: false,
  });
};


