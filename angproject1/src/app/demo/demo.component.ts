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
  
  ngOnInit(): void { }

sendContact(num){
  var newNum = this.ob.sendContactNum(num).subscribe(
    (data)=>{console.log(data)},
    (error)=>{console.log(error)}
    
  );
}

receiveOtp(otp){
  var newN = this.ob.verifyOtp(otp).subscribe(
    (data)=>{console.log(data)},
    (error)=>{console.log(error)}
    
  );
}

productList(){
  var newN = this.ob.productListing().subscribe(
    (data)=>{console.log(data)
      this.product=data ; 
    },
    (error)=>{console.log(error)}
    
  );
}
 
}