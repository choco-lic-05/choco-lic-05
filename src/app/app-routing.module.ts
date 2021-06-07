import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FruitsVegitablesComponent } from './fruits-vegitables/fruits-vegitables.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { SnacksComponent } from './snacks/snacks.component';

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'fruits-vegitables',component:FruitsVegitablesComponent},
  {path:'fruits-vegitables/:id',component:ProductDetailsComponent},
  {path:'snacks/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
