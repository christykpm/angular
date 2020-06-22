import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  constructor(private ob:EmployeeService) { }
  
  product:any
  data2:any
  num2:any
  
  ngOnInit(): void { }

sendContact(num){
  var newNum = this.ob.sendContactNum(num).subscribe(
    (data)=>{console.log(data)},
    (error)=>{console.log(error)}
    
  );
}

receiveOtp(otp){
  var newN = this.ob.verifyOtp(otp,this.num2).subscribe(
    (data:any={})=>{
    console.log(data)
    this.data2 = data.access;
    },
    (error)=>{console.log(error)}
    
  );
}

// productList(){
//   var newN = this.ob.productListing(this.data2).subscribe(
//     (data:any={})=>{
//       console.log(data)
//       this.product=data.results ; 
//     },
//     (error)=>{console.log(error)}
    
//   );
// }
 
}