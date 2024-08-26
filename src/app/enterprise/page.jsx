import Apply from 'components/pages/enterprise/apply';
import Hero from 'components/pages/enterprise/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.enterprise);

const EnterprisePage = () => (
  <Layout headerClassName="!absolute !bg-transparent">
    <Hero />
    <Apply />
  </Layout>
);

export default EnterprisePage;
