import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  public path="http://localhost:3000/"

  constructor( private httpObj:HttpClient) { }

  selectData(keyname:any){
    return this.httpObj.get(this.path+keyname)
  }

  postData(keyname:any,varObj:any)
  {
    console.log(keyname,varObj)
    return this.httpObj.post(this.path+keyname,varObj)
  }

}
