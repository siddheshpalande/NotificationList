import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  message = ""; 
  selection = "";
  list = [];
  constructor() { }

  ngOnInit() {

  }
  submit(){
    if (this.message !== "" && this.selection !== ""){
      const card = {
        'message' : this.message,
        'selection': this.selection
      };
      this.list.push(card);
      this.message = ""; 

    } else {
      alert("Please provide a message & select one option.");
    }
  }

  onDismiss(i){
    this.list.splice(i,1);
  }

  optionSelected(option){
    this.selection = option;
  }

}

