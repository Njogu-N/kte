import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
@Input() sideNavStatus: boolean = false;
  list = [
  {
   number: '1',
   name: 'Home',
   icon: 'fa-solid fa-house',
   link: 'home'

 },
 {
  number: '2',
  name: 'Team',
  icon: 'fa-solid fa-people-group',
  link: 'team'
},
{
  number: '3',
  name: 'Analytics',
  icon: 'fa-solid fa-chart-line',
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
