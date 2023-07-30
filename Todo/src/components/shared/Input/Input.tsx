import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './Input.styles';

type Props = {
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

const Input = ({ placeholder, value, onChange }: Props) => {
    return <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
    />
};

export default Input;
