import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() data;
  @Output() dismiss = new EventEmitter(); 
  constructor() { }
// data = [{"message": "hello world","selection":"Success"},{"message": "hello Angular","selection":"Error"}]
  ngOnInit() {
  }

  dismissCard(i){
    this.dismiss.emit(i);
  }
}
