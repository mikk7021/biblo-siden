
const books = [
    {
      id: 1,
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      img: 'assets/images/huckleberry.jpg',
      book: 1
    },
  
    {
      id: 2,
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      img: 'assets/images/insearchoflosttime.jpg',
      book: 2
    },
  
    {
      id: 3,
      title: 'On the Origin of Species',
      author: 'Charles Darwin',
      img: 'assets/images/darwin.jpg',
      book: 3
    },
  
    {
      id: 4,
      title: 'The Divine Comedy',
      author: 'Dante Alighieri',
      img: 'assets/images/divinecomedy.jpg',
      book: 4
    },
  
    {
      id: 5,
      title: 'The Republic',
      author: 'Plato',
      img: 'assets/images/republic.jpg',
      book: 5
    },
  
    {
      id: 6,
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      img: 'assets/images/donquixote.jpg',
      book: 6
    },
  
    {
      id: 7,
      title: 'Ulysses',
      author: 'James Joyce',
      img: 'assets/images/ulysses.jpg',
      book: 7
    },
  
    {
      id: 8,
      title: 'Das Kapital',
      author: 'Karl Marx',
      img: 'assets/images/daskapital.jpg',
      book: 8
    },
  
    {
      id: 9,
      title: 'Confessions',
      author: 'Augustine',
      img: 'assets/images/confessions.jpg',
      book: 9
    },
  
    {
      id: 10,
      title: 'The Prince',
      author: 'Niccolo Machiavelli',
      img: 'assets/images/theprince.jpg',
      book: 10
    }
  
  ];
  
  const searchField = document.querySelector('#search');
  const searchResultsContainer = document.querySelector('#searchresult');
  
  searchField.addEventListener('input', (e) => {
   
   // if input field is empty, clear the search results
   if(e.target.value === '') {
      searchResultsContainer.innerHTML = '';
      return;
   }
   
   // filter the books array
   const searchResults = books.filter(books => {
       return books.title.toLowerCase().includes(e.target.value.toLowerCase());
   });
   
   // before displaying the search results, clear the search results div
   searchResultsContainer.innerHTML = '';
   
   // display the titles of the book objects that include the text entered in input field
   searchResults.forEach((element, index) => {
      const p = document.createElement('p');
      const authortext = document.createElement('p')
      const resimg = document.createElement('img')
      const reservebutton = document.createElement('button')
      let restextcontainer = document.getElementById('bookresult')
      reservebutton.onclick = function(){
        let restext = document.createElement('p')
        restext.innerHTML = 'Du har reserveret: ' + element.title
        restextcontainer.append(restext)
      }
      reservebutton.classList.add('reservebutton')
      reservebutton.innerHTML = 'Lån bog';
      p.textContent = (index + 1) + '. ' + element.title;
      authortext.innerHTML = element.author;
      resimg.src = element.img
      resimg.classList.add('resimg')
      searchResultsContainer.appendChild(p);
      searchResultsContainer.appendChild(authortext)
      searchResultsContainer.appendChild(resimg)
      searchResultsContainer.appendChild(reservebutton)
   });
  });