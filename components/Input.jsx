import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { TextInput } from 'react-native-web'
import { hp } from '../helpers/common'

const Input = (props) => {
  return (
    <View style={[styles.container,
        props.containerStyle && props.containerStyle,
        {borderColor: theme.colors.text,
            borderCurve: theme.radius.xxl
        }
    ]}>
        {props.icon && props.icon}
        <TextInput
        style={{flex: 1, color: theme.colors.text}}
        placeholderTextColor={theme.colors.textLight}
         ref={props.inputRef || undefined}
         {...props}
        />
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(7.2),
        borderWidth: 0.4,
        borderRadius: theme.radius.xxl,
        paddingHorizontal: 18,
        borderColor: theme.colors.text,
        borderCurve: 'continuous',
        gap: 12,
    }
})