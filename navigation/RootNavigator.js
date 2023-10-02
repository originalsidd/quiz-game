import React from 'react';
import useAuthentication from '../utils/hooks/useAuthentication';

import { AppNavigator, AuthNavigator } from './Navigators';

export const AuthContext = React.createContext(null);
const RootNavigator = () => {
    const { user } = useAuthentication();

    return user ? (
        <AuthContext.Provider value={user}>
            <AppNavigator />
        </AuthContext.Provider>
    ) : (
        <AuthNavigator />
    );
};

export default RootNavigator;
