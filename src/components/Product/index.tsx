import apiClient from "../../Services/apiClient";
import Incrementor from "../Incrementor";
import { ProductProps } from "./Product.types";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export const Products: React.FC<ProductProps> = ({
  id,
  picture,
  name,
  price
}) => {

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor id={id} quantity={1} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}
