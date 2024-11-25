import { Rating } from "@mui/material";
import Image from "next/image";

const DISCOUNT = 0.2;

function CardItem({ product }) {
  product.rating = Math.random() * 5;
  product.ratingCount = Math.ceil(Math.random() * 200);
  product.priceBeforeDiscount = product.price * (1 + DISCOUNT);
  return (
    <div>
      <div className="image-container">
        <div className="image">
          <div className="relative h-[300px]">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="aspect-square"
            />
          </div>
        </div>
        <div className="btn">Add To Cart</div>
      </div>
      <div className="body">
        <div className="title my-2 font-[500] text-lg">{product.title}</div>
        <div className="price">
          {"$" + product.price}
          <span className="ml-2 line-through text-gray-500">
            {"$" + product.priceBeforeDiscount.toFixed(2)}
          </span>
        </div>
        <div className="rating flex items-center my-2">
          <Rating name="read-only" value={product.rating} readOnly />
          <span className="ml-4 text-gray-500">({product.ratingCount})</span>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
