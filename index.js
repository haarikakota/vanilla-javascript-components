const apps = [
	{
		name: 'Form Validation',
		url: './form-validation/',
		image_path: './form-validation/form.PNG',
	},
	{
		name: 'Custom Video Player',
		url: './customVideoPlayer/',
		image_path: './customVideoPlayer/player.PNG',
	},
	{
		name: 'DOM Array Methods',
		url: './DomArrayMethods/',
		image_path: './DomArrayMethods/picture.PNG',
	},
	{
		name: 'Currency Converter',
		url: './exchange-rate/',
		image_path: './exchange-rate/picture.PNG',
	},
	{
		name: 'Expense Tracker',
		url: './ExpenseTracker/',
		image_path: './ExpenseTracker/picture.PNG',
	},
	{
		name: 'Hangman',
		url: './Hangman/',
		image_path: './Hangman/picture.PNG',
	},
	{
		name: 'Infinite Scroll',
		url: './infinite-scroll/',
		image_path: './infinite-scroll/picture.PNG',
	},
	{
		name: 'Meal Finder',
		url: './MealFinder/',
		image_path: './MealFinder/picture.PNG',
	},
	{
		name: 'Memory Cards',
		url: './memory-cards/',
		image_path: './memory-cards/picture.PNG',
	},
	{
		name: 'Modal Menu',
		url: './Modal-Menu/',
		image_path: './Modal-Menu/picture.PNG',
    },
	{
		name: 'Movie Seat Booking',
		url: './MovieSeatBooking/',
		image_path: './MovieSeatBooking/picture.PNG',
	},
	{
		name: 'Music Player',
		url: './MusicPlayer/',
		image_path: './MusicPlayer/picture.PNG',
	},
	{
		name: 'Text-to-speech',
		url: './speech-text/',
		image_path: './speech-text/picture.PNG',
	},
	{
		name: 'Typing Game',
		url: './typing-game/',
		image_path: './typing-game/picture.PNG',
	},
	{
		name: 'Lyrics Search',
		url: './lyrics-search/',
		image_path : './lyrics-search/picture.PNG'
	}, 
	{
		name : 'Relaxer',
		url: './relaxer-app/',
		image_path : './relaxer-app/picture.PNG'
	}, 
	{
		name : 'New Year Countdown',
		url : './newyear-countdown/',
		image_path : './newyear-countdown/picture.PNG'
	},
	{
		name : 'Speak Number Guesser',
		url : './speak-number-guesser',
		image_path : './speak-number-guesser/picture.PNG'
	},
	{
		name : '10 Richest People',
		url : './sortable-list/',
		image_path : './sortable-list/picture.PNG'
	}, 
	{
		name : 'BreakOut Game',
		url : './breakout-game/',
		image_path : './breakout-game/picture.PNG'
	},
	{
		name : 'Quote Generator',
		url : './quote-generator/',
		image_path : './quote-generator/picture.PNG'
	},
	{
		name : 'Infinity Scrolling',
		url : './infinity-scroll/',
		image_path : './infinity-scroll/picture.PNG'
	},
	{
		name : 'Picture in Picture',
		url : './picture-in-picture/',
		image_path : './picture-in-picture/picture.PNG'
	},
	{
		name : 'Light Dark Module',
		url : './light-dark-module/',
		image_path : './light-dark-module/picture.PNG'
	}
];

apps.forEach((app) => {
  let element = `
 
    <div class="col">
        <div class="card">
            <img src="${app.image_path}" class="card-img-top" alt="${app.name}">
            <div class="card-body">
                <h5 class="card-title">${app.name}</h5>
                <a href="${app.url}" class="btn btn-primary">Visit App</a>
            </div>
        </div>
    </div>
  `;
  document.getElementById('app-container').insertAdjacentHTML('beforeend', element);
});