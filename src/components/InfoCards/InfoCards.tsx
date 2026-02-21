'use client';

import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const cards = [
  {
    icon: <NewspaperIcon fontSize="large" />,
    title: 'Новини',
    description: 'Актуальні новини та події нашого села. Слідкуйте за останніми оновленнями.',
    href: '/news',
  },
  {
    icon: <InfoIcon fontSize="large" />,
    title: 'Про село',
    description: 'Історія, географія та цікаві факти про наше село та його мешканців.',
    href: '/about',
  },
  {
    icon: <PhotoLibraryIcon fontSize="large" />,
    title: 'Галерея',
    description: 'Фотографії природи, свят та повсякденного життя нашого села.',
    href: '/gallery',
  },
  {
    icon: <ContactMailIcon fontSize="large" />,
    title: 'Контакти',
    description: "Зв'яжіться з нами. Адреси, телефони та форма зворотного зв'язку.",
    href: '/contacts',
  },
];

export default function InfoCards() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'var(--font-roboto-slab)',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          Що вас цікавить?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: { xs: 4, md: 6 },
          }}
        >
          Знайдіть потрібну інформацію про наше село
        </Typography>

        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.title}>
              <Card
                component="a"
                href={card.href}
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-roboto-slab)',
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
