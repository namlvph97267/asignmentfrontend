import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
   
  selected: Product;
  products: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
