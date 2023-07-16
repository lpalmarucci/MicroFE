import { Product } from "../models/Product";

export class ProductService {
  static formatCurrency = new Intl.NumberFormat("it-IT", {
    currency: "EUR",
    style: "currency",
  });
  static getProducts(): Promise<Product[]> {
    return fetch(process.env.API_SERVER + "/products").then((res) => res.json());
  }

  static getProductById(id: number): Promise<Product> {
    return fetch(process.env.API_SERVER + `/products/${id})`).then((res) => res.json());
  }
}
