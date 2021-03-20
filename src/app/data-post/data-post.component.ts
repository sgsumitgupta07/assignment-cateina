import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-data-post',
  templateUrl: './data-post.component.html',
  styleUrls: ['./data-post.component.css']
})
export class DataPostComponent implements OnInit {
  public dataPostForm!:FormGroup;

  constructor( private fb: FormBuilder, private myser : MyService , private router : Router ) { }

  ngOnInit(): void {

    this.dataPostForm = this.fb.group({
      loan_id:['',Validators.required],
      loan_amount:['',Validators.required],
      loan_date:['',Validators.required]
  })


  }

  dataPostAction(){

    console.log(this.dataPostForm.value)
    this.myser.postData("data",this.dataPostForm.value).subscribe(
        (res:any)=>{ 
            console.log(res);
            this.router.navigate(['/dataShow'])
        })
    }

}
