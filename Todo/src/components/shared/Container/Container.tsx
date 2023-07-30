import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { styles } from './Container.styles';

type Props = {
    children: ReactElement
}

const Container = ({ children }: Props) => {
    return <View style={styles.container}>{children}</View>
};

export default Container;
