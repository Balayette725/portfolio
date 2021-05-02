import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
})
export class ProjetsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enlargeImg() {
    let modal = document.getElementById('myModal');
    modal!.style.animation = '0.5s zoom'
    modal!.style.display = 'block';
  }

  resetImg() {
    let modal = document.getElementById('myModal');
    modal!.style.animation = '0.4s zoom-out'
    setTimeout(()=>{modal!.style.display = 'none';}, 300)
    
  }
}
