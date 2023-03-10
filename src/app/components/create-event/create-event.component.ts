import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  info: any = {
    title: '',
    description: ''
  }

  handleSubmit(){
    console.log(this.info)
  }

}
