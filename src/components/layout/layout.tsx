import { NextSeo } from 'next-seo';
import Header from '@components/layout/header/header';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import CookieBar from '@components/common/cookie-bar';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';

import * as schema from '@const/seo.schema';
import * as tracking from '@const/tracking.code';
import { useRouter } from 'next/router';

const Layout: React.FC = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <NextSeo
        additionalMetaTags={[
          {
            name: 'viewport',
            content:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
          },
        ]}
        title="ChawkBazar React - React Next E-commerce Template"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        canonical="https://chawkbazar.vercel.app/"
        openGraph={{
          url: 'https://chawkbazar.vercel.app',
          title: 'ChawkBazar React - React Next E-commerce Template',
          description:
            'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
          images: [
            {
              url: '/assets/images/og-image-01.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: '/assets/images/og-image-02.png',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
          ],
        }}
      />

      {schema.all_structure}
      {schema.google_faq.google_faq_map[router.asPath]}
      {tracking.all_tracking_codes_header(router.asPath)}
      {tracking.googleTagManager.header}
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation />
      <Search />
      <CookieBar
        title={t('text-cookies-title')}
        hide={acceptedCookies}
        action={
          <Button onClick={() => onAcceptCookies()} variant="slim">
            {t('text-accept-cookies')}
          </Button>
        }
      />
    </div>
  );
};

export default Layout;
