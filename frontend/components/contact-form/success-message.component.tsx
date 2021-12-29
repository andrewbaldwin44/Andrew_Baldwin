import cx from 'classnames';

import SentMailIcon from 'assets/sent-mail';
import styles from 'components/contact-form/contact.module.css';

export default function SuccessMessage() {
  const sentMailClasses = cx(styles.sentMail, 'h-20 w-20');

  return (
    <div className='flex flex-col items-center justify-center'>
      <SentMailIcon className={sentMailClasses} />
      <p>Email successfully sent!</p>
      <p>Thanks for reaching out!</p>
    </div>
  );
}
