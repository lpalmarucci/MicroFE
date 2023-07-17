import React, { useEffect, useState } from "react";
import { Product } from "home/models/Product";
import ProductService from "home/services/ProductService";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useParams } from "react-router-dom";
import NotFound from "home/components/NotFound";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id: productId } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!productId) return;
    ProductService.getProductById(+productId)
      .then((product) => setProduct(product))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <CircularProgress size={10} />;

  if (!product) return <NotFound title="Product not found" />;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} />
      </div>
      <div>
        <div className="flex text-black py-5">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <h3 className="font-bold text-3xl flex-end">
            {ProductService.formatCurrency.format(product.price)}
          </h3>
        </div>
        <div className="mt-10 text-black text-2xl">{product.description}</div>
        <div className="mt-10 text-md text-gray-500">
          {product.longDescription}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
