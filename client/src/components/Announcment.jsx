import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`; 

const Announcment = () => {
  return (
    <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Fugiat sint mollitia necessitatibus nobis et, assumenda quasi facilis nam quia eveniet aspernatur, totam culpa veniam. 
        Commodi ab assumenda officiis animi ipsa.
    </Container>
  )
}

export default Announcment