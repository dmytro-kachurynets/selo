'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: '80vh', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(150deg, #1a120b 0%, #2d1f14 50%, #1a2318 100%)'
            : 'linear-gradient(150deg, #faf8f5 0%, #f2e8dc 50%, #eaf0e7 100%)',
      }}
    >
      {/* Decorative blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-8%',
          width: { xs: 320, md: 560 },
          height: { xs: 320, md: 560 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.main}1a 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: { xs: 200, md: 380 },
          height: { xs: 200, md: 380 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Chip
            icon={<PlaceIcon />}
            label="Хмельницька область · Хмельницький район"
            size="small"
            sx={{
              width: 'fit-content',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              fontWeight: 500,
              '& .MuiChip-icon': { color: 'primary.contrastText' },
            }}
          />

          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
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
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'text.primary',
            }}
          >
            <Box component="span" sx={{ color: 'primary.main' }}>
              Женишківці
            </Box>
            {' '}—{' '}
            <Box
              component="span"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
                fontWeight: 400,
                color: 'text.secondary',
              }}
            >
              наше рідне село
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: 600,
            }}
          >
            Старовинне подільське село з багатовіковою історією, першої письмової
            згадки якого сягають{' '}
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
              1493 року
            </Box>
            . Тут зберігаються пам'ятки від неоліту до наших днів.
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
              Про село
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/history"
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
              Історія
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
