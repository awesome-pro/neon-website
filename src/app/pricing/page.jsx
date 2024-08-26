import Faq from 'components/pages/pricing/faq';
import Hero from 'components/pages/pricing/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.pricing);

const PricingPage = () => (
  <Layout>
    <Hero />
    <Faq />
  </Layout>
);

export default PricingPage;
