import Link from "next/link";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  img {
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const PricerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const ProductWrapper = styled.div``;

export default function ProductBox({ _id, images, title, description, price }) {
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} alt="Product image" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PricerRow>
          <Price>${price}</Price>

          <Button primary outline>
            <CartIcon />
            Add to cart
          </Button>
        </PricerRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
