import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image} from "react-native";

const LogIn = () => {
  	
  	return (
    		<View style={styles.logIn}>
      			<View style={styles.content}>
        				<View style={styles.emailField}>
          					<Text style={[styles.email, styles.emailTypo]}>Email</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.nameexamplecom, styles.emailTypo]}>name@example.com</Text>
          					</View>
        				</View>
        				<View style={styles.emailField}>
          					<Text style={[styles.email, styles.emailTypo]}>Password</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.nameexamplecom, styles.emailTypo]}>Enter your password</Text>
          					</View>
        				</View>
        				<Pressable style={[styles.logInButton, styles.inputBorder]} onPress={()=>{}}>
          					<Text style={[styles.logIn2, styles.emailTypo]}>Log In</Text>
        				</Pressable>
        				<Text style={[styles.forgotPassword, styles.textTypo]}>Forgot password?</Text>
          					<Pressable onPress={()=>{}}>
            						<Text style={styles.textTypo}>
              							<Text style={styles.newHere}>{`New here? `}</Text>
              							<Text style={styles.createAnAccount}>Create an account</Text>
            						</Text>
          					</Pressable>
          					</View>
          					<Image style={styles.image9Icon} resizeMode="cover" />
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
          					emailTypo: {
            						textAlign: "left",
            						fontFamily: "Inter-Regular"
          					},
          					inputBorder: {
            						alignItems: "center",
            						flexDirection: "row",
            						borderWidth: 1,
            						borderColor: "#031f38",
            						borderStyle: "solid",
            						borderRadius: 2,
            						alignSelf: "stretch",
            						overflow: "hidden"
          					},
          					textTypo: {
            						textAlign: "center",
            						fontSize: 18,
            						color: "#2c4262",
            						width: 374
          					},
          					logIn: {
            						height: 874,
            						backgroundColor: "#cbeaf3",
            						width: "100%",
            						overflow: "hidden"
          					},
          					content: {
            						top: 245,
            						left: 14,
            						gap: 18,
            						alignItems: "flex-start",
            						width: 374,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					emailField: {
            						gap: 6,
            						alignSelf: "stretch",
            						alignItems: "flex-start",
            						overflow: "hidden"
          					},
          					email: {
            						alignSelf: "flex-start",
            						fontSize: 16,
            						color: "#2c4262",
            						textAlign: "left"
          					},
          					input: {
            						backgroundColor: "#fff",
            						paddingHorizontal: 14,
            						paddingVertical: 12
          					},
          					nameexamplecom: {
            						fontSize: 20,
            						color: "rgba(44, 66, 98, 0.55)"
          					},
          					logInButton: {
            						backgroundColor: "#2c4262",
            						justifyContent: "center",
            						paddingHorizontal: 0,
            						paddingVertical: 15
          					},
          					logIn2: {
            						fontSize: 24,
            						color: "#fff"
          					},
          					forgotPassword: {
            						fontFamily: "Inter-Regular"
          					},
          					newHere: {
            						fontFamily: "Inter-Regular"
          					},
          					createAnAccount: {
            						fontWeight: "800",
            						fontFamily: "Inter-ExtraBold"
          					},
          					image9Icon: {
            						top: 81,
            						left: 81,
            						width: 241,
            						height: 241,
            						position: "absolute"
          					}
        				});
        				
        				export default LogIn;
        				