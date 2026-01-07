gsap.registerPlugin(ScrollTrigger);

// Camera scroll animation
ScrollTrigger.create({
  trigger: "#scroll-container",
  start: "top top",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    camera.position.z = 5 - (self.progress*5);
    camera.rotation.y = self.progress*0.5;
  }
});

// Fade in sections
gsap.utils.toArray("section").forEach(sec => {
  gsap.from(sec, {
    autoAlpha: 0,
    y: 100,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  });
});
