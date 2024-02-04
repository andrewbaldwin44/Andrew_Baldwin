import { useState } from 'react';

import SendMailIcon from 'assets/send-mail';
import SuccessMessage from 'components/contact-form/success-message.component';
import Loader from 'components/loader/loader.component';
import sendEmail from 'externalRequest/email';
import { useTranslations } from 'hooks/use-translations';

export default function ContactForm() {
  const { getTranslations } = useTranslations();

  const [success, setSuccess] = useState(false);
  const [hasFormSubmitted, setHasFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const disableForm = (formElement: HTMLFormElement) => {
    formElement.style.opacity = '0.6';
    formElement.style.pointerEvents = 'none';
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
              htmlFor='name'
            >
              {getTranslations('contactPage.name')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='name'
                name='name'
                required
                type='text'
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b dark:text-gray-300'
              htmlFor='email'
            >
              {getTranslations('contactPage.email')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='email'
                name='email'
                required
                type='email'
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col border-b dark:text-gray-300'
              htmlFor='subject'
            >
              {getTranslations('contactPage.subject')}
              <input
                className='my-2 text-black-500 text-base outline-none bg-transparent'
                id='subject'
                name='subject'
                required
                type='text'
              />
            </label>
            <label
              className='text-gray-500 text-sm flex flex-col dark:text-gray-300'
              htmlFor='message'
            >
              {getTranslations('contactPage.message')}
              <textarea
                className='p-3 mt-4 border border-gray-300 rounded text-black-500 text-base outline-none bg-transparent'
                id='message'
                name='message'
                required
                rows={4}
              />
            </label>
            <button
              className='btn-primary flex items-center justify-center w-full h-14 md:w-64 gap-x-6 mx-auto'
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
