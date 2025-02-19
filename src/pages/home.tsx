import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { ProductProps } from "../components/Product/Product.types";
import { ProductsList } from "../components/Product/ProductsList";
import apiClient from "../Services/apiClient";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  async function buscarProdutos() {
    const response = await apiClient.get<ProductProps[]>(
      `/products`
    );
    setProducts(response.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <ProductsList
          products={products}
        />
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
