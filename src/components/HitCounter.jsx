import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchHitCount = async () => {
  // This is a placeholder. In a real app, you'd call your backend API here.
  const response = await fetch('https://api.countapi.xyz/hit/bill-splitter-artist/visits');
  const data = await response.json();
  return data.value;
};

const HitCounter = () => {
  const { data: hitCount, isLoading, isError } = useQuery({
    queryKey: ['hitCount'],
    queryFn: fetchHitCount,
    refetchOnWindowFocus: false,
  });

  if (isLoading || isError) return null;

  return (
    <div className="text-xs text-white/50 absolute bottom-2 right-2">
      Visits: {hitCount}
    </div>
  );
};

export default HitCounter;