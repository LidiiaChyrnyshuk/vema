const endDate = new Date("2025-06-01T00:00:00").getTime();

function addZero(num) {
	return num < 10 ? "0" + num : num;
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const countdownEl = document.getElementById("countdown");

const interval = setInterval(() => {
	const now = new Date().getTime();
	const timeLeft = endDate - now;

	if (timeLeft <= 0) {
		clearInterval(interval);
		countdownEl.innerHTML = "<h2>Час вийшов!</h2>";
		return;
	}

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	

	daysEl.textContent = addZero(days);
	hoursEl.textContent = addZero(hours);
	minutesEl.textContent = addZero(minutes);
	
}, 1000);
