import SentMailIcon from 'assets/sent-mail';

export default function SuccessMessage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <SentMailIcon className='h-20 w-20' />
      <p>Email successfully sent!</p>
      <p>Thanks for reaching out!</p>
    </div>
  );
}
