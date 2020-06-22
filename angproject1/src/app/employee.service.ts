import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data:any;
  data2:any;

  constructor(public ob:HttpClient) { 

  }
 
  sendContactNum(num){
    
    this.data = {"phone":"+91"+num}
    var h = new HttpHeaders({'content-type':'application/json'}); 
    return this.ob.post("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_otp/",this.data,{headers:h});
  
  }

  verifyOtp(otp,num){
    
    var otp1 = parseInt(otp)
    this.data = {"username":"+91"+num,"password":otp1} 
    var h=new HttpHeaders({'content-type':'application/json'}); 
    return this.ob.post("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/user/get_access_token/",this.data,{headers:h});
  
  }

  productListing(data2,pageno){
    
    // console.log(data2);
    var h=new HttpHeaders({'Authorization':'JWT '+data2});
    return this.ob.get("http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/?page="+pageno+"&search=",{headers:h});

  
  }


}


