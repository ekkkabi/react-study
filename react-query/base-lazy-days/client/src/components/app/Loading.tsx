import { Spinner, Text } from '@chakra-ui/react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

export function Loading() {
    // 현재 가져오는 쿼리가 있는지 여부에 따라
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const display = isFetching || isMutating ? 'inherit' : 'none';

    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="olive.200"
            color="olive.800"
            role="status"
            position="fixed"
            zIndex="9999"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display={display}
        >
            <Text display="none">Loading...</Text>
        </Spinner>
    );
}
