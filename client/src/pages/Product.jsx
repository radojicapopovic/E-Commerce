import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcment from "../components/Announcment";
import Navbar from "../components/Navbar";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px; 
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcment/>
        <Wrapper>
            <ImgContainer>
                <Image src=""/>
            </ImgContainer>
            <InfoContainer>
                <Title>MacBook</Title>
                <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur fugit recusandae quidem! Autem natus atque voluptates asperiores. Iusto saepe voluptatum non quod alias iste repellat quia dolores itaque officia!</Desc>
                <Price>$ 200</Price>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product