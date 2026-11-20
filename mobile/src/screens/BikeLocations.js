import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const BikeLocations = () => {
  	
  	return (
    		<View style={styles.bikeLocations}>
      			<View style={styles.logInWrapper}>
        				<Text style={[styles.logIn, styles.logTypo]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
      			<View style={styles.logInWrapper}>
        				<Pressable style={styles.image5} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Image style={[styles.image6Icon, styles.image7Position]} resizeMode="cover" />
        				<Pressable style={[styles.image7, styles.image7Position]} onPress={()=>{}}>
          					<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={styles.image8} onPress={()=>{}}>
          					<Image style={[styles.icon3, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Text style={[styles.logIn2, styles.logTypo]}>          {'\n'}                 {'\n'}    {'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
      			<Text style={[styles.mapWithBike, styles.text4Typo]}>{`{map with Bike Locations pinned}`}</Text>
      			<View style={[styles.rectangleParent, styles.rectangleParentBorder]}>
        				<Image style={styles.frameChild} resizeMode="cover" />
        				<Text style={styles.searchForA}>Search for a route, stop, or location...</Text>
      			</View>
      			<Pressable style={[styles.bikeLocationsFromContainer, styles.nearbyStopsPosition]} onPress={()=>{}}>
        				<Text style={styles.text}>
          					<Text style={styles.bikeLocations2}>
            						<Text style={styles.text2}>{'\n'}{'\n'}</Text>
            						<Text style={styles.nearbyStopsTypo}> ←   Bike Locations{'\n'}</Text>
          					</Text>
          					<Text style={styles.fromCurrentLocation}>
            						<Text style={styles.text2}>{`          `}</Text>
            						<Text style={styles.nearbyStopsTypo}>From</Text>
            						<Text style={styles.text2}>{`: Current Location\n          `}</Text>
            						<Text style={styles.to}>To</Text>
            						<Text style={styles.text2}>{`: Closest Bicycle Location\n     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<Image style={styles.bikeLocationsChild} resizeMode="cover" />
      			<Text style={[styles.text4, styles.text4Typo]}>76°</Text>
      			<Text style={[styles.cloudy, styles.text4Typo]}>Cloudy ☁️</Text>
      			<Pressable style={[styles.nearbyStopsWrapper, styles.rectangleParentBorder]} onPress={()=>{}}>
        				<Text style={[styles.nearbyStops, styles.nearbyStopsTypo]}>Nearby Stops</Text>
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	logTypo: {
    		width: 402,
    		textAlign: "left",
    		color: "#2c4262",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		height: 96,
    		position: "absolute"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	image7Position: {
    		top: -6,
    		position: "absolute"
  	},
  	text4Typo: {
    		color: "#000",
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	rectangleParentBorder: {
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	nearbyStopsPosition: {
    		top: 8,
    		position: "absolute"
  	},
  	nearbyStopsTypo: {
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	bikeLocations: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		overflow: "hidden",
    		width: "100%"
  	},
  	logInWrapper: {
    		top: 784,
    		backgroundColor: "#fff",
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		height: 96,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		width: 409,
    		left: -7,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	logIn: {
    		left: 17,
    		top: 0
  	},
  	image5: {
    		left: 38,
    		width: 51,
    		height: 51,
    		top: 0,
    		position: "absolute"
  	},
  	icon: {
    		nodeWidth: 51,
    		nodeHeight: 51
  	},
  	image6Icon: {
    		left: 117,
    		width: 64,
    		height: 64
  	},
  	image7: {
    		left: 209,
    		width: 74,
    		height: 66
  	},
  	icon2: {
    		nodeWidth: 74,
    		nodeHeight: 66
  	},
  	image8: {
    		left: 316,
    		top: 5,
    		width: 55,
    		height: 55,
    		position: "absolute"
  	},
  	icon3: {
    		nodeWidth: 55,
    		nodeHeight: 55
  	},
  	logIn2: {
    		top: -62,
    		left: 11
  	},
  	mapWithBike: {
    		top: 391,
    		left: 12,
    		fontSize: 24
  	},
  	rectangleParent: {
    		top: -40,
    		backgroundColor: "#2c4262",
    		width: 415,
    		height: 272,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		left: -7
  	},
  	frameChild: {
    		top: 199,
    		left: 19,
    		borderRadius: 30,
    		width: 355,
    		height: 42,
    		position: "absolute"
  	},
  	searchForA: {
    		top: 210,
    		left: 35,
    		fontSize: 16,
    		color: "#4f6267",
    		width: 346,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	bikeLocationsFromContainer: {
    		left: 1
  	},
  	text: {
    		color: "#cbeaf3",
    		width: 378,
    		height: 149,
    		textAlign: "left"
  	},
  	bikeLocations2: {
    		fontSize: 24
  	},
  	text2: {
    		fontFamily: "Inter-Regular"
  	},
  	fromCurrentLocation: {
    		fontSize: 20
  	},
  	to: {
    		fontWeight: "800",
    		fontFamily: "Inter-ExtraBold"
  	},
  	bikeLocationsChild: {
    		top: 246,
    		left: 16,
    		width: 56,
    		height: 56,
    		position: "absolute"
  	},
  	text4: {
    		top: 257,
    		left: 31,
    		width: 36,
    		height: 27,
    		fontSize: 20
  	},
  	cloudy: {
    		top: 280,
    		left: 25,
    		fontSize: 8
  	},
  	nearbyStopsWrapper: {
    		top: 739,
    		backgroundColor: "#d3f2ca",
    		height: 50,
    		left: 1,
    		width: 409,
    		borderColor: "rgba(3, 31, 56, 0.1)"
  	},
  	nearbyStops: {
    		left: 125,
    		width: 179,
    		height: 34,
    		top: 8,
    		position: "absolute",
    		textAlign: "left",
    		color: "#2c4262",
    		fontWeight: "700",
    		fontSize: 24
  	}
});

export default BikeLocations;
