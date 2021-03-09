import React from 'react';
import {Text } from 'react-native';

export default function Nunito({title, size, color, type = 'Regular', style,decoration,textAlign}) {
  return (
    <Text
      style={{
        textAlign,
        color,
        fontSize: size,
        fontFamily: `Nunito-${type}`,
        textDecorationLine:decoration,
        ...style,
      }}>
      {title}
    </Text>
  );
}