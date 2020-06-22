import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { GetotpComponent } from './getotp/getotp.component';




const routes: Routes = [
  
{
  path:"demo",
  component:DemoComponent
},
{
  path:"login/:num",
  component:LoginComponent
},
{
  path:"productlisting/:token",
  component:ProductlistComponent
},
{
  path:"receiveOtp",
  component:GetotpComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,ProductlistComponent]
