window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.transform = "rotateX(0deg)";
      card.style.opacity = 1;
    }
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach(card => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});

gsap.from(".hero h2", {
  y: 50,
  opacity: 0,
  duration: 1.5
});
/* 🎬 CINEMATIC SCROLL SHAKE */
gsap.utils.toArray(".card").forEach(card => {
  gsap.fromTo(card,
    { rotate: -2 },
    {
      rotate: 2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play pause resume pause"
      }
    }
  );
});

/* 🚀 MARKETING LAUNCH EFFECT */
gsap.from(".magic-text", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.4)",
  scrollTrigger: {
    trigger: ".magic-text",
    start: "top 80%"
  }
});
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.fromTo(card,
      { boxShadow: "0 0 0 rgba(0,0,255,0)" },
      { boxShadow: "0 0 40px rgba(0,120,255,1)", duration: 0.4 }
    );
  });
});
gsap.registerPlugin(ScrollTrigger);

/* CINEMATIC SECTION REVEAL */
gsap.utils.toArray(".section").forEach(section => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      }
    }
  );
});

/* PREMIUM CARD STAGGER */
gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 1.6,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%"
  }
});
/* SOFT FLOAT FOR DIGITAL FEEL */
gsap.to(".card", {
  y: -10,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
