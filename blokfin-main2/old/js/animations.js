const cards1Text = document.querySelector(".card-1-text");

function animation () {

  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t1.fromTo(cards1Text, 2, {opacity: 0}, { opacity: 1 });
  t1.fromTo(".card-1-image-1", 2, {x: "-150rem"}, {x: "0rem"}, "-=2");
  t1.fromTo(".card-1-image-2", 2, {opacity: 0}, {opacity: 1}, "-=0");
  t1.fromTo(".card-1-image-3", 2, {x: "700rem"}, {x: "0rem"}, "-=4");


    new ScrollMagic.Scene({
    triggerElement: ".scroll-1",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t1)
    .addTo(controller);
}

  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t2.fromTo(".robot", 2, {opacity: 0, x: "500rem", y: "-100rem"}, { opacity: 1, x: "0", y: "0rem" }, );

  const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t3.fromTo(".header-text", 3, {opacity: 0}, { opacity: 1 }, );










animation();