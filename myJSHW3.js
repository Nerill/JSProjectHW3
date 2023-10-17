// 1. Напишіть функцію addThemAll
function addThemAll(...args){
    return args.reduce((a, b) => a + b);;
}

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20


// 2. Задача на використання замикання.
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

function multiply(a){
	return function(b){return a * b;};
}


// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів 
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
    if(property === 'releaseYear'){
        if(direction === '>'){
	        return (r1, r2) => (r1.releaseYear > r2.releaseYear) ? 1 : (r1.releaseYear < r2.releaseYear) ? -1 : 0
        }
        if(direction === '<'){
            return (r1, r2) => (r1.releaseYear < r2.releaseYear) ? 1 : (r1.releaseYear > r2.releaseYear) ? -1 : 0
        }
    }
    if(property === 'runningTimeInMinutes'){
        if(direction === '>'){
	        return (r1, r2) => (r1.runningTimeInMinutes > r2.runningTimeInMinutes) ? 1 : (r1.runningTimeInMinutes < r2.runningTimeInMinutes) ? -1 : 0
        }
        if(direction === '<'){
            return (r1, r2) => (r1.runningTimeInMinutes < r2.runningTimeInMinutes) ? 1 : (r1.runningTimeInMinutes > r2.runningTimeInMinutes) ? -1 : 0
        }
    }
    if(property === 'movieName'){
        if(direction === '>'){
	        return (r1, r2) => (r1.movieName > r2.movieName) ? 1 : (r1.movieName < r2.movieName) ? -1 : 0
        }
        if(direction === '<'){
            return (r1, r2) => (r1.movieName < r2.movieName) ? 1 : (r1.movieName > r2.movieName) ? -1 : 0
        }
    }
	if(property === 'directedBy'){
        if(direction === '>'){
	        return (r1, r2) => (r1.directedBy > r2.directedBy) ? 1 : (r1.directedBy < r2.directedBy) ? -1 : 0
        }
        if(direction === '<'){
            return (r1, r2) => (r1.directedBy < r2.directedBy) ? 1 : (r1.directedBy > r2.directedBy) ? -1 : 0
        }
    }
}


// 4. Напишіть функцію яка відфільтрує масив унікальних значень
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return Array.from(new Set(array)); 
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена']