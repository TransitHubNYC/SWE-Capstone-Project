import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";

const Route = () => {
  	
  	return (
    		<View style={styles.route}>
      			<View style={styles.routeChild} />
      			<View style={[styles.trainRoutesWrapper, styles.routesWrapperLayout]}>
        				<Text style={styles.trainRoutes}>{`{train routes}`}</Text>
      			</View>
      			<View style={[styles.busRoutesWrapper, styles.routesWrapperBorder]}>
        				<Text style={styles.busRoutes}>{`{bus routes}`}</Text>
      			</View>
      			<View style={[styles.bikeRoutesWrapper, styles.routesWrapperLayout]}>
        				<Text style={[styles.bikeRoutes, styles.routesTypo]}>{`{bike routes}`}</Text>
      			</View>
      			<View style={[styles.logInWrapper, styles.logInWrapperLayout]}>
        				<Text style={[styles.logIn, styles.logLayout]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
      			<View style={[styles.walkingRoutesWrapper, styles.routesWrapperBorder]}>
        				<Text style={[styles.walkingRoutes, styles.routesTypo]}>{`{walking routes}`}</Text>
      			</View>
      			<Pressable style={styles.tripResultsFromContainer} onPress={()=>{}}>
        				<Text style={styles.text}>
          					<Text style={styles.text2}>
            						<Text style={styles.text3}>{`←   `}</Text>
          					</Text>
          					<Text style={styles.tripResultsFromCu}>
            						<Text style={styles.text2}>Trip Results{'\n'}</Text>
            						<Text style={styles.fromCurrentLocation}>         From: Current Location{'\n'}         To: Times Square, Manhattan{'\n'}</Text>
          					</Text>
          					<Text style={styles.fromCurrentLocation}>
            						<Text style={styles.text3}>{`\n\n   \n     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<View style={[styles.image5Parent, styles.logInWrapperLayout]}>
        				<Pressable style={styles.image5} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Image style={[styles.image6Icon, styles.iconPosition]} resizeMode="cover" />
        				<Image style={[styles.image7Icon, styles.iconPosition]} resizeMode="cover" />
        				<Image style={styles.image8Icon} resizeMode="cover" />
        				<Text style={[styles.logIn2, styles.logLayout]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
      			<View style={[styles.image5Parent, styles.logInWrapperLayout]}>
        				<Image style={styles.image5} resizeMode="cover" />
        				<Image style={[styles.image6Icon, styles.iconPosition]} resizeMode="cover" />
        				<Pressable style={[styles.image7Icon, styles.iconPosition]} onPress={()=>{}}>
          					<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={styles.image8Icon} onPress={()=>{}}>
          					<Image style={[styles.icon3, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Text style={[styles.logIn3, styles.logLayout]}>
          					<Text style={styles.text2}>{`          \n                 \n    `}</Text>
          					<Text style={styles.home}>Home          Map            Tickets           More{'\n'}</Text>
          					<Text style={styles.text2}>                 {'\n'}   Home    Map    Tickets     More</Text>
        				</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	routesWrapperLayout: {
    		height: 121,
    		width: 350,
    		backgroundColor: "#fff",
    		borderRadius: 30,
    		left: 26,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	routesWrapperBorder: {
    		left: 25,
    		width: 350,
    		backgroundColor: "#fff",
    		borderRadius: 30,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	routesTypo: {
    		width: 266,
    		height: 35,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		position: "absolute"
  	},
  	logInWrapperLayout: {
    		height: 96,
    		width: 409,
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		left: -4,
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	logLayout: {
    		width: 402,
    		color: "#2c4262",
    		height: 96,
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	iconPosition: {
    		top: -6,
    		position: "absolute"
  	},
  	route: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		overflow: "hidden",
    		width: "100%"
  	},
  	routeChild: {
    		left: -2,
    		backgroundColor: "#2c4262",
    		width: 406,
    		height: 167,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		top: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	trainRoutesWrapper: {
    		top: 199
  	},
  	trainRoutes: {
    		top: 44,
    		left: 101,
    		width: 265,
    		height: 41,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		position: "absolute"
  	},
  	busRoutesWrapper: {
    		top: 339,
    		height: 125
  	},
  	busRoutes: {
    		top: 45,
    		left: 106,
    		width: 225,
    		height: 35,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter-Regular",
    		fontSize: 24,
    		position: "absolute"
  	},
  	bikeRoutesWrapper: {
    		top: 483
  	},
  	bikeRoutes: {
    		top: 43,
    		left: 105
  	},
  	logInWrapper: {
    		top: 780
  	},
  	logIn: {
    		top: 6,
    		left: 15,
    		width: 402,
    		color: "#2c4262",
    		fontSize: 24
  	},
  	walkingRoutesWrapper: {
    		top: 623,
    		height: 108
  	},
  	walkingRoutes: {
    		top: 36,
    		left: 84
  	},
  	tripResultsFromContainer: {
    		left: 12,
    		top: 87,
    		position: "absolute"
  	},
  	text: {
    		color: "#cbeaf3",
    		width: 380,
    		height: 80,
    		textAlign: "left"
  	},
  	text2: {
    		fontSize: 24
  	},
  	text3: {
    		fontFamily: "Inter-Regular"
  	},
  	tripResultsFromCu: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold"
  	},
  	fromCurrentLocation: {
    		fontSize: 20
  	},
  	image5Parent: {
    		top: 778
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
  	image7Icon: {
    		left: 209,
    		width: 74,
    		height: 66
  	},
  	image8Icon: {
    		top: 5,
    		left: 316,
    		width: 55,
    		height: 55,
    		position: "absolute"
  	},
  	logIn2: {
    		top: 3,
    		left: 14,
    		fontSize: 24
  	},
  	icon2: {
    		nodeWidth: 74,
    		nodeHeight: 66
  	},
  	icon3: {
    		nodeWidth: 55,
    		nodeHeight: 55
  	},
  	logIn3: {
    		top: -18,
    		left: 15,
    		width: 402,
    		color: "#2c4262"
  	},
  	home: {
    		fontSize: 16
  	}
});

export default Route;
