import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xqaqkavw");
  const hasShownToastRef = useRef(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    hasShownToastRef.current = false;

    try {
      const result = await handleSubmit(event);
      if (result && result.errors && result.errors.length > 0) {
        throw new Error(result.errors[0]?.message || "Submission failed");
      }

      if (state.succeeded) {
        if (!hasShownToastRef.current) {
          hasShownToastRef.current = true;
          toast.success("Thanks for your message!", {
            position: "top-right",
            autoClose: 3000,
          });
          document.getElementById("contact-form").reset();
          reset();
        }
      } else {
        throw new Error("Submission did not succeed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (!hasShownToastRef.current) {
        hasShownToastRef.current = true;
        toast.error(error.message || "Failed to submit the form. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  useEffect(() => {
    if (state.submitting) {
      hasShownToastRef.current = false;
    }
  }, [state.submitting]);

  const labelStyle = {
    color: '#8B4513',
    fontStyle: 'italic',
    fontFamily: '"Georgia", serif',
    textAlign: 'left',
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  return (
    <form id="contact-form" onSubmit={onSubmit} style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={labelStyle}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="contact-form-input"
          style={{ width: '100%', padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px' }}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="contact-form-error"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-form-textarea"
          style={{ width: '100%', padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', minHeight: '120px' }}
          rows="4"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="contact-form-error"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        style={{ width: '100%', padding: '10px 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#8B4513', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Send!
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <>
      <ToastContainer />
      <div style={{ backgroundColor: '#A5D6A7', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', backgroundImage: 'none' }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
