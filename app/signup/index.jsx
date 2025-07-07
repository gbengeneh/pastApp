import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useRouter } from 'expo-router'
import {hp} from '../../helpers/common'
import { theme } from '../../constants/theme'
import Input from '../../components/Input'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Button from '../../components/Button'
import { FcGoogle } from "react-icons/fc";
import { GrAppleAppStore } from "react-icons/gr";


const index = () => {
          const router = useRouter()
  return (
    <ScreenWrapper bg={'white'}>
      <StatusBar style="dark" />
      <ScrollView keyboardShouldPersistTaps="handled"  contentContainerStyle={{ padding: 20 }}>
         <View style={styles.container}>
            <BackButton router={router} />

          {/* welcome */}
          <View>
            <Text style={styles.welcomeText}>Let's</Text>
            <Text style={styles.welcomeText}>Get started</Text>
          </View>
          {/* form */}
          <View style={styles.form}>
            <Text style={{fontSize: hp(1.9), color: theme.colors.text}}>Kindly input your correct details</Text>
            <Input 
              icon={<AntDesign name="user" size={26} color="black" />}
              placeholder='Full Name'
              onChangeText={()=>{}}
            />
            <Input 
              icon={<Fontisto name="email" size={24} color="black" />}
              placeholder='Your email'
              onChangeText={()=>{}}
            />
             <Input
              icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
              placeholder='Enter your password'
              secureTextEntry
              onChangeText={()=>{}}
            />
            <Input
              icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
              placeholder='Confirm password'
              secureTextEntry
              onChangeText={()=>{}}
            />
            <Button/>
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>or</Text>
            <View style={styles.line} />
          </View>
          {/* Social Login Buttons */}
          <View style={styles.form}>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <FcGoogle />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
              <GrAppleAppStore/>
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={[styles.footerText, { color: theme.colors.primary, fontWeight: theme.fonts.semibold }]}>Login</Text>
            </Pressable>
          </View>
         </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({

})