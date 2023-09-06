import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:40px 0 20px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  ${'' /* gap: 20px; */}
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title >New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}