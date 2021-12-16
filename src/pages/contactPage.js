import React from 'react';
import { Form, FormGroup, Input, FormText } from 'reactstrap';
import Buton from '../components/FormElements/Button';
import './contactPage.css';

const Contact = () => {
 return (
  <React.Fragment>
   <div className="form-container">
    <Form className="center">
     <FormGroup>
      <Input id="Name" name="name" placeholder="Name" type="text" />
     </FormGroup>
     <FormGroup>
      <Input id="Email" name="email" placeholder="Email" type="email" />
     </FormGroup>

     <FormGroup>
      <Input
       id="message"
       name="text"
       placeholder="Message"
       type="textarea"
       rows={4}
      />
     </FormGroup>
     <FormGroup>
      {/* <Input id="exampleFile" name="file" type="file" color="red" /> */}
      <FormText>
       This is some placeholder block-level help text for the above input. It's
       a bit lighter and easily wraps to a new line.
      </FormText>
     </FormGroup>

     <div className="form-button">
      {' '}
      <Buton text={'Submit'} />
     </div>
    </Form>
   </div>
  </React.Fragment>
 );
};
export default Contact;
