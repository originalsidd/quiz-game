import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Card from '../components/Card';
import HeaderButton from '../components/HeaderButton';
import CategoryCard from '../components/CategoryCard';
import { SUBJECTS } from '../data/dummy-data';
import { COLORS } from '../data/dummy-data';

import Colors from '../constants/Colors';

const QuizCategory = (props) => {
    return (
        <ScrollView
            style={{ ...styles.screen, backgroundColor: Colors.primary }}
        >
            <View style={styles.row}>
                {SUBJECTS.map((item, index) => (
                    <CategoryCard
                        key={index}
                        item={item}
                        index={index}
                        navigation={props.navigation}
                        route={props.route}
                        color={COLORS[index]}
                    />
                ))}
            </View>
        </ScrollView>
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

export default QuizCategory;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#202c36',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
