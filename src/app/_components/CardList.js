import CardItem from "./CardItem";

async function CardList({ slice }) {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  // const res = await fetch("https://fake-store-api.mock.beeceptor.com/api/products");
  const data = await res.json();
  const products = data.slice(0, slice);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[40px]">
      {products.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardList;
