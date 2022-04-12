import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import useCart from "../Hooks/useCart";
import { ProductProps } from "../Product/Product.types";
import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  product: ProductProps;
};

export const Incrementor = ({ product }: IncrementorProps) => {
  const addItemToCart = useCart((state) => state.addItem);
  const removeItemFromCart = useCart((state) => state.removeItem);
  const ProductsOnCart = useCart((state) => state.cart);

  return (
    
    <Wrapper>
      <IconWrapper onClick = { () => removeItemFromCart(product) }>
        <SubtractIcon aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>
        {
          ProductsOnCart.find((element: { product: { id: number; }; }) => element.product.id === product.id)?.quantity ?? 0
        }
      </Quantity>

      <IconWrapper onClick={ () => addItemToCart(product) }>
        <PlusIcon aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
}

