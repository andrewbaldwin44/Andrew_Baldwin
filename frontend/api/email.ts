import emailjs from 'emailjs-com';

export default function sendEmail(formElement, successCallback, errorCallback) {
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      formElement,
      process.env.NEXT_PUBLIC_EMAIL_USER_ID,
    )
    .then(
      () => successCallback(true),
      error => errorCallback(error.text),
    );
}
