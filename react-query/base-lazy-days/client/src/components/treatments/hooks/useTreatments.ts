import type { Treatment } from '@shared/types';

import { axiosInstance } from '@/axiosInstance';
import { queryKeys } from '@/react-query/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// for when we need a query function for useQuery
// axios 인스턴스와 endpoint가 treatments 인 데이터를 가져옴
async function getTreatments(): Promise<Treatment[]> {
    const { data } = await axiosInstance.get('/treatments');
    return data;
}

// 서버에서 treatement 데이터를 가져오기 위한 훅
export function useTreatments(): Treatment[] {
    // 서버에서 데이터를 가져오지 못할 경우
    const fallback: Treatment[] = [];

    // get data from server via useQuery
    const { data = fallback } = useQuery({
        queryKey: [queryKeys.treatments],
        queryFn: getTreatments,
    });
    return data;
}

export function usePrefetchTreatments(): void {
    const queryClient = useQueryClient();
    queryClient.prefetchQuery({
        queryKey: [queryKeys.treatments],
        queryFn: getTreatments,
    });
}
