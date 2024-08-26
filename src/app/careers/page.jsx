import Hero from 'components/pages/careers/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.careers);

const CareersPage = () => (
  <Layout headerTheme="dark">
    <Hero />
  </Layout>
);

export default CareersPage;

export const revalidate = 60;
