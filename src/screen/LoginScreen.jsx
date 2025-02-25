import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons'
import { colors } from '../utils/colors'

const LoginScreen = () => {
  const[secureEntry,setsecureEntry]=useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper}>
        <Ionicons name='arrow-back-outline' 
        color={colors.orange}
        size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.InputContainer}>
          <Ionicons name='mail-outline'
          color={colors.orange}
          size={30}
          />
          <TextInput style={styles.TextInput}
          placeholder='Enter Your Email' 
          placeholderTextColor={colors.primary}
          keyboardType='email-address'/>
        </View>
      </View>

      <View style={styles.formContainer}>
      <View style={styles.InputContainer}>
        <Ionicons name="lock-closed" color={colors.orange} size={30} />
        <TextInput 
          style={styles.TextInput}
          placeholder="Enter Your Password" 
          placeholderTextColor={colors.primary}
          secureTextEntry={secureEntry} 
        />

        <TouchableOpacity onPress={()=>{setsecureEntry((prev)=>!prev);}}>
          <SimpleLineIcons name={"eye"} size={20} color={colors.primary}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.LoginButtonWrapper}>
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    padding:20,
  },
  backButtonWrapper:{
    height:40,
    width:40,
    backgroundColor:colors.lightorange,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  },
  textContainer:{
    marginVertical:30,
  },
  headingText:{
    fontSize:50,
    color:colors.orange,
    fontFamily:"sans-serif-bold",
  },
  formContainer:{
    marginTop:20,
  },
  InputContainer:{
    borderWidth:1,
    borderRadius:100,
    borderColor:colors.primary,
    paddingHorizontal:20,
    flexDirection:"row",
    alignItems:"center",
    padding:10,
  },
  TextInput:{
    flex:1,
    paddingHorizontal:10,
    fontFamily:"sans-serif-bold",
    color:colors.orange,
  },
  ForgotPasswordText:{
    textAlign:"right",
    color:colors.orange,
    fontFamily:"sans-serif-bold",
  },
  LoginText:{
    color:colors.white,
    fontSize:20,
    fontFamily:"sans-serif-bold",
    textAlign:"center",
    padding:10,
    
  },
  LoginButtonWrapper:{
    backgroundColor:colors.orange,
    borderRadius:100,
    marginTop:60,
  }
})