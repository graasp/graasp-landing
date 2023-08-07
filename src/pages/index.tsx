import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Footer from '@sections/Footer';
import Background from '@sections/Background';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Background>
      <Header />
    </Background>
    <About />
    {/*<Brands />*/}
    {/*<Team />*/}
    {/*<Faq />*/}
    <Footer />
  </Layout>
);

export default IndexPage;
