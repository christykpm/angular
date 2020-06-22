import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getotp',
  templateUrl: './getotp.component.html',
  styleUrls: ['./getotp.component.css']
})
export class GetotpComponent implements OnInit {


  constructor(private ob:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  sendContact(num){
    var newNum = this.ob.sendContactNum(num).subscribe(
      (data)=>{console.log(data)
      this.router.navigateByUrl('login/'+num);
      },
      (error)=>{console.log(error)}
      
    );
  }
}
