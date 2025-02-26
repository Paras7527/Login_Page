import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons'
import { colors } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const navigation=useNavigation();
  const[secureEntry,setsecureEntry]=useState(true);

  const handleGoBack=()=>{
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name='arrow-back-outline' 
        color={colors.orange}
        size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's,Get</Text>
        <Text style={styles.headingText}>Started</Text>
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
        <ImageBackground source={require("../assets/image.png")} style={styles.background} 
      imageStyle={{opacity:0.3}}/>
        <View style={styles.InputPhoneContainer}>
          <Ionicons name='screen-smartphone'
          color={colors.orange}
          size={30}
          />
          <TextInput style={styles.TextInput}
          placeholder='Enter Your Phone Number' 
          placeholderTextColor={colors.primary}
          keyboardType='number-pad'/>
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
      <TouchableOpacity style={styles.LoginButtonWrapper}>
        <Text style={styles.LoginText}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.continueText}>or continue with</Text>
      <TouchableOpacity style={styles.googleButton}>
      <Image 
        source={require("../assets/Google.png")} style={styles.googleimage} 
      />
      <Text style={styles.GoogleText}>Google</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
      <Text style={styles.accountText}>Already have an account?</Text>
      <Text style={styles.signupText}>Login</Text>
      </View>
    </View>
``
    </View>
    
  )
}

export default SignUpScreen

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
  },
  continueText:{
    textAlign:"center",
    marginVertical:15,
    fontSize:15,
    fontFamily:"sans-serif-bold",
    color:colors.primary
  },
  googleimage:{
    height:20,
    width:19,
  },
  googleButton:{
    flexDirection:"row",
    borderWidth:2,
    borderColor:colors.primary,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    gap:10
  },
  GoogleText:{
    fontSize:20,
    fontFamily:"sans-serif-bold",
  },
  footerContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:30,
    gap:4
  },
  accountText:{
    color:colors.primary,
    fontFamily:"sans-serif-bold",
  },
  signupText:{
    color:colors.primary,
    fontWeight:800,
    fontFamily:"sans-serif-bold",
  },
  InputPhoneContainer:{
    borderWidth:1,
    borderRadius:100,
    borderColor:colors.primary,
    paddingHorizontal:20,
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    marginTop:19,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:250,
  },
})