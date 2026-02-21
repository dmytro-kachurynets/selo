'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const items = [
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 36 }} />,
    title: 'Свято-Вознесенська церква',
    description:
      'Перший храм збудований у 1764 році. Нинішня Свято-Вознесенська церква (УПЦ) освячена у 1998 році і є духовним осередком громади.',
  },
  {
    icon: <HistoryEduIcon sx={{ fontSize: 36 }} />,
    title: 'Городище Замчисько',
    description:
      "Давньоруське укріплення на північно-заході села. Діаметр городища — 0,5 км. Пам\u2019ятка археології, що свідчить про заселення місцевості ще в Х–ХІІІ ст.",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 36 }} />,
    title: 'Видатні уродженці',
    description:
      'Клим Бернадський — повстанський отаман, захисник УНР. Микола Ортинський — Герой Радянського Союзу. Валентин Смаровоз — заслужений художник України, скульптор.',
  },
  {
    icon: <LandscapeIcon sx={{ fontSize: 36 }} />,
    title: 'Природа Поділля',
    description:
      'Мальовниче подільське село розташоване посеред пагорбів та лісів Хмельниччини. Площа — 5,74 км². За 25 км — станція Деражня, за 22 км — Вінківці.',
  },
];

export default function NotableSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, md: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 3, fontWeight: 600 }}
          >
            Визначні місця та люди
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-roboto-slab)',
              fontSize: { xs: '1.9rem', md: '2.75rem' },
              fontWeight: 700,
              mt: 1,
              color: 'text.primary',
            }}
          >
            Чим пишається{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Женишківці
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': {
                    boxShadow: 3,
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box
                    sx={{
                      color: 'primary.main',
                      flexShrink: 0,
                      mt: 0.25,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-roboto-slab)',
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                        fontSize: { xs: '1rem', md: '1.125rem' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
