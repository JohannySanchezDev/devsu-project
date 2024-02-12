import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly urlBase = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products";

  headers: any = {"authorId": "89"}

  options = {headers : new HttpHeaders({...this.headers})}

  constructor(private _httpClient : HttpClient) { }

  getProducts() : Observable<Product[]>
  { 
    return this._httpClient.get<Product[]>(this.urlBase, this.options)
  }
  createProduct(product: Product) : Observable<Product>
  {
    return this._httpClient.post<Product>(this.urlBase, product, this.options)
  }
  updateProduct(product: Product) : Observable<Product>
  {
    return this._httpClient.put<Product>(this.urlBase, product, this.options)
  }
  deleteProduct(product: Product) : Observable<any>
  {
    return this._httpClient.delete<any>(`${this.urlBase}?id=${product.id}`, this.options);
  }
  verifyId(productId: string) :  Observable<boolean>
  {
    return this._httpClient.get<boolean>(`${this.urlBase}/verification?id=${productId}`, this.options)
  }
}