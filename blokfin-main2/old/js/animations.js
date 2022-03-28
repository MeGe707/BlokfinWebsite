const cards1Text = document.querySelector(".card-1-text");

function animation () {

  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t1.fromTo(cards1Text, 2, {opacity: 0}, { opacity: 1 });
  t1.fromTo(".card-1-image-1", 2, {x: "-7rem", y: "10rem", opacity: 0}, {x: "0rem", y: "0rem", opacity:1 }, "-=2");
  t1.fromTo(".card-1-image-2", 2, {x: "-7rem", y: "10rem", opacity: 0}, {x: "0rem", y: "0rem", opacity:1 }, "-=2");
  t1.fromTo(".card-1-image-3", 2, {x: "-7rem", y: "10rem", opacity: 0}, {x: "0rem", y: "0rem", opacity:1 }, "-=2");


    new ScrollMagic.Scene({
    triggerElement: ".scroll-1",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t1)
    .addTo(controller);
}



  const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t3.fromTo(".header-text", 3, {opacity: 0}, { opacity: 1 }, );










animation();