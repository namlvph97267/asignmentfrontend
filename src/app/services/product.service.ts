import { Injectable } from "@angular/core";
import { Product } from "../Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  api = 'https://5e7cf5d0a917d70016684184.mockapi.io/product';

  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.api);

  }
}
