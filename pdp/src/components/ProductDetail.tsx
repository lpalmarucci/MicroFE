import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Button from "@mui/material/Button/Button";
import CardActions from "@mui/material/CardActions/CardActions";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import { Product } from "home/models/Product";
import ProductService from "home/services/ProductService";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

type Props = {};

const ProductDetail = (props: Props) => {
  const productId: number = 1;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ProductService.getProductById(productId)
      .then((product) => setProduct(product))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress size={10} />;

  return (
    <div className="min-w-full min-h-full flex justify-center items-center">
      <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product?.image}
          title={product?.name}
          src={product?.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetail;
