'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a120b 0%, #2d1f14 60%, #1e2a1c 100%)'
            : 'linear-gradient(135deg, #faf8f5 0%, #f5ede4 60%, #eef2ec 100%)',
      }}
    >
      {/* Decorative background circle */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.main}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 680 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: 3,
              fontWeight: 600,
            }}
          >
            Ласкаво просимо
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: 'var(--font-roboto-slab)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'text.primary',
            }}
          >
            Наше{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              село
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: 'text.secondary',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Місце, де зберігається історія, живуть люди та розквітає природа.
            Ласкаво просимо на офіційний сайт нашого села.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} pt={1}>
            <Button
              variant="contained"
              size="large"
              href="/about"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Дізнатися більше
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/news"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.dark',
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                },
              }}
            >
              Новини
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
