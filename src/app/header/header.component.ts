import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayModal() {
    let modal = document.getElementById('modal');
    let burger = document.getElementById('burger');
    burger!.style.visibility = 'hidden';
    modal!.style.display = 'flex';
    modal!.style.flexDirection = 'column';
    modal!.style.justifyContent = 'center';
    modal!.style.alignItems = 'center';
  }

  resetModal() {
    let modal = document.getElementById('modal');
    let burger = document.getElementById('burger');
    burger!.style.visibility = "visible"

    modal!.style.display = 'none';
  }
}
