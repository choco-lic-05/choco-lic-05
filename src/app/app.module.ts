import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FruitsVegitablesComponent } from './fruits-vegitables/fruits-vegitables.component';
import { HomeComponent } from './home/home.component';
import { SnacksComponent } from './snacks/snacks.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipe } from './pipes/search.pipe';
import { MinPricePipe } from './pipes/min-price.pipe';
import { MaxPricePipe } from './pipes/max-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FruitsVegitablesComponent,
    HomeComponent,
    SnacksComponent,
    ProductCardComponent,
    CartComponent,
    ProductDetailsComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    MinPricePipe,
    MaxPricePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,
      progressBar:true,
      progressAnimation:'increasing',
      closeButton:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
