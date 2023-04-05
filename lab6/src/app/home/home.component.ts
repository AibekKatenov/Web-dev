import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let f = document.getElementById('ll')
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((x) => {
      alert("You are on home's page")
    });
  }
}
