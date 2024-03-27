import { Component, Input } from '@angular/core';
import { ICardUser } from './icard-user-metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  @Input() data: ICardUser | undefined;
title: any;
name: any;
currentUser: any;

}
