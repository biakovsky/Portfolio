const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const vabanquecategories = [
    {
		genre: 'Panstwa',
		pytania: [
		    {
			    pytanie: 'Jakie państwo ma najwiekszą powierzchnie?',
			    odpowiedzi: ['Chiny', 'Rosja'],
			    poprawna: 'Rosja',
			    poziom: 'bardzo latwy',
		    },
			{
			    pytanie: 'Jakie państwo ma stolicę o nazwie Waszyngton?',
			    odpowiedzi: ['USA', 'Kanada'],
			    poprawna: 'USA',
			    poziom: 'latwy',
		    },
			{
			    pytanie: 'Jakie państwo słynie z uprawy herbaty?',
			    odpowiedzi: ['Polska', 'Indie'],
			    poprawna: 'Indie',
			    poziom: 'srednie',
		    },
		   
		],	
	},
	{
		genre: 'Miasta',
		pytania: [
		    {
			    pytanie: 'Jakie miasto jest stolicą Hiszpanii?',
			    odpowiedzi: ['Madryt', 'Rzym'],
			    poprawna: 'Madryt',
			    poziom: 'bardzo latwy',
		    },
			{
			    pytanie: 'W jakim mieście znajduje się Sagrada Familia?',
			    odpowiedzi: ['Lizbona', 'Barcelona'],
			    poprawna: 'Barcelona',
			    poziom: 'latwy',
		    },
			{
			    pytanie: 'W jakim mieście odbyły się igrzyska olimpijskie w 2000 roku?',
			    odpowiedzi: ['Moskwa', 'Sydney'],
			    poprawna: 'Sydney',
			    poziom: 'srednie',
		    },
		],	
	},
	{
		genre: 'Imiona',
		pytania: [
		    {
			    pytanie: 'Jak ma na imię obecny król Wielkiej Brytanii?',
			    odpowiedzi: ['William', 'Karol'],
			    poprawna: 'Karol',
			    poziom: 'bardzo latwy',
		    },
			{
			    pytanie: 'Jak miał na imię mąż Barbary Mostowiak z serialu M jak Miłość?',
			    odpowiedzi: ['Edward', 'Lucjan'],
			    poprawna: 'Lucjan',
			    poziom: 'latwy',
		    },
			{
			    pytanie: 'Jakie imię nosił pierwszy król Polski?',
			    odpowiedzi: ['Mieszko', 'Bolesław'],
			    poprawna: 'Bolesław',
			    poziom: 'srednie',
		    },
		   
		],	
	},
	{
		genre: 'Zwierzę',
		pytania: [
		    {
			    pytanie: 'Jakie zwierzę jest w godle Polski?',
			    odpowiedzi: ['Orzeł', 'Sęp'],
			    poprawna: 'Orzeł',
			    poziom: 'bardzo latwy',
		    },
			{
			    pytanie: 'Jakiego gatunku zwierzecięm była Kasztanka Józefa Piłsudskiego?',
			    odpowiedzi: ['Koniem', 'Pterodaktylem'],
			    poprawna: 'Koniem',
			    poziom: 'latwy',
		    },
			{
			    pytanie: 'Jakie zwierzę jest w herbie Holandii?',
			    odpowiedzi: ['wieloryb', 'lew'],
			    poprawna: 'lew',
			    poziom: 'srednie',
		    },
		   
		],	
	},
	{
		genre: 'Kolor',
		pytania: [
		    {
			    pytanie: 'Jaki kolor ma logo sieci restauracji McDonalds?',
			    odpowiedzi: ['żółty', 'zielony'],
			    poprawna: 'żółty',
			    poziom: 'bardzo latwy',
		    },
			{
			    pytanie: 'Jaki kolor dominuje w logu marki Spotify?',
			    odpowiedzi: ['czerwony', 'zielony'],
			    poprawna: 'zielony',
			    poziom: 'latwy',
		    },
			{
			    pytanie: 'Jaki kolor ma kobalt?',
			    odpowiedzi: ['niebieski', 'zielony'],
			    poprawna: 'niebieski',
			    poziom: 'srednie',
		    },
		   
		],	
	},
	
]	

let score = 0

function addCategory(category) {
	const column =  document.createElement('div')
	column.classList.add('genre-column')
	
	const genreTitle = document.createElement('div')
	genreTitle.classList.add('genre-title')
	genreTitle.innerHTML = category.genre
	
	column.appendChild(genreTitle)
	game.append(column)

	category.pytania.forEach(pytanie => {

		const card = document.createElement('div')
		card.classList.add('card')
		column.append(card)

		if (pytanie.poziom === 'bardzo latwy') {
            card.innerHTML = 100
		}
		if (pytanie.poziom === 'latwy') {
            card.innerHTML = 200
		}
		if (pytanie.poziom === 'srednie') {
            card.innerHTML = 300
		}
		if (pytanie.poziom === 'trudne') {
            card.innerHTML = 400
		}
		if (pytanie.poziom === 'bardzo trudne') {
            card.innerHTML = 500
		}

        card.setAttribute('data-pytanie', pytanie.pytanie)
		card.setAttribute('data-odpowiedz-1' , pytanie.odpowiedzi[0])
		card.setAttribute('data-odpowiedz-2' , pytanie.odpowiedzi[1])
		card.setAttribute('data-poprawna' , pytanie.poprawna)
		card.setAttribute('data-wartosc' , card.getInnerHTML())

		card.addEventListener('click', flipCard)
	})
}

vabanquecategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ""
	this.style.fontSize = "17px"
	this.style.lineHeight =  "20px"
    const textDisplay = document.createElement('div')
	textDisplay.classList.add('card-text')
	textDisplay.innerHTML = this.getAttribute('data-pytanie')
	const firstButton = document.createElement('button')
	const secondButton = document.createElement('button')
    firstButton.classList.add('first-button')
	secondButton.classList.add('second-button')
	firstButton.innerHTML = this.getAttribute('data-odpowiedz-1')
	secondButton.innerHTML = this.getAttribute('data-odpowiedz-2')
	firstButton.addEventListener('click' , getResult)
	secondButton.addEventListener('click' , getResult)
	this.append(textDisplay, firstButton, secondButton)

	const allCards = Array.from(document.querySelectorAll('.card'))
	allCards.forEach(card => card.removeEventListener('click', flipCard))

}

function getResult() {
	const allCards = Array.from(document.querySelectorAll('.card'))
	allCards.forEach(card => card.addEventListener('click', flipCard))
	const cardOfButton = this.parentElement

	if (cardOfButton.getAttribute('data-poprawna') == this.innerHTML) {
		score = score + parseInt(cardOfButton.getAttribute('data-wartosc'))
		scoreDisplay.innerHTML = score
		cardOfButton.classList.add('poprawna-odpowiedz')
		setTimeout(() => {
			while (cardOfButton.firstChild) {
				cardOfButton.removeChild(cardOfButton.lastChild)
			}
			cardOfButton.innerHTML = cardOfButton.getAttribute('data-wartosc')


		}, 100)
		
		

	} else {
		cardOfButton.classList.add('bledna-odpowiedz')
		setTimeout(() => {
			while (cardOfButton.firstChild) {
				cardOfButton.removeChild(cardOfButton.lastChild)
			}
			cardOfButton.innerHTML = 0
		}, 100)	
        

	}
	cardOfButton.removeEventListener('click', flipCard)



}