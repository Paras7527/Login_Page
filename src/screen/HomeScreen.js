import { StyleSheet, Image, View,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation=useNavigation();

    const handleLogin=()=>{
        navigation.navigate("LOGIN");
    };
    const handleSignUp=()=>{
        navigation.navigate("SIGNUP");
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.finance}/>
      <Text style={styles.title}>Grow money, not debt</Text>
      <Text style={styles.subtitle}>Do not save what is left after spending, but spend what is left after saving."</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper,{backgroundColor:colors.orange}]}
        onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signupButtonWrapper]} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        alignItems:"center",
    },
    finance:{
        height:250,
        width:400,
        marginTop:150,
    },
    title:{
        fontSize:36,
        fontFamily:'sans-serif-medium',
        color:colors.orange,
        paddingHorizontal:20,
        textAlign:"center",
        marginTop:20,
    },
    subtitle:{
        textAlign:"center",
        fontSize:20,
        paddingHorizontal:20,
        fontFamily:'sans-serif-Thin',
        marginTop:20,
        color:colors.primary,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 80,
        borderWidth: 3, // Single border for both buttons
        borderColor: colors.orange,
        width: "70%",
        height: 50, // Ensures proper height
        borderRadius: 100,
        overflow: "hidden",
        alignSelf: "center", 
    },
    loginButtonWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 2, // Creates a clear divider
        borderRightColor: colors.orange,
        backgroundColor: colors.orange,
        height: "100%",
    },
    signupButtonWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    height: "100%",
    },
    loginButtonText:{
        fontSize: 18,
        fontFamily: "sans-serif-medium",
        color: "white",
        textAlign: "center",
    },
    signupButtonText:{
        fontSize: 18,
        fontFamily: "sans-serif-medium",
        color: colors.orange,
        textAlign: "center",
    }
})