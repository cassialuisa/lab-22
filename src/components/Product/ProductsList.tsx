import { Products } from ".";
import { ProductProps } from "./Product.types";

export type ProductListProps = {
    products: ProductProps[];
}

export const ProductsList: React.FC<ProductListProps> = (
    {products}
) => {
    return (
        <div className="flex flex-col items-center justify-center m-10">
          {
            products.map(product => (
              <Products
                key={ product.name }
                {...product}
              />
            ))
          }
        </div>
      );
}