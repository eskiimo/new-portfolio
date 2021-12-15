import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Bio from '../components/bio';
import Avatar from '../components/UIelements/avatar';
import './homePage.css';
const Home = () => {
 return (
  <Container>
   <Row>
    <Col>
     <div className="image-container ">
      <Avatar
       image={
        'https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/248294863_4592754124134575_3319527941529472690_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH37qQFMj4dCO9-cyq8vbWM_r9AkIjLfIP-v0CQiMt8gyQ0qmrRZRXHYxTlnF05-PV6rVFFepD7e4zzO1O2viEy&_nc_ohc=1fy7H57iZFUAX_Hr3Ix&_nc_ht=scontent.fcai1-2.fna&oh=00_AT-X8zLregOVAlCLQtDseVucpC2-4i9iNbENSFJZ9nt2PQ&oe=61BF4B30'
       }
       alt="kareem"
       height={'300px'}
       width={'300px'}
      />
     </div>
    </Col>
    <Col>
     <Bio />
    </Col>
   </Row>
  </Container>
 );
};
export default Home;
