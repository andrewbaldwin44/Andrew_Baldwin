import { useState } from 'react';
import emailjs from 'emailjs-com';

import SuccessMessage from 'components/contact-form/success-message.component';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID,
      )
      .then(
        () => setSuccess(true),
        error => setErrorMessage(error.text),
      );
  };

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='contact-form-name'>
        Name:
        <input id='contact-form-name' type='text' name='name' />
      </label>
      <label htmlFor='contact-form-email'>
        Email:
        <input id='contact-form-email' type='email' name='email' />
      </label>
      <label htmlFor='contact-form-subject'>
        Subject:
        <input id='contact-form-subject' type='text' name='subject' />
      </label>
      <label htmlFor='contact-form-message'>
        Message:
        <input id='contact-form-message' type='text' name='message' />
      </label>
      <button type='submit'>Send</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
