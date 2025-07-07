import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../constants/theme'
import { ThemeContext } from '@/contexts/ThemeContext'

const BackButton = ({size=26, router}) => {
  const {currentTheme} = useContext(ThemeContext)

  return (
    <Pressable onPress={()=> router.back()} style={styles.button}>
       <Ionicons name="chevron-back" size={24} color="black" />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0,0,0,0.07)'
    }
})