'use client'

import { PriceType } from '@/app/types';
import React, { useState } from 'react';

interface PriceFormatterProps {
  value: PriceType;
  className: string;
  title?: string;
}

export const PriceFormatter: React.FC<PriceFormatterProps> = ({ value, className, title }) => {
  const formatNumber = (num: number): string => {
    return num.toLocaleString('es-ES');
  };

  return (
    <>
      <p className={className}>{title && title} {formatNumber(value.price)} {value.currency}</p>
    </>
  );
};

export default PriceFormatter;