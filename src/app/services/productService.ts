import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../entities/product";

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  public createProduct(product: Product) {
    return this.httpClient.post("http://localhost:8080/save", product);
  }

  public getProducts(page: number, size: number, mc: string) {
    return this.httpClient.get("http://localhost:8080/chercherProducts?page=" + page + "&size=" + size + "&mc=" + mc);
  }

  public getProductInfo(id: number) {
    return this.httpClient.get("http://localhost:8080/products/" + id);
  }

  public getAllProduct() {
    return this.httpClient.get("http://localhost:8080/products");
  }

  public editProduct(product: Product, id: number) {
    return this.httpClient.put("http://localhost:8080/edit/" + id, product);
  }

  public removeProduct(id: number) {
    return this.httpClient.delete("http://localhost:8080/remove/" + id)
  }
}
