import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() sideNavToggled = new EventEmitter<boolean>();
menustatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggle() {
   this.menustatus = !this.menustatus;
   this.sideNavToggled.emit(this.menustatus);
  }
}
