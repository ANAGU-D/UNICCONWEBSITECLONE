import styled from 'styled-components'
import logo from '../Assets/unicconLogo.svg'
const Container = styled.div`
    height: 10%;
    width: 100%;
    padding: 22px 8%;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom right, #B1C6E7, white);
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
width:100%;
`
const Left = styled.div`
width:40%;
`
const Logo = styled.img`

`
const Middle = styled.div`
display:flex;
align-items:center;
width: 100%;
justify-content:center;
` 
const NavItem = styled.span`
margin-right:7%;
cursor:pointer;
font-size:12px;
white-space:nowrap;
`

const Right = styled.div`
width:40%;
`
const Button = styled.button`
padding: 4.5% 6%;
border-radius:13px;
cursor:pointer;
background: #0D6EFD;
display:inline-block;
border:none;
overflow:hidden;
max-width: 100%;
`
const ButtonText = styled.span`
color:white;
font-size:15px;
width:100%;
white-space:nowrap;
max-width: 100%;
`

const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
            <Left>
                <Logo src={logo}/>    
            </Left>

            <Middle>
                <NavItem>Home</NavItem>
                <NavItem>Smart Collection</NavItem> 
                <NavItem>Services</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Blogs</NavItem>
                <NavItem>About Us</NavItem>
                
            </Middle>
            <Right>
                <Button><ButtonText>Contact Us</ButtonText></Button>
            </Right>
        </Wrapper>
        </Container>
    )
}
export default Navbar