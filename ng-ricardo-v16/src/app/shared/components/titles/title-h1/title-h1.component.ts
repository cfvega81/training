import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit{
  @Input() text = '';
  @Input() type: 'primary' | 'secundary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';

  constructor() {}
  
  ngOnInit(){
  }

}
