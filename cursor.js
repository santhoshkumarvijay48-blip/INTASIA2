
const cursor = document.createElement("div");
cursor.style.cssText = `
  width: 18px; height: 18px; border-radius: 50%;
  position: fixed; pointer-events: none;
  background: rgba(0,100,255,0.9);
  box-shadow: 0 0 30px rgba(0,130,255,1);
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX+"px";
  cursor.style.top = e.clientY+"px";
});
