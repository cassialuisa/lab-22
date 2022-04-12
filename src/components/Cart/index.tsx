import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";
import Button from "../Button";
import Typography from "../Typography";
import { Wrapper, Subtotal, Header, WrapperCart, Footer,  } from "./styles";
import useCart from "../Hooks/useCart";
import CartItems from "../CartItems";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const total = useCart((state) => state.total);
  const ProductsOnCart = useCart((state) => state.cart);
  
  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      <Typography level={5} size="large" fontWeight={600}>
          <WrapperCart>
            {ProductsOnCart.map((item, i) => (
                <CartItems 
                  id={item.product.id} 
                  name={item.product.name} 
                  picture={item.product.picture}
                  price={item.product.price}
                  quantity={item.quantity}
                />
            ))}
          </WrapperCart>
        </Typography>
      <Footer>
        <Subtotal>
          <Typography level={5} size="large" fontWeight={600}>
            Total
          </Typography>
          <Typography>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Typography>
        </Subtotal>

        <Button fullWidth>Finalizar compra</Button>
        </Footer>
    </Wrapper>
  );

}
export default MenuPayment;
  
// import { Dispatch, SetStateAction } from "react";
// import { CloseOutline } from "@styled-icons/evaicons-outline";

// import Button from "../Button";
// import Typography from "../Typography";

// import { Wrapper, Subtotal, Header, WrapperCart, Footer } from "./styles";
// import useCart from "../Hooks/useCart";
// import { CartItems } from "./CartItems";


// export type MenuPaymentProps = {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// };


// const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
//   const total = useCart((state) => state.total);
//   const cartProducts = useCart((state) => state.cart);
  
//   return (
//     <Wrapper isOpen={isOpen}>
//       <Header>
//         <CloseOutline onClick={() => setIsOpen(false)} />
//       </Header>
//       <Typography level={5} size="large" fontWeight={600}>
//           <WrapperCart>
//             {cartProducts.map((item, i) => (
//                 <CartItems 
//                   id={item.product.id} 
//                   name={item.product.name} 
//                   picture={item.product.picture}
//                   price={item.product.price}
//                   quantity={item.quantity}
//                 />
//             ))}
//           </WrapperCart>
//         </Typography>
//       <Footer>
//         <Subtotal>
//           <Typography level={5} size="large" fontWeight={600}>
//             Total
//           </Typography>
//           <Typography>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Typography>
//         </Subtotal>

//         <Button fullWidth>Finalizar compra</Button>
//         </Footer>
//     </Wrapper>
//   );

// }
  

  
// export default MenuPayment;

  
