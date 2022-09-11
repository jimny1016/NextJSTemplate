import Container from '@components/ui/container';
import Layout from '@components/layout/layout';
import Subscription from '@components/common/subscription';
import PageHeader from '@components/ui/page-header';
import CheckoutForm from '@components/checkout/checkout-form';
import CheckoutCard from '@components/checkout/checkout-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { checkoutViewEvent, purchaseViewEvent, pushSearchDataLayer } from '@utils/gtm';

export default function CheckoutPage() {
  const gaTest = () => {
    const d = new Date();
    let text = 't-shirt';
    pushSearchDataLayer(text);

    let gtmProduct = [] as GTMProducts[];
    checkoutViewEvent(gtmProduct);

    gtmProduct.push({
      id: d.toString(),
      name: '123',
      quantity: 3,
      price: '999',
    });
    checkoutViewEvent(gtmProduct);

    const orderResult = {
      id: d.toString(),
      revenue: (100).toString(),
      tax: (5).toString(),
      shipping: (3).toString(),
    };

    purchaseViewEvent(gtmProduct, orderResult);
  };
  useEffect(() => {
    gaTest();
  }, []);
  return (
    <>
      <PageHeader pageHeader="text-page-checkout" />
      <Container>
        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
            <CheckoutForm />
          </div>
          <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
            <CheckoutCard />
          </div>
        </div>
        <Subscription />
      </Container>
    </>
  );
}

CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'forms', 'menu', 'footer'])),
    },
  };
};
