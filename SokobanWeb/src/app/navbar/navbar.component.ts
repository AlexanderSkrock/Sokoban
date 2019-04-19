import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  entries: Entry[];

  constructor() { }

  ngOnInit() {
  }
}

export class Entry {
  path: string;
  title: string;

  constructor(path: string, title: string) {
    this.path = path;
    this.title = title;
  }
}
