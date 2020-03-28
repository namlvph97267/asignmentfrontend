import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductService } from "./services/product.service";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
    ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
