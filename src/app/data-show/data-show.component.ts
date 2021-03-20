import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit {
  ShowDATA : any;
  constructor( private myser : MyService) { }

  ngOnInit(): void {

    this.myser.selectData("data").subscribe(
      (response)=>{
        console.log(response)
        this.ShowDATA=response
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}
