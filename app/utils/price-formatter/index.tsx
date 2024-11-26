'use client'

import { PriceType } from '@/app/types';
import React from 'react';

interface PriceFormatterProps {
  value: PriceType | undefined;
  className: string;
  title?: string;
}

export const PriceFormatter: React.FC<PriceFormatterProps> = ({ value, className, title }) => {
  const formatNumber = (num: number | undefined): string | undefined => {
    return num?.toLocaleString('es-ES');
  };

  return (
    <>
      <p className={className}>{title && title} {formatNumber(value?.price)} {value?.currency}</p>
    </>
  );
};

export default PriceFormatter;