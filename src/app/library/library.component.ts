import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  cards = [{
    title: 'Kill Bill: Vol. 1',
    content: 'The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her.',
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
    },
    {
      title: 'Kill Bill: Vol. 2',
      content: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd and the treacherous, one-eyed Elle.',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg'
    },
    {
      title: 'Kill Buljo: The Movie',
      content: 'A Norwegian parody of Kill Bill.',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzFjOTY0NGEtMzljYy00NmI5LTg0OGMtYjQxM2Y4ZDAwMmVkXkEyXkFqcGdeQXVyMjI4NTYxMTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    },
    {
      title: 'Kill Buljo 2',
      content: 'Jompa Tormann is back, and everything is better, except the humor, which is even worse than in the first movie of vengeance.',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOWM1MjIyOGEtYjljMi00OTk1LWE3YWQtZDgyNDBhN2ExNjAxXkEyXkFqcGdeQXVyMjI4NTYxMTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
    }]
  constructor() { }

  ngOnInit() {

  }


}
