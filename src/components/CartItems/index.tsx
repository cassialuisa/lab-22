import { Info } from "styled-icons/bootstrap";
import { Incrementor } from "../Incrementor";
import { ProductProps } from "../Product/Product.types";
import { Column, WrapperIncrementor, Wrapper, Text } from "../Product/styles";


const CartItems = (product: ProductProps) => (
    <Wrapper>
        <img src={product.picture} alt={`Imagem de referência ${product.name}`} />
            <Column>
                <Text>{product.name}</Text>
                <Text>
                    {
                        product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    }
                </Text>
            </Column>

            <WrapperIncrementor>
                <Incrementor product={product} />
            </WrapperIncrementor>
    </Wrapper>
);
export default CartItems;