import React from 'react';
import styles from './styles';
import { Text } from 'react-native';
import { sizes } from '../../utils/theme';

interface Props {
    text: string;
    fontSize?: number;
    isBold?: boolean;
    textAlign?: 'center' | 'left' | 'right' | 'justify';
    paddingHorizontal?: number;
    paddingVertical?: number;
    color?: string;
    numberOfLines?: number;
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
}

export function Title({
    text,
    fontSize = sizes.title,
    isBold,
    textAlign = 'left',
    paddingHorizontal = 0,
    paddingVertical = 0,
    color = '#000',
    numberOfLines = 2,
    textDecorationLine = 'none',
}: Props) {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[
                styles.title,
                {
                    fontSize: fontSize,
                    textAlign: textAlign,
                    paddingHorizontal: paddingHorizontal,
                    paddingVertical: paddingVertical,
                    color: color,
                    textDecorationLine: textDecorationLine,
                },
            ]}
        >
            {text}
        </Text>
    );
}

export function SubTitle({
    text,
    fontSize = sizes.subTitle,
    isBold = false,
    textAlign = 'left',
    color = '#000',
    paddingHorizontal = 0,
    paddingVertical = 0,
    numberOfLines = 2,
    textDecorationLine = 'none',
}: Props) {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[
                styles.title,
                {
                    fontSize: fontSize,
                    textAlign: textAlign,
                    paddingHorizontal: paddingHorizontal,
                    paddingVertical: paddingVertical,
                    color: color,
                    textDecorationLine: textDecorationLine,
                },
            ]}
        >
            {text}
        </Text>
    );
}
