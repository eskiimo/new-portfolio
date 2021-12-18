import React, { useEffect, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import Buton from '../components/FormElements/Button';
import './contactPage.css';

import CustomInput from '../components/FormElements/InputField';

import {
 VALIDATOR_EMAIL,
 VALIDATOR_MINLENGTH,
 VALIDATOR_REQUIRE,
} from '../components/util/validators';
import Transition from '../components/UIelements/Transition';
import { useForm } from '../components/hooks/form-hook';

const Contact = () => {
 const [bool, setBool] = useState(false);
 const [formState, inputHandler] = useForm(
  {
   name: { value: '', isValid: false },
   email: { value: '', isValid: false },
   message: { value: '', isValid: false },
  },
  false
 );

 useEffect(() => {
  setBool(true);
 }, []);
 // const
 const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log(formState.inputs);
  // auth.login(); //send to BackEnd
 };

 let h13 = ['C', 'o', 'n', ' t', 'a', 'c', 't', '', 'm', 'e'];
 const mapH3 = h13.map((letter, index) => {
  return (
   <div key={index} className="parent">
    <span className="animate">{letter}</span>
   </div>
  );
 });
 return (
  <React.Fragment>
   <div className="contact-container">
    <p className="opening-tag html-snippets">&lt;html &gt;</p>
    <p className="html-snippets"> &lt;body &gt;</p>
    <p className="html-snippets">&lt;h1 &gt;</p>

    <div className="contact-paragraph">{mapH3}</div>
    <p className="html-snippets"> &lt;p &gt;</p>
    <p className="contact-message">
     I'm interested in freelance opportunities , especially ambitious or large
     projects. However, if you have other request or question, don't hesitate to
     use the form.
    </p>
    <p className="html-snippets"> &lt;form &gt;</p>
    <Form className="form" onSubmit={onSubmitHandler}>
     <Transition bool={bool}>
      <FormGroup>
       <CustomInput
        id="name"
        placeholder="Name"
        type="text"
        errorText="idiot!!"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
       />
      </FormGroup>
     </Transition>
     <Transition bool={bool}>
      <FormGroup>
       <CustomInput
        id="email"
        placeholder="Email"
        type="email"
        errorText="idiot!!"
        validators={[VALIDATOR_EMAIL()]}
        onInput={inputHandler}
       />
      </FormGroup>
     </Transition>

     <Transition bool={bool}>
      <FormGroup>
       <CustomInput
        id="message"
        placeholder="Message"
        type="textarea"
        errorText="idiot!!"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
       />
      </FormGroup>
     </Transition>
     <div className="form-button">
      <Buton
       disabled={!formState.isValid}
       type="submit"
       width={'30%'}
       text={'Submit'}
      />
     </div>
    </Form>
    <p className="html-snippets"> &lt;/body &gt;</p>
   </div>
  </React.Fragment>
 );
};
export default Contact;
