import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data:any;

  constructor(public ob:HttpClient) { 

  }
 
  sendContactNum(num){
    
    this.data = {"phone": num}
    var h = new HttpHeaders({'content-type':'application/json'}); 
    return this.ob.post("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_otp/",this.data);
  
  }

  verifyOtp(otp){
    // var num = parseInt("919496017547")
    var otp1 = parseInt(otp)
    this.data = {"phone":"+919496017547","password": otp1}
    var h=new HttpHeaders({'content-type':'application/json'}); 
    return this.ob.post("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_access_token/",this.data);
  
  }

  productListing(){
    
    // this.data = "" 
    console.log(this.data);
    var h=new HttpHeaders({'content-type':'application/json'});
    return this.ob.get("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/?page=2&search=rohu");

  
  }


}


