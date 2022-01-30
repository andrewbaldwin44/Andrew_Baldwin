import cx from 'classnames';

import SentMailIcon from 'assets/sent-mail';
import { useTranslations } from 'hooks/use-translations';
import styles from 'components/contact-form/contact.module.css';

export default function SuccessMessage() {
  const { getTranslations } = useTranslations();

  const sentMailClasses = cx(styles.sentMail, 'h-20 w-20');

  return (
    <div className='flex flex-col items-center justify-center dark:text-gray-100'>
      <SentMailIcon className={sentMailClasses} />
      <p>{getTranslations('contactPage.emailSent')}</p>
      <p>{getTranslations('contactPage.emailSentThanks')}</p>
    </div>
  );
}
