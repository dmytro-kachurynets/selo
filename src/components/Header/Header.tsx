'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '@/theme/ThemeRegistry';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Новини', href: '/news' },
  { label: 'Про село', href: '/about' },
  { label: 'Історія', href: '/history' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Контакти', href: '/contacts' },
];

export default function Header() {
  const { mode, toggleTheme } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 2 : 0}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: (theme) =>
            trigger
              ? theme.palette.background.paper
              : 'transparent',
          color: 'text.primary',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          borderBottom: (theme) =>
            trigger ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: { xs: 64, md: 80 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontFamily: 'var(--font-roboto-slab)',
                fontWeight: 700,
                color: 'primary.main',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 4 },
              }}
            >
              Женишківці
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flexGrow: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Theme toggle */}
            <IconButton onClick={toggleTheme} size="small" sx={{ mr: { xs: 1, md: 0 } }}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* Mobile hamburger */}
            <IconButton
              sx={{ display: { md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
