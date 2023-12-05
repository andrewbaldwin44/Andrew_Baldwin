import { IAsset } from 'assets/types';
import { useTranslations } from 'hooks/use-translations';

export default function SendMailIcon({ className }: IAsset) {
  const { getTranslations } = useTranslations();

  return (
    <svg
      className={className}
      preserveAspectRatio='xMidYMid meet'
      version='1.0'
      viewBox='0 0 512.000000 512.000000'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{getTranslations('assets.sendMail')}</title>
      <g
        fill='currentColor'
        stroke='none'
        transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
      >
        <path
          d='M4655 4676 c-148 -57 -1233 -471 -2410 -921 -1177 -449 -2153 -824
    -2169 -833 -91 -53 -99 -183 -15 -244 14 -11 331 -137 705 -281 l679 -263 5
    -850 c5 -797 6 -852 23 -877 62 -95 207 -87 260 13 11 19 141 276 290 571
    l272 537 660 -490 c363 -270 680 -504 704 -519 75 -48 172 -33 215 33 8 13
    292 932 631 2043 489 1603 615 2028 612 2058 -6 47 -29 82 -70 107 -59 36
    -100 27 -392 -84z m-750 -615 c-17 -15 -2279 -1624 -2306 -1639 -24 -15 -48
    -7 -528 178 -277 107 -499 196 -495 197 5 2 756 289 1669 637 913 349 1662
    635 1665 635 2 1 0 -3 -5 -8z m660 -238 c-640 -2105 -890 -2920 -896 -2927 -4
    -4 -79 45 -167 110 -910 674 -1031 767 -1024 778 8 14 2152 2276 2157 2276 1
    0 -30 -107 -70 -237z m-856 -300 c-99 -103 -1491 -1574 -1551 -1638 -34 -38
    -82 -122 -191 -340 -80 -159 -162 -319 -181 -355 l-36 -65 0 516 0 516 637
    454 c351 250 807 574 1013 721 206 147 377 268 379 268 3 0 -29 -35 -70 -77z'
        />
      </g>
    </svg>
  );
}
