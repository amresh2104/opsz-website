'use client';
import React from 'react';
import { Container } from '@mui/material';
import Section1 from '../Components/Company/Section1';
import Section2 from '../Components/Company/Section2';

const CompanyPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Section1 />
      <Section2 />
    </Container>
  );
};

export default CompanyPage;
