import React from 'react';
import { ReactComponent as Computer } from '@images/art/computer.svg';
import { ReactComponent as Network } from '@images/art/network.svg';
import { ReactComponent as Folders } from '@images/art/folders.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const About = () => (
  <>
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ p: 10, backgroundColor: '#ececec' }}
    >
      <Grid item sm={12} md={6}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Create Interactive Learning Spaces
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Build rich learning experiences with content from across the web.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Create engaging activities for your classroom, professional training
          event or tutoring session.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Access hundreds of resources covering a wide variety of subjects.
        </Typography>
      </Grid>
      <Grid item sm={12} md={6} align="center">
        <Computer style={{ maxWidth: '380px' }} />
      </Grid>
    </Grid>
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ p: 10, backgroundColor: '#e0e0e0' }}
    >
      <Grid item sm={12} md={6} align="center">
        <Folders style={{ maxWidth: '380px' }} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Share Knowledge Privately
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Create, manage and share content with colleagues.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Collaborate both within and across organisations.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Prepare interactive presentations for your next meeting or seminar.
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ p: 10, backgroundColor: '#ececec' }}
    >
      <Grid item sm={12} md={6}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Engage With Communities You Care About
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Discuss topics with like-minded users.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Take part in both virtual and real-world events.
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
          Connect with established communities of practice and personal interest
          groups.
        </Typography>
      </Grid>
      <Grid item sm={12} md={6} align="center">
        <Network style={{ maxWidth: '380px' }} />
      </Grid>
    </Grid>
  </>
);

export default About;
