import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user-metadata';
import {MatGridListModule} from '@angular/material/grid-list';
import { USERS_DATA } from '@data/constants/users.const';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
  
})


export 
class UserListComponent implements OnInit{
  public users: ICardUser[] = USERS_DATA;


  constructor(){}

  ngOnInit(): void {
  }



  
}
