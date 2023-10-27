import { Link } from 'gatsby';
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PrivacyPolicy = () => (
  <Container sx={{ p: 5, my: 5, minHeight: 300 }}>
    <Typography variant="h2" sx={{ my: 3 }}>
      Privacy Policy
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      1. Who we are and how to contact us
    </Typography>
    <Typography variant="body2">
      Graasp is developed and maintained by the{' '}
      <a href="https://association.graasp.org">Graasp Association</a> and
      supported by the École Polytechnique Fédérale de Lausanne (EPFL), a public
      university of science and technology in Switzerland. Graasp complies with
      the{' '}
      <a href="https://www.epfl.ch/about/presidency/presidents-team/legal-affairs/epfl-privacy-policy/">
        privacy policies
      </a>{' '}
      of EPFL, the Swiss Federal Act on Data Protection (FADP), and with the
      European{' '}
      <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679">
        GDPR
      </a>
      .
    </Typography>
    <Typography variant="body2">
      You can contact Graasp at the following email address:{' '}
      <a href="sendto:contact@graasp.org">contact@graasp.org</a>
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      2. Responsibilities
    </Typography>
    <Typography variant="subtitle1">2.1 User’s obligations</Typography>
    <Typography variant="body2">
      As user, you agree:
      <ol>
        <li>
          that you bear all responsibility for the Uploaded Data (see Section
          4.4) in Graasp. Graasp does not check users’ uploaded/created content
          for appropriateness, violations of privacy rights or Intellectual
          Property Rights. You are responsible for the content that you upload,
          because you are the data manager over your Uploaded Data;
        </li>
        <li>
          that you will comply at all times with relevant professional and
          business secrecy obligations if applicable;
        </li>
        <li>
          that Graasp only acts as a data manager regarding the storage and use
          of your Uploaded Data. Graasp only provides storage spaces and central
          processing units;
        </li>
        <li>
          that you are aware of the technical and organizational security
          measures implemented in Graasp;
        </li>
        <li>that you will promptly notify Graasp about:</li>
        <ul>
          <li>
            any legally binding request for disclosure of the Personal data by a
            law enforcement authority unless otherwise prohibited;
          </li>
          <li>
            any accidental or unauthorized access to proprietary, Personal or
            Uploaded Data, if technical assistance is required.
          </li>
          <li>
            to deal promptly and properly with all inquiries relating to the
            processing of the Personal Data as requested by applicable laws.
          </li>
        </ul>
      </ol>
    </Typography>
    <Typography variant="subtitle1">2.2 Obligations of Graasp</Typography>
    <Typography variant="body2">
      Graasp agrees and warrants to provide the services according to the Terms
      of Use. Graasp is acting as a data manager and warrant:
      <ol>
        <li>
          that Graasp keep detailed and updated records of all management
          activities carried out on the Personal and Uploaded Data;
        </li>
        <li>
          to guarantee the confidentiality of your Personal and Uploaded Data if
          they are configured as private;
        </li>
        <li>
          promptly comply with any request from users requiring Graasp to amend,
          transfer, delete, or otherwise dispose of the Personal and Uploaded
          Data, or to cease, mitigate, or remedy any authorized processing;
        </li>
        <li>
          that Graasp will not process Personal or Uploaded Data for Graasp‘s
          own commercial benefit or that of any third party;
        </li>
        <li>
          notify the users without undue delay of any suspected or actual data
          breach involving their Personal or Uploaded Data;
        </li>
        <li>
          to notify the user immediately if Graasp receives any complaint,
          request, or other communication concerning the processing of the
          Personal or Uploaded Data.
        </li>
        <li>
          to assist users with appropriate measures and by providing information
          for the fulfillment of your obligations under the applicable law.
        </li>
      </ol>
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      3. How Graasp uses your Personal and Uploaded Data
    </Typography>
    <Typography variant="subtitle1">3.1 Manage your account</Typography>
    <Typography variant="body2">
      Graasp processes your Account Data (see section 4.1) for the purposes of
      operating the Graasp platform and software, providing the Graasp services,
      and communicating with you about Graasp. The legal basis for the Account
      Data processing is the contract between users and Graasp as stated in the
      Terms of Use.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      3.2 Provide our services
    </Typography>
    <Typography variant="body2">
      Graasp processes your Meta-data (see section 4.2) to provide the Graasp
      services. For instance, it is used to describe the source of the Personal
      and Uploaded Data, the lineage, and to display activities performed on the
      Personal and Uploaded Data. The legal basis for the Meta-data management
      is the contract between users and Graasp as stated in the Terms of Use.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      3.3 Ensure the functionalities and understand the use of Graasp
    </Typography>
    <Typography variant="body2">
      Graasp processes Operational Data (see section 4.3) for the purpose of
      analyzing the use of Graasp, but also to ensure the functionalities of
      Graasp and the comfort of use. The legal basis for the Operational Data
      processing is the contract between users and Graasp as stated in the Terms
      of Use.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      3.4 Compliance with the law
    </Typography>
    <Typography variant="body2">
      Graasp may process Personal and Uploaded Data, in case of suspected or
      actual criminal or administrative proceedings led by competent authorities
      (see section 4.4). The legal basis for this processing is necessary to
      carry out a legal obligation.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      3.5 Research purposes
    </Typography>
    <Typography variant="body2">
      Graasp may collect and use your Personal and Upload Data for research
      purposes. Published scientific results only contain anonymized data.{' '}
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      4. Data collected
    </Typography>
    <Typography variant="body2">
      Graasp may collect all the following Personal data (referred to as the «
      Personal Data »).
    </Typography>
    <Typography variant="subtitle1" sx={{ my: 2 }}>
      4.1 Account Data
    </Typography>
    <Typography variant="body2">
      In order to manage the account of a user, Graasp needs to process the
      following Personal Data (« Account Data »):
      <ul>
        <li>email address</li>
        <li>full name</li>
        <li>User ID</li>
        <li>password</li>
        <li>
          Other log information
          <ul>
            <li>IP address</li>
            <li>timestamps of access to Graasp</li>
            <li>logs of consents</li>
          </ul>
        </li>
      </ul>
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      4.2 Meta-data
    </Typography>
    <Typography variant="body2">
      In order to provide Graasp services, the information that is collected
      from your activities in Graasp is required. For instance, collecting
      provenance of the data (where this data comes from, how it was created)
      and its lineage (who is using the data and how). Provenance information is
      not collected automatically without the user’s knowledge, its creation and
      subsequent collection is subject to a User’s deliberate action using
      Graasp.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      4.3 Operational Data
    </Typography>
    <Typography variant="body2">
      In order to ensure the operational functioning of Graasp and to understand
      its use, Graasp needs to process the following Personal Data («
      Operational Data »):
      <ul>
        <li>User IP addresses</li>
        <li>User ID</li>
        <li>
          Telemetry data, i.e. system data, used to get a pulse of the system,
          how hardware resources are used, by whom and understand why things
          fail, so that the Graasp team can troubleshoot them, or provide user
          support
        </li>
        <li>Logs from the firewall service</li>
        <li>Other logs required to ensure the functionalities of Graasp</li>
        <li>The number and duration of your visits</li>
        <li>Information about what parts of Graasp you visited</li>
      </ul>
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      4.4 Uploaded Data
    </Typography>
    <Typography variant="body2">
      You can create content (“Uploaded Data”) which may include Personal Data
      (e.g. educational data, digital documents, etc). You have the control over
      this data, as explained in the Terms of Use. As mentioned in the Terms of
      Use, users can decide to make public the Uploaded Data. In this case,
      other users may use your Uploaded Data for their own purpose, and Graasp
      cannot be liable for their further-use. Graasp hereby declines all
      responsibility for the further-use of your Uploaded Data by third-parties.
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      5. Cookies
    </Typography>
    <Typography variant="body2">
      A cookie is a file containing an identifier (a string of letters and
      numbers) that is sent by a web server to a web browser and is stored by
      the browser. When you access the Graasp platform, the installation of
      cookies on your devices is possible according to your settings, which will
      allow Graasp to recognize your browser, during the validity time of the
      cookies. The cookies that Graasp generates allows:
      <ul>
        <li>
          to prepare statistics including frequency of access, the use and
          performances of websites;
        </li>
        <li>to store preferences and parameters (authentification)</li>
        <li>
          to enable you to access reserved or personal content on the Graasp
          platform
        </li>
        <li>to improve our communication and services.</li>
      </ul>
      Most web browsers automatically accept cookies but provide controls that
      allow you to block or delete them. Please refer to your browser’s privacy
      or help documentation to find instructions for blocking or deleting
      cookies. For examples:{' '}
      <a href="https://support.microsoft.com/en-us/microsoft-edge/view-cookies-in-microsoft-edge-a7d95376-f2cd-8e4a-25dc-1de753474879">
        Edge
      </a>
      ,{' '}
      <a href="https://support.apple.com/fr-ch/guide/safari/sfri11471/mac">
        Safari
      </a>
      ,{' '}
      <a href="https://support.google.com/chrome/answer/95647?hl=fr&hlrm=en">
        Chrome
      </a>
      ,{' '}
      <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">
        Firefox
      </a>
    </Typography>
    <Typography variant="body2">
      If you choose to refuse cookies, you may not have access to certain
      functionalities of Graasp, which we cannot be held responsible for. The
      identifier is then sent back to the server each time the browser requests
      a page from the server. Cookies or similar technologies can be useful in
      many ways to make your visit in Graasp simpler, more pleasant and more
      pertinent. Various types of cookies are present in Graasp:
      <ul>
        <li>
          Cookies that are strictly necessary, which are necessary for
          navigation, along with your authentication token after logging in, and
          to secure Graasp;
        </li>
        <li>
          Functionality cookies, which are collecting some of your surfing
          preferences such as language preferences;
        </li>
        <li>Graasp does not use advertising cookies</li>
      </ul>
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      6. How Graasp retain your data
    </Typography>
    <Typography variant="body2">
      Graasp stores your Personal and Uploaded Data as long as your account
      exists. In order to fulfill our legal obligations or to fulfill our
      purpose described in section 4.3, the Operational Data may be anonymized
      and/or may be kept for a longer period.
    </Typography>
    <Typography variant="body2">
      Your Personal Data is stored on secure servers at our Service Provider’s
      premises in continental Europe (Germany and Switzerland).
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      7. Data Sharing
    </Typography>
    <Typography variant="body2">
      Graasp are sharing your Personal Data with the following recipients
      exclusively:
      <ul>
        <li>Authorized employees and Graasp managers</li>
        <li>Our Service Providers</li>
      </ul>
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      8. Service Providers and Transfers
    </Typography>
    <Typography variant="subtitle1">
      8.1 Amazon Web Services (Main service provider)
    </Typography>
    <Typography variant="body2">
      Graasp uses the services of AWS (Amazon Web Services). No international
      transfers are foreseen, but their privacy framework can be consulted{' '}
      <a href="https://aws.amazon.com/privacy/">here</a>.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      8.2 Other service providers
    </Typography>
    <Typography variant="body2">
      Graasp uses anonymised Google Analytics services and Google ReCaptcha
      services to secure and understand usage of the platform.
    </Typography>
    <Typography variant="body2">
      Anonymised data is also shared with Sentry.io for debugging and
      troubleshooting purposes in order to ensure a smooth and stable experience
      to our users.
    </Typography>
    <Typography variant="body2">
      Graasp may use the services of Google Fonts and other javascript libraries
      hosted on third-party servers. In those cases, only IP addresses would be
      communicated to those service providers.
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      8.3 Transfers
    </Typography>
    <Typography variant="body2">
      All your Personal and Uploaded Data is hosted by AWS, in Continental
      Europe (Germany and Switzerland). Copy of the data might be temporarily
      stored in the Graasp premises for quality insurance purposes.
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      9. Security
    </Typography>
    <Typography variant="body2">
      Graasp has put in place appropriate security measures pursuant to the
      acknowledged state of the art. Please note however that Graasp cannot
      guarantee an absolute security for your Personal and Uploaded Data, to the
      extent that the data retention and electronic transmission involves
      certain risks.
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      10. Your Rights
    </Typography>
    <Typography variant="body2">
      The user has a number of rights according to the data protection
      legislation. These rights can be limited in particular when they affect
      rights and freedom of others. Graasp will inform you of applicable
      exceptions in our answer to your potential request.
    </Typography>
    <Typography variant="body2">
      These rights include:
      <ul>
        <li>
          right of access: You have the right to know what Personal Data Graasp
          hold about you and to ask, in writing, to see your Personal Data. You
          can directly have this information by contacting the data controllers:
          contact@graasp.org
        </li>

        <li>
          right to be informed: You have the right to be informed how your
          Personal and Uploaded Data will be used. This Privacy Policy as well
          as any additional information or notice that is provided to you either
          at the time you provided your details, or otherwise, is intended to
          provide you with this information.
        </li>

        <li>
          right to withdraw consent: Graasp processes your Personal Data and
          Uploaded Data on the basis of your consent; you can withdraw that
          consent at any time.
        </li>

        <li>
          right of erasure: In some cases, you have the right to have your
          Personal and Uploaded Data to be deleted.
        </li>

        <li>
          right of rectification: If you believe your Personal Data is
          inaccurate you have the right to ask for their update.
        </li>

        <li>
          right to file a complaint: If you are unhappy with the way in which
          Graasp have handled your Personal or Uploaded Data, you have the right
          to file a complaint with the Federal Data Protection and Information
          Commissioner (FDPIC) or with the supervisory authority of your country
          or residency.
        </li>
      </ul>
      Graasp reserve the right to refuse any abusive request or one which is
      contrary to applicable laws.
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      11. Changes to this Privacy Policy
    </Typography>
    <Typography variant="body2">
      We may revise this Privacy Policy from time to time. The most current
      version of the policy will govern our processing of your Personal and
      Uploaded Data and will always be at{' '}
      <a href="https://graasp.org/privacy">https://graasp.org/privacy</a>. In
      case of modifications, they will be published on{' '}
      <a href="https://graasp.org">https://graasp.org/</a>. If you disagree with
      any of the changes to the Privacy Policy, you must stop using Graasp and
      ask for the deletion of your account.
    </Typography>
    <Typography variant="h6" sx={{ my: 2 }}>
      12. Final provisions
    </Typography>
    <Typography variant="subtitle1">
      12.1 Applicable law and jurisdiction
    </Typography>
    <Typography variant="body2">
      Swiss material laws are applicable. The place of execution and of
      jurisdiction is in Valais.
    </Typography>
    <Link to="/">
      <Typography variant="h6" sx={{ my: 3 }}>
        Home
      </Typography>
    </Link>
  </Container>
);

export default PrivacyPolicy;
