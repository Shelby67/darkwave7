import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces-pipe';
import { StarRatingComponent } from './shared/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailComponent } from './products/products-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { UniqueEmailValidatorDirective } from './shared/unique-email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarRatingComponent,
    ProductsDetailComponent,
    WelcomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UniqueEmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
