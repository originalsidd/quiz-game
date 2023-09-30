import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import useAuthentication from '../utils/hooks/useAuthentication';

const MiniProfile = () => {
    const { user } = useAuthentication();
    console.log(user);
    return (
        <View style={styles.screen}>
            <Image
                source={{
                    uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{user?.email}</Text>
                <Text style={styles.detail}>Profile Info</Text>
            </View>
        </View>
    );
};

export default MiniProfile;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderTopColor: Colors.accent,
        borderBottomColor: Colors.primary,
        borderRadius: 20,
        marginBottom: 20,
    },
    image: {
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    info: {},
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    detail: {
        textAlign: 'left',
    },
});
