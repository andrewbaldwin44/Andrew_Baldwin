import { useState } from 'react';
import cx from 'classnames';

import sendEmail from 'api/email';
import SuccessMessage from 'components/contact-form/success-message.component';
import SendMailIcon from 'assets/send-mail';
import styles from 'components/contact-form/contact.module.css';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendMailButtonClasses = cx(
    'flex items-center justify-center w-40 py-2 gap-x-6 text-red font-semibold border-2 border-red rounded mx-auto transition-colors duration-150',
    {
      'hover:bg-red hover:text-white': !hasFormSubmitted,
    },
  );

  const sendMailClasses = cx('h-6 w-6', {
    [styles.sendMail]: hasFormSubmitted,
  });

  const disableForm = (formElement: HTMLFormElement) => {
    const { elements } = formElement;

    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLInputElement).readOnly = true;
      (elements[i] as HTMLInputElement).disabled = true;
    }

    formElement.style.opacity = '0.6';
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    disableForm(e.target as HTMLFormElement);
    setHasFormSubmitted(true);
    sendEmail(e.target as HTMLFormElement, setSuccess, setErrorMessage);

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className='overflow-hidden border border-gray-200 shadow rounded-lg px-12 py-10 max-w-screen-sm mx-auto mt-20'>
      {success ? (
        <SuccessMessage />
      ) : (
        <>
          <form className='flex flex-col gap-y-8' onSubmit={onSubmit}>
            <h1 className='text-center text-2xl'>Contact Us</h1>
            <label
              className='text-gray-500 text-sm flex flex-col border-b'
              htmlFor='contact-form-name'
            >
              Name:
              <input
                className='my-2 text-black-500 text-base outline-none'
                id='contact-form-name'
                type='text'
                name='name'
                required
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b'
              htmlFor='contact-form-email'
            >
              Email:
              <input
                className='my-2 text-black-500 text-base outline-none'
                id='contact-form-email'
                type='email'
                name='email'
                required
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b'
              htmlFor='contact-form-subject'
            >
              Subject:
              <input
                className='my-2 text-black-500 text-base outline-none'
                id='contact-form-subject'
                type='text'
                name='subject'
                required
              />
            </label>
            <label className='text-gray-500 text-sm flex flex-col' htmlFor='contact-form-message'>
              Message:
              <textarea
                className='p-3 mt-4 border border-gray-300 rounded text-black-500 text-base outline-none'
                rows={4}
                id='contact-form-message'
                name='message'
                required
              />
            </label>
            <button className={sendMailButtonClasses} type='submit'>
              Send
              <SendMailIcon className={sendMailClasses} />
            </button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </>
      )}
    </div>
  );
}
