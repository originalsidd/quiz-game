import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import MiniProfile from './MiniProfile';

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.drawer}>
            <MiniProfile props={props} />
            <DrawerItemList {...props} style={styles.drawerItem} />
        </DrawerContentScrollView>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
    },
    drawerItem: {
        justifyContent: 'flex-start',
    },
});
