import React, { ReactElement } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './Container.styles';

type Props = {
    children: ReactElement
}

const Container = ({ children }: Props) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>{children}</View>
        </SafeAreaView>
    )
};

export default Container;
