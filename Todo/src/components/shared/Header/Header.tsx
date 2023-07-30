import React from 'react';
import { Text } from 'react-native';
import { styles } from './Header.styles';

type Props = {
    title: string
}

const Header = ({ title }: Props) => {
    return <Text style={styles.header}>{title}</Text>
};

export default Header;
