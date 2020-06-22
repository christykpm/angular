import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ob:EmployeeService,private router:Router,private route:ActivatedRoute) { }
  data2:any
  num:any
  ngOnInit(): void {
    this.num=this.route.snapshot.paramMap.get('num')
  }
  receiveOtp(otp){
    var newN = this.ob.verifyOtp(otp,this.num).subscribe(
      (data:any={})=>{
      console.log(data)
      this.data2 = data.access;   
      this.router.navigateByUrl('productlisting/'+this.data2)
      },
      (error)=>{console.log(error)}
      
    );
  }
}
