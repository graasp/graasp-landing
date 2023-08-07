import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Disclaimer from '@sections/Disclaimer';
import Footer from '@sections/Footer';

const DisclaimerPage = () => (
  <Layout>
    <Navbar />
    <Disclaimer />
    <Footer />
  </Layout>
);

export default DisclaimerPage;
