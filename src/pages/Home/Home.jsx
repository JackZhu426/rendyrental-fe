import React from 'react';
import styled from 'styled-components';
import getAllProperties from '../../config/getAllProperties'


const Container = styled.div`
  overflow: hidden;
  width: 45rem;
  height: 42rem;
  border-radius: 4rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
`;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties:""
    };

    //this.getPropertiesInfo();
  }
  

  componentDidMount(){
    this.getPropertiesInfo();
  }
  
  async getPropertiesInfo() {
    this.setState({
      properties: await getAllProperties(),
    });
  }

  render(){
    const {properties}=this.state;
    return(
     <Container>
      {properties.city}
      <br/>
      {properties.description}
     </Container>
    )


  }
 

}
export default Home;