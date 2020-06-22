import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private ob:EmployeeService,private route:ActivatedRoute) { }
  product:any
  token:any
  pageno="2"
  

  ngOnInit(): void {
    this.token=this.route.snapshot.paramMap.get('token')
    var newN = this.ob.productListing(this.token,this.pageno).subscribe(
      (data:any={})=>{
        console.log(data)
        this.product=data.results ; 
      },
      (error)=>{console.log(error)}
      
    );

  }
  productList(pagenumber){
    var newN = this.ob.productListing(this.token,pagenumber).subscribe(
      (data:any={})=>{
        console.log(data)
        this.product=data.results ; 
      },
      (error)=>{console.log(error)}
      
    );
  }
  
}
