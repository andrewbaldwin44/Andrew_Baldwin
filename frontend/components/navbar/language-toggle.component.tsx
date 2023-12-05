import Link from 'next/link';
import { useRouter } from 'next/router';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Français', code: 'fr' },
];

export default function LanguageToggle() {
  const { locale, pathname } = useRouter();

  return (
    <div>
      {languages.map(action => {
        if (action.code === locale) {
          return null;
        }

        return (
          <Link
            className='dark:text-gray-100'
            href={pathname}
            key={action.code}
            locale={action.code}
          >
            {action.name}
          </Link>
        );
      })}
    </div>
  );
}
