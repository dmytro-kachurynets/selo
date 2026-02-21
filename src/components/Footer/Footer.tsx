'use client';

import React from 'react';
import { Box, Container, Typography, Divider, Stack, Link } from '@mui/material';

const footerLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Новини', href: '/news' },
  { label: 'Про село', href: '/about' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Контакти', href: '/contacts' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={3}
          mb={3}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-roboto-slab)',
                fontWeight: 700,
                color: 'primary.main',
                mb: 0.5,
              }}
            >
              Село
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Офіційний сайт села
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="hover"
                variant="body2"
                color="text.secondary"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="body2" color="text.secondary" textAlign="center">
          © {year} Село. Всі права захищено.
        </Typography>
      </Container>
    </Box>
  );
}
