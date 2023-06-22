const mainContainer = document.querySelector('.main-container');
const thankyouContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const rateAgainBtn = document.getElementById('rate-again');

const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
	thankyouContainer.classList.remove('hidden');
	mainContainer.style.display = 'none';
});

rateAgainBtn.addEventListener('click', () => {
	thankyouContainer.classList.add('hidden');
	mainContainer.style.display = 'block';
});

rates.forEach(rate => {
	rate.addEventListener('click', () => {
		rating.innerHTML = rate.innerHTML;
	});
});
