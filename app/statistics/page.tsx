import React from 'react'
import StatsContainer from '@/components/admin/StatsContainer';
import { StatsLoadingContainer } from '@/components/statistics/Loading';
import { Suspense } from 'react';
import ChartsContainer from '@/components/statistics/ChartsContainer';
import { ChartsLoadingContainer } from '@/components/statistics/Loading';

const StatsPage = () => {
    return (
        <>
            <Suspense fallback={<StatsLoadingContainer />}>
                <StatsContainer />
            </Suspense>
            <Suspense fallback={<ChartsLoadingContainer />}>
                <ChartsContainer />
            </Suspense>
        </>
    )
}

export default StatsPage