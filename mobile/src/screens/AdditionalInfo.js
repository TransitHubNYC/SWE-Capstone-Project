import * as React from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";

const AdditionalInfo = () => {
  	
  	return (
    		<View style={styles.additionalInfo}>
      			<Pressable style={[styles.bikeLocationsWrapper, styles.wrapperLayout1]} onPress={()=>{}}>
        				<Text style={[styles.bikeLocations, styles.bikeLocationsTypo]}>Bike Locations</Text>
      			</Pressable>
      			<Pressable style={[styles.weatherWrapper, styles.wrapperLayout1]} onPress={()=>{}}>
        				<Text style={[styles.weather, styles.weatherPosition]}>Weather</Text>
      			</Pressable>
      			<Pressable style={[styles.carbonFootprintWrapper, styles.wrapperLayout1]} onPress={()=>{}}>
        				<Text style={[styles.carbonFootprint, styles.bikeLocationsTypo]}>Carbon Footprint</Text>
      			</Pressable>
      			<Pressable style={[styles.emergencyContactsWrapper, styles.wrapperLayout]} onPress={()=>{}}>
        				<Text style={[styles.emergencyContacts, styles.weatherPosition]}>Emergency Contacts</Text>
      			</Pressable>
      			<View style={[styles.tutorialGuideWrapper, styles.wrapperLayout]}>
        				<Text style={[styles.emergencyContacts, styles.weatherPosition]}>{`Tutorial & Guide`}</Text>
      			</View>
      			<View style={styles.additionalInfoChild} />
      			<Pressable style={styles.more} onPress={()=>{}}>
        				<Text style={styles.text}>
          					<Text style={styles.more2}>
            						<Text style={styles.more3}>←   More {'\n'}</Text>
            						<Text style={styles.blankLine}>{' '}</Text>
          					</Text>
          					<Text style={styles.blankLine}>
            						<Text style={styles.text3}>{`     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<Pressable style={[styles.tripHistory, styles.wrapperLayout]} onPress={()=>{}}>
        				<Text style={[styles.emergencyContacts, styles.weatherPosition]}>Trip History</Text>
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	wrapperLayout1: {
    		height: 61,
    		width: 356,
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		left: 14,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	bikeLocationsTypo: {
    		height: 33,
    		color: "#2c4262",
    		top: 14,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		position: "absolute"
  	},
  	weatherPosition: {
    		left: 24,
    		height: 33,
    		textAlign: "left",
    		color: "#2c4262",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		top: 14,
    		position: "absolute"
  	},
  	wrapperLayout: {
    		left: 19,
    		height: 61,
    		width: 356,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		backgroundColor: "#fff",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	additionalInfo: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		width: "100%",
    		overflow: "hidden"
  	},
  	bikeLocationsWrapper: {
    		top: 221
  	},
  	bikeLocations: {
    		left: 13,
    		width: 170
  	},
  	weatherWrapper: {
    		top: 313
  	},
  	weather: {
    		width: 170
  	},
  	carbonFootprintWrapper: {
    		top: 395
  	},
  	carbonFootprint: {
    		left: 27,
    		width: 251
  	},
  	emergencyContactsWrapper: {
    		top: 487
  	},
  	emergencyContacts: {
    		width: 332
  	},
  	tutorialGuideWrapper: {
    		top: 579
  	},
  	additionalInfoChild: {
    		top: -3,
    		left: -57,
    		backgroundColor: "#2c4262",
    		width: 471,
    		height: 134,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	more: {
    		top: 86,
    		left: 14,
    		position: "absolute"
  	},
  	text: {
    		color: "#cbeaf3",
    		height: 123,
    		textAlign: "left",
    		width: 356
  	},
  	more2: {
    		fontSize: 24
  	},
  	more3: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold"
  	},
  	blankLine: {
    		fontFamily: "Inter-Regular"
  	},
  	text3: {
    		fontSize: 20
  	},
  	tripHistory: {
    		top: 671
  	}
});

export default AdditionalInfo;
