import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ProductService } from "../services/product.service";

type Props = {};

const HomeContent = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProducts()
      .then((products) => setProducts(products))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5 justify-center align-middle min-h-full">
      {loading ? (
        <h1 className="text-black text-3xl">Loading...</h1>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col border-2 border-blue-300 p-5 text-black"
          >
            <img
              src={product.image}
              alt={product.image}
            />
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex">
                <span className="flex-grow font-bold">{product.name}</span>
                <span className="flex-end text-right">{ProductService.formatCurrency.format(product.price)}</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeContent;
