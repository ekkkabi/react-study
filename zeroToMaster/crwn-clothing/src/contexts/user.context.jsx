import { createContext, useEffect, useState } from 'react';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListner,
} from '../utils/firebase/firebase.utils';

// 사용자 정보 저장
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// 자식 컴포넌트들에게 사용자 정보 제공
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // 사용자 로그인 상태 변화 감지
    // 변경시, 사용자 정보 업데이트
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
