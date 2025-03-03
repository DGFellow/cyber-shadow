document.addEventListener("mousemove", function (e) {
    const logo = document.querySelector(".logo");
    const x = (e.clientX / window.innerWidth) * 50;
    const y = (e.clientY / window.innerHeight) * 50;
    logo.style.textShadow = `${x}px ${y}px 20px #0074E4, -${x}px -${y}px 20px #9B51E0`;
});

setInterval(() => {
    const logo = document.querySelector(".logo");
    let flickerAmount = Math.random() * 10;
    logo.style.textShadow = `0 0 ${flickerAmount + 10}px #0074E4, 0 0 ${flickerAmount + 15}px #9B51E0, 0 0 ${flickerAmount + 20}px #0074E4`;
}, 2000);
