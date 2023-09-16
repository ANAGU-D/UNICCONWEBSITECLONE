import { styled } from "styled-components"
import Image1 from '../Assets/heroImg-one.png'
import Image2 from '../Assets/heroImg-two.png'
const Container = styled.div`
  width:100%;
  display:flex;
  height:100%;
`
const Wrapper = styled.div`
    padding:6% 4%;
    display:flex;
`
const Left = styled.div` 
  width:100%;

`
const LeftText = styled.h1`
    font-size:90px;
    font-weight: 700;
    
`
const Right = styled.div`
  width:100%;
  display:flex;
`
const RightContent = styled.img`
display: flex;
margin-right: 4%;
width:100%;
`





const Home = ()=>{

return(
  <Container>
      <Wrapper>
        <Left>
        <LeftText>Expertise & <span style={{color:'#0D6EFD'}}>Experience</span>
For Best Results!!!</LeftText>
        </Left>
          <Right>
             <RightContent src={Image1} />
             <RightContent src={Image2} style={{paddingTop:'10%'}}/>
          </Right>
      </Wrapper>
  </Container>
)

}

export default Home