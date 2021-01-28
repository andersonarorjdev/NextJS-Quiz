import styled from 'styled-components'
import DB from '../db.json';

const Background = styled.div`
  background-image:url(${DB.bg});
  flex:1;
  background-size:cover;
  background-position:auto;
  min-height:100vh;
`

const BackgroundDIV = props =>{
  return(
        <div>
          <Background>
            Hello
          </Background>
        </div>
  )
}

export default BackgroundDIV;