import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Button.styles';

type Props = {
    title: string;
    onPress: () => void;
}

const Button = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => onPress()}>
            <Text style={styles.addButtonText}>{title}</Text>
        </TouchableOpacity>
    )
};

export default Button;
