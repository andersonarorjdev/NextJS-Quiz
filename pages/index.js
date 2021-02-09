//Essentials imports
import styled from 'styled-components';

//External datas import
import DB from '../db.json';

//Components imports
import Widget from '../src/components/Widgets';
import Footer from '../src/components/Footer';
import GHCorner from '../src/components/GitHubCorner';

const Background = styled.div`
  background-image:url(${DB.bg});
  flex:1;
  background-size:cover;
  background-position:center;
  min-height:100vh;
`

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width:500px){
    margin:auto;
    padding:15px;
  }
`;

const BackgroundDIV = props =>{
  return(
        <div>
          <Background>
            <QuizContainer>
           
              <Widget>
                <Widget.header>
                  <h1>Title</h1>
                </Widget.header>

                <Widget.content>
                Title
                </Widget.content>
              </Widget>

              <Widget>
                <Widget.header>
                  <h1>Title</h1>
                </Widget.header>

                <Widget.content>
                Title
                </Widget.content>
              </Widget>
              <Footer />
              <GHCorner projectUrl="https://github.com/andersonarorjdev"/>
            </QuizContainer>
          </Background>
        </div>
  )
}

export default BackgroundDIV;