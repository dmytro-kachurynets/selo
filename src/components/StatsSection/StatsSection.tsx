'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
  { value: '1493', label: 'Рік першої писемної згадки' },
  { value: '~1 366', label: 'Мешканців (перепис 2001)' },
  { value: '5,74 км²', label: 'Площа села' },
  { value: '500+ р.', label: 'Вік Свято-Вознесенської церкви' },
];

export default function StatsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 0 }}>
          {stats.map((stat, i) => (
            <Grid
              item
              xs={6}
              md={3}
              key={stat.label}
              sx={{
                textAlign: 'center',
                borderRight: (theme) =>
                  i < stats.length - 1
                    ? { md: `1px solid ${theme.palette.primary.contrastText}30` }
                    : 'none',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'var(--font-roboto-slab)',
                  fontWeight: 700,
                  color: 'primary.contrastText',
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  lineHeight: 1.1,
                  mb: 0.75,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.contrastText',
                  opacity: 0.8,
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
