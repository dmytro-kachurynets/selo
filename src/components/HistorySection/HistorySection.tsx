'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const milestones = [
  {
    period: '6 000–4 000 до н. е.',
    text: 'Знаряддя праці часів неоліту, знайдені поблизу села.',
  },
  {
    period: 'Давньоруська доба',
    text: 'Городище на північно-західній околиці (урочище Замчисько, діаметр 0,5 км).',
  },
  {
    period: '1493',
    text: 'Перша письмова згадка про Женишківці у документах Барського староства.',
  },
  {
    period: '1764',
    text: "Зведено нову дерев\u2019яну церкву Вознесіння Господнього замість згорілої.",
  },
  {
    period: '1793',
    text: 'Після другого поділу Польщі село увійшло до складу Російської імперії.',
  },
  {
    period: '1812–1835',
    text: 'Центр повстанського руху Устима Кармалюка — народного захисника Поділля.',
  },
  {
    period: '1920–1922',
    text: 'У селі діяв загін отамана Клима Бернадського — борця за УНР.',
  },
  {
    period: '1998',
    text: 'Освячено Свято-Вознесенську церкву (УПЦ), відновлену після радянської доби.',
  },
];

export default function HistorySection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 11 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          {/* Left: text */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', letterSpacing: 3, fontWeight: 600 }}
            >
              Наша спадщина
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-roboto-slab)',
                fontSize: { xs: '1.9rem', md: '2.75rem' },
                fontWeight: 700,
                mt: 1,
                mb: 2,
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              Більше 500 років{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                живої історії
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 3 }}
            >
              Женишківці — одне з найстаріших сіл Поділля. Тут виявлено пам'ятки
              від доби неоліту, давньоруське городище та пов'язані з подіями
              польсько-литовської доби укріплення. Місцева громада зберігає
              пам'ять про народних героїв і традиції предків.
            </Typography>
            <Button
              variant="contained"
              href="/history"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 2, px: 3, py: 1.25, fontWeight: 600 }}
            >
              Читати повну історію
            </Button>
          </Grid>

          {/* Right: timeline */}
          <Grid item xs={12} md={7}>
            <Stack spacing={0}>
              {milestones.map((m, i) => (
                <Box key={m.period}>
                  <Stack direction="row" spacing={3} py={2}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        minWidth: { xs: 110, sm: 150 },
                        flexShrink: 0,
                        lineHeight: 1.5,
                        pt: 0.15,
                      }}
                    >
                      {m.period}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {m.text}
                    </Typography>
                  </Stack>
                  {i < milestones.length - 1 && (
                    <Divider sx={{ opacity: 0.4 }} />
                  )}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
