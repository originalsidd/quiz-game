import React from 'react';
import useAuthentication from '../utils/hooks/useAuthentication';

import { AppNavigator, AuthNavigator } from './Navigators';

const RootNavigator = () => {
    const { user } = useAuthentication();

    return user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
