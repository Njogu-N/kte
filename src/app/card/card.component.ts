import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  list = [
    {
     number: '1',
     name: 'Sites',
     total: '12',
     icon: 'fa-solid fa-building',
     link: "./"
   },
   {
    number: '2',
    name: 'Team',
    total: '77',
    icon: 'fa-solid fa-people-group',
    link: '/team'
  },
   {
    number: '3',
    name: 'Contracts',
    total: '8',
    icon: 'fa-solid fa-file-contract',
    link: '/contract'
   },

  
  
  {
    number: '4',
    name: 'Summary',
    total: '20',
    icon: 'fa-solid fa-newspaper',
    link: "./"
  },

];
  constructor() { }

  ngOnInit(): void {
  }

}
