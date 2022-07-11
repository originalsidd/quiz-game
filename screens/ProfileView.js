import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import useAuthentication from '../utils/hooks/useAuthentication';
import { signOut, getAuth } from 'firebase/auth';

const auth = getAuth();

const ProfileView = () => {
    const { user } = useAuthentication();
    return (
        <View style={styles.screen}>
            <Text>Hi</Text>
            <Button title='Sign Out' onPress={() => signOut(auth)} />
        </View>
    );
};

export const screenOptions = (navdata) => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName={
                        Platform.OS === 'android' ? 'md-menu' : 'ios-menu'
                    }
                    onPress={() => {
                        navdata.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

export default ProfileView;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
