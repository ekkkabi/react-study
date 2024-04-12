import { useState } from 'react';

import type { Staff } from '@shared/types';

import { filterByTreatment } from '../utils';

import { axiosInstance } from '@/axiosInstance';
import { queryKeys } from '@/react-query/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// query function for useQuery
async function getStaff(): Promise<Staff[]> {
    const { data } = await axiosInstance.get('/staff');
    return data;
}

export function useStaff() {
    const fallback: Staff[] = [];

    const { data: staff = fallback } = useQuery({
        queryKey: [queryKeys.staff],
        queryFn: getStaff,
    });

    // for filtering staff by treatment
    const [filter, setFilter] = useState('all');

    return { staff, filter, setFilter };
}

export function usePrefetchTreatments(): void {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery({
        queryKey: [queryKeys.staff],
        queryFn: getStaff,
    });
}
