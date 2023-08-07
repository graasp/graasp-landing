import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import PrivacyPolicy from '@sections/PrivacyPolicy';
import Footer from '@sections/Footer';

const PrivacyPolicyPage = () => (
  <Layout>
    <Navbar />
    <PrivacyPolicy />
    <Footer />
  </Layout>
);

export default PrivacyPolicyPage;
