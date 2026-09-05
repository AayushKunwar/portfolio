const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", (e) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;

	eyes.forEach((eye) => {
		const rekt = eye.getBoundingClientRect();

		const anchorX = rekt.left + rekt.width / 2;
		const anchorY = rekt.top + rekt.height / 2;
		const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
		eye.style.transform = `rotate(${180 + angleDeg}deg)`;
	});
});

function angle(cx, cy, ex, ey) {
	const dy = ey - cy;
	const dx = ex - cx;
	const red = Math.atan2(dy, dx);
	const deg = red * (180 / Math.PI);
	return deg;
}

let r = document.querySelector(":root");
let mainColor = 0;
function changeColor() {
	mainColor = (mainColor + 1) % 360;
	setColor(mainColor);
}
setInterval(() => {
	changeColor();
}, 100);

function setColor(hue, lightness = 30) {
	r.style.setProperty("--main-color", `hsl(${hue},100%, ${lightness}%)`);
}
