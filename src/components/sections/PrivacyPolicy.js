import { Link } from 'gatsby';
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PrivacyPolicy = () => (
  <Container sx={{ p: 5, my: 5, minHeight: 300 }}>
    <Typography variant="h2" sx={{ my: 3 }}>
      Privacy Policy
    </Typography>
    <Typography variant="h6">
      Graasp is developed and maintained by the{' '}
      <a href="https://graasp.org" target="_blank" rel="noreferrer">
        Graasp Association
      </a>{' '}
      and supported by the École Polytechnique Fédérale de Lausanne (EPFL), a
      federal public university in Switzerland. Graasp complies with the{' '}
      <a
        href="https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/"
        target="_blank"
        rel="noreferrer"
      >
        privacy policies
      </a>{' '}
      of EPFL, and with{' '}
      <a
        href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
        target="_blank"
        rel="noreferrer"
      >
        GDPR
      </a>
      . We use Google Analytics on this landing page on an anonymized basis, and
      do not share any data with third parties. The Graasp Association&apos;s
      products may be used in Swiss or European digital education research
      projects in compliance with the{' '}
      <a
        href="https://www.swissuniversities.ch/fileadmin/swissuniversities/Dokumente/Organisation/SUK-P/SUK_P-2/OpenScience_Strategy_v2.5_clean.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Swiss
      </a>{' '}
      and{' '}
      <a
        href="https://ec.europa.eu/info/research-and-innovation/strategy/goals-research-and-innovation-policy/open-science_en"
        target="_blank"
        rel="noreferrer"
      >
        European
      </a>{' '}
      Open Science strategies.
    </Typography>

    <Link to="/">
      <Typography variant="h6" sx={{ my: 3 }}>
        Home
      </Typography>
    </Link>
  </Container>
);

export default PrivacyPolicy;
