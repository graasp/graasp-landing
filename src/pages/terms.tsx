import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Terms from '@sections/Terms';
import Footer from '@sections/Footer';

const TermsPage = () => (
  <Layout>
    <Navbar />
    <Terms />
    <Footer />
  </Layout>
);

export default TermsPage;
