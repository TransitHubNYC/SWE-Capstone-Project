import * as React from "react";
import {Text, StyleSheet, View, Pressable, Image} from "react-native";

const SignUp = () => {
  	
  	return (
    		<View style={styles.signUp}>
      			<View style={styles.content}>
        				<View style={styles.fullNameField}>
          					<Text style={[styles.fullName, styles.signUp2Typo]}>Full name</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.janeRider, styles.signUp2Typo]}>Jane Rider</Text>
          					</View>
        				</View>
        				<View style={styles.fullNameField}>
          					<Text style={[styles.fullName, styles.signUp2Typo]}>Email</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.janeRider, styles.signUp2Typo]}>name@example.com</Text>
          					</View>
        				</View>
        				<View style={styles.fullNameField}>
          					<Text style={[styles.fullName, styles.signUp2Typo]}>Password</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.janeRider, styles.signUp2Typo]}>At least 8 characters</Text>
          					</View>
        				</View>
        				<View style={styles.fullNameField}>
          					<Text style={[styles.fullName, styles.signUp2Typo]}>Confirm password</Text>
          					<View style={[styles.input, styles.inputBorder]}>
            						<Text style={[styles.janeRider, styles.signUp2Typo]}>Re-enter password</Text>
          					</View>
        				</View>
        				<Pressable style={[styles.signUpButton, styles.inputBorder]} onPress={()=>{}}>
          					<Text style={[styles.signUp2, styles.signUp2Typo]}>Sign Up</Text>
        				</Pressable>
        				<Pressable onPress={()=>{}}>
          					<Text style={styles.text}>
            						<Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
            						<Text style={styles.logIn}>Log in</Text>
          					</Text>
        				</Pressable>
      			</View>
      			<Image style={styles.image10Icon} resizeMode="cover" />
    		</View>);
};

const styles = StyleSheet.create({
  	signUp2Typo: {
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
  	signUp: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		width: "100%",
    		overflow: "hidden"
  	},
  	content: {
    		top: 127,
    		left: 14,
    		gap: 18,
    		alignItems: "flex-start",
    		width: 374,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	fullNameField: {
    		gap: 6,
    		alignSelf: "stretch",
    		alignItems: "flex-start",
    		overflow: "hidden"
  	},
  	fullName: {
    		alignSelf: "flex-start",
    		fontSize: 16,
    		color: "#2c4262"
  	},
  	input: {
    		backgroundColor: "#fff",
    		paddingHorizontal: 14,
    		paddingVertical: 12
  	},
  	janeRider: {
    		fontSize: 20,
    		color: "rgba(44, 66, 98, 0.55)"
  	},
  	signUpButton: {
    		backgroundColor: "#2c4262",
    		justifyContent: "center",
    		paddingHorizontal: 0,
    		paddingVertical: 15
  	},
  	signUp2: {
    		fontSize: 24,
    		color: "#fff"
  	},
  	text: {
    		fontSize: 18,
    		textAlign: "center",
    		color: "#2c4262",
    		width: 374
  	},
  	alreadyHaveAn: {
    		fontFamily: "Inter-Regular"
  	},
  	logIn: {
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold"
  	},
  	image10Icon: {
    		top: 665,
    		left: 116,
    		width: 170,
    		height: 170,
    		position: "absolute"
  	}
});

export default SignUp;
