import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Buton from "../components/FormElements/Button";
import "./contact.css";

import CustomInput from "../components/FormElements/InputField";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../components/util/validators";
import { useForm } from "../components/hooks/form-hook";
import LoadingSpinner from "../components/UIelements/LoadingSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      message: { value: "", isValid: false },
    },
    false
  );
  const showToast = () => {
    setIsToast(true);
  };
  const hideToast = () => {
    setIsToast(false);
  };

  // const
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // console.log(formState.inputs);
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_BACKENDURL, {
        method: "POST",
        body: JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          message: formState.inputs.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
          // Authorization: 'Bearer random token will not check',
        },
      });
      const responseData = await response.json();

      // if (!response.ok) {
      //    throw new Error('response not ok ');
      // }

      console.log(responseData);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    showToast();
  };

  return (
    <>
      <section id="contact" className="">
        <p className="opening-tag html-snippets">&lt;html &gt;</p>
        <p className="html-snippets"> &lt;body &gt;</p>
        <p className="html-snippets">&lt;h1 &gt;</p>

        <h1>CONTACT ME!</h1>
        <p className="html-snippets"> &lt;p &gt;</p>
        <div className="form-div">
          <p className="contact-message">
            I would love to hear from you regarding anything related to what's
            posted on this website. if you have a request or a question, don't
            hesitate to use the form.
            <br />
            or simply visit my fb page{" "}
            <i className="fa-solid fa-hand-peace"></i>
          </p>
        </div>
        <p className="html-snippets"> &lt;form &gt;</p>
        <div className="form-div">
          <form autoComplete="off" className="form" onSubmit={onSubmitHandler}>
            <CustomInput
              id="name"
              placeholder="Name"
              type="text"
              errorText="anonymos guy huh!"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />

            <CustomInput
              id="email"
              placeholder="Email"
              type="email"
              errorText="enter a valid email !!"
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
            />

            <CustomInput
              id="message"
              placeholder="Message"
              type="textarea"
              errorText="message must be more than 5 letters !!"
              validators={[VALIDATOR_MINLENGTH(5)]}
              onInput={inputHandler}
            />

            {loading ? (
              <div className="spinner-div">
                <LoadingSpinner />
              </div>
            ) : (
              <div className="form-button">
                <Buton
                  disabled={!formState.isValid}
                  type="submit"
                  width={"30%"}
                  text={"Submit"}
                />
              </div>
            )}
          </form>
        </div>
        <p className="html-snippets"> &lt;/body &gt;</p>
      </section>
      <Modal
        backdrop={true}
        centered
        fullscreen="sm"
        size="xs"
        toggle={showToast}
        isOpen={isToast}
      >
        <ModalHeader toggle={showToast}>
          <i className="fas fa-kiss-wink-heart"></i>{" "}
        </ModalHeader>
        <ModalBody>
          <p>thank you !</p>
        </ModalBody>
        <ModalFooter>
          <Buton text="Close" onClick={hideToast} />
        </ModalFooter>
      </Modal>
    </>
  );
};
export default Contact;
