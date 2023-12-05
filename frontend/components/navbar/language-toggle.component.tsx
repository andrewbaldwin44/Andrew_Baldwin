import { useRouter } from 'next/router';
import Link from 'next/link';

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
            key={action.code}
            href={pathname}
            locale={action.code}
            className='dark:text-gray-100'
          >
            {action.name}
          </Link>
        );
      })}
    </div>
  );
}
