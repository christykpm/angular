import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { error } from '@angular/compiler/src/util';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ob:EmployeeService,private router:Router) { }
  title = 'angproject1';
  ngOnInit(): void {
   
    this.router.navigateByUrl('receiveOtp')

  }
}
