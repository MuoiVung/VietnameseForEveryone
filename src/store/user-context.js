import { createContext, useState } from "react";

export const UserContext = createContext({
    user: null,
    login: (userId) => { },
    saveUserInfo: (newUser) => { },
    resetUserInfo: () => { },
});

export const UserContextProvider = ({ children }) => {
    // Biến userInfo chứa thông tin user sau khi đăng nhập hoặc đăng ký
    const [userInfo, setUserInfo] = useState(null);

    // Đăng nhập thành công, nhận userId => gửi request lấy thông tin login
    const loginHandler = async (userId) => {
        try {
            const res = await fetch(`https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}/.json`);

            if (!res.ok) {
                throw new Error('Login failed!');
            }

            const userData = await res.json();

            setUserInfo(userData);

        } catch (error) {
            alert(error.message);
        }
    };

    const resetUserInfoHandler = () => {
        setUserInfo(null);
    };

    const saveUserInfoHandler = (newUser) => {
        setUserInfo(newUser);
    };

    const userContextValue = {
        user: userInfo,
        login: loginHandler,
        resetUserInfo: resetUserInfoHandler,
        saveUserInfo: saveUserInfoHandler,
    };

    console.log(userInfo);

    return <UserContext.Provider value={userContextValue}>
        {children}
    </UserContext.Provider>;
};
