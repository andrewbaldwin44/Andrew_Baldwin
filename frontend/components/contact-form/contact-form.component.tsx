import { useState } from 'react';

import sendEmail from 'externalRequest/email';
import SuccessMessage from 'components/contact-form/success-message.component';
import SendMailIcon from 'assets/send-mail';
import Loader from 'components/loader/loader.component';
import { useTranslations } from 'hooks/use-translations';

export default function ContactForm() {
  const { getTranslations } = useTranslations();

  const [success, setSuccess] = useState(false);
  const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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
    <div className='overflow-hidden border border-gray-200 shadow rounded-lg px-6 md:px-12 py-10 max-w-screen-sm mx-auto md:mt-20'>
      {success ? (
        <SuccessMessage />
      ) : (
        <>
          <form className='flex flex-col gap-y-8' onSubmit={onSubmit}>
            <h1 className='text-center text-2xl dark:text-gray-100'>
              {getTranslations('contactPage.header')}
            </h1>
            <label
              className='text-gray-500 text-sm flex flex-col border-b dark:text-gray-300'
              htmlFor='contact-form-name'
            >
              {getTranslations('contactPage.name')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='contact-form-name'
                type='text'
                name='name'
                required
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b dark:text-gray-300'
              htmlFor='contact-form-email'
            >
              {getTranslations('contactPage.email')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='contact-form-email'
                type='email'
                name='email'
                required
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b dark:text-gray-300'
              htmlFor='contact-form-subject'
            >
              {getTranslations('contactPage.subject')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='contact-form-subject'
                type='text'
                name='subject'
                required
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col dark:text-gray-300'
              htmlFor='contact-form-message'
            >
              {getTranslations('contactPage.message')}
              <textarea
                className='p-3 mt-4 border border-gray-300 rounded text-black-500 text-base outline-none bg-transparent'
                rows={4}
                id='contact-form-message'
                name='message'
                required
              />
            </label>
            <button
              className='btn btn-red flex items-center justify-center w-full h-12 md:w-64 gap-x-6 mx-auto'
              type='submit'
            >
              {hasFormSubmitted ? (
                <Loader />
              ) : (
                <>
                  {getTranslations('contactPage.send')}
                  <SendMailIcon className='h-6 w-6' />
                </>
              )}
            </button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </>
      )}
    </div>
  );
}
