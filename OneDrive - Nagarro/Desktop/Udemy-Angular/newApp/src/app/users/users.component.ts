import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from './dummyuser';

let randomNumber=Math.floor((Math.random()*DUMMY_USERS.length));
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedUser=DUMMY_USERS[randomNumber];
  
  get imgPath()
  {
   return 'assets/users/'+ this.selectedUser.avatar;
  }

  onSelectUser(){
    randomNumber=Math.floor((Math.random()*DUMMY_USERS.length));
    this.selectedUser=DUMMY_USERS[randomNumber];
  }
}
