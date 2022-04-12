import { Incrementor } from "../Incrementor";
import { ProductProps } from "./Product.types";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";




export const Products = (product: ProductProps) => {
  return (
    <Wrapper>
      <img src={product.picture} alt={`Imagem de referência ${product.name}`} />
      <Info>
      <Column>
        <Text>{product.name}</Text>
        <Text>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      </Column>

      <WrapperIncrementor>
        <Incrementor product={product} />
      </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}


// export const Products: React.FC<ProductProps> = ({
//   id,
//   picture,
//   name,
//   price,
//   quantity
// }) => {

//   return (
//     <Wrapper>
//       <img src={picture} alt={`Imagem de referência ${name}`} />

//       <Info>
//         <Column>
//           <Text>{name}</Text>
//           <Text>{price}</Text>
//         </Column>

//         <WrapperIncrementor>
//           <Incrementor product={{
//             id: 0,
//             name: "",
//             price: 0,
//             picture: "",
//             quantity: 0
//           }}  />
//         </WrapperIncrementor>
//       </Info>
//     </Wrapper>
//   )
// }
