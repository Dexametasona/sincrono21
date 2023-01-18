import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sincrono21';
  master=[{name:'master', pass:'1234'}]

  ngOnInit(): void {
    localStorage.setItem('user',JSON.stringify(this.master))
  }
}
