import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";

const TripPlanner = () => {
  	
  	return (
    		<View style={styles.tripPlanner}>
      			<View style={[styles.tripPlannerChild, styles.tripLayout]} />
      			<Text style={[styles.from, styles.toTypo]}>From:</Text>
      			<Pressable style={[styles.searchWrapper, styles.logInParentBorder]} onPress={()=>{}}>
        				<Text style={[styles.search, styles.searchTypo]}>Search</Text>
      			</Pressable>
      			<View style={[styles.tripPlannerItem, styles.tripLayout]} />
      			<Pressable style={styles.planATripContainer} onPress={()=>{}}>
        				<Text style={[styles.text, styles.textClr]}>
          					<Text style={styles.planATrip}>
            						<Text style={styles.searchTypo}>←   Plan a Trip{'\n'}</Text>
            						<Text style={styles.blankLine}>{' '}</Text>
          					</Text>
          					<Text style={styles.blankLine}>
            						<Text style={styles.text3}>{`     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<Pressable style={styles.planATripContainer} onPress={()=>{}}>
        				<Text style={[styles.text, styles.textClr]}>
          					<Text style={styles.planATrip}>
            						<Text style={styles.searchTypo}>←   Plan a Trip{'\n'}</Text>
            						<Text style={styles.blankLine}>{' '}</Text>
          					</Text>
          					<Text style={styles.blankLine}>
            						<Text style={styles.text3}>{`     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<View style={[styles.frameParent, styles.parentLayout]}>
        				<View style={[styles.recentSearchesWrapper, styles.image5Position]}>
          					<Text style={[styles.recentSearches, styles.textClr]}>Recent Searches</Text>
        				</View>
        				<Text style={[styles.pastTripssearches, styles.toTypo]}>{`{past trips/searches}`}</Text>
      			</View>
      			<View style={[styles.logInParent, styles.logLayout]}>
        				<Text style={[styles.logIn, styles.logTypo]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
        				<View style={[styles.image5Parent, styles.image5Position]}>
          					<Pressable style={[styles.image5, styles.image5Position]} onPress={()=>{}}>
            						<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
          					</Pressable>
          					<Image style={[styles.image6Icon, styles.image7Position]} resizeMode="cover" />
          					<Pressable style={[styles.image7, styles.image7Position]} onPress={()=>{}}>
            						<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
          					</Pressable>
          					<Pressable style={styles.image8} onPress={()=>{}}>
            						<Image style={[styles.icon3, styles.iconLayout]} resizeMode="cover" />
          					</Pressable>
          					<Text style={[styles.logIn2, styles.logTypo]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
        				</View>
        				<View style={[styles.image5Group, styles.logLayout]}>
          					<Pressable style={[styles.image5, styles.image5Position]} onPress={()=>{}}>
            						<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
          					</Pressable>
          					<Image style={[styles.image6Icon, styles.image7Position]} resizeMode="cover" />
          					<Image style={[styles.image7, styles.image7Position]} resizeMode="cover" />
          					<Image style={styles.image8} resizeMode="cover" />
          					<Text style={[styles.logIn3, styles.logIn3Position]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
          					<View style={[styles.image5Container, styles.logIn3Position]}>
            						<Image style={[styles.image5, styles.image5Position]} resizeMode="cover" />
            						<Image style={[styles.image6Icon, styles.image7Position]} resizeMode="cover" />
            						<Image style={[styles.image7, styles.image7Position]} resizeMode="cover" />
            						<Image style={styles.image8} resizeMode="cover" />
            						<Text style={[styles.logIn4, styles.logLayout]}>
              							<Text style={styles.planATrip}>          {'\n'}                 {'\n'}</Text>
              							<Text style={styles.blankLine3}>{' '}</Text>
              							<Text style={styles.planATrip}>                 {'\n'}   Home    Map    Tickets     More</Text>
            						</Text>
          					</View>
        				</View>
      			</View>
      			<Text style={[styles.to, styles.toTypo]}>To:</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	tripLayout: {
    		height: 45,
    		width: 292,
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	toTypo: {
    		color: "#000",
    		textAlign: "left",
    		fontFamily: "Inter-Regular",
    		position: "absolute"
  	},
  	logInParentBorder: {
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	searchTypo: {
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	textClr: {
    		color: "#2c4262",
    		textAlign: "left"
  	},
  	parentLayout: {
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	image5Position: {
    		top: 0,
    		position: "absolute"
  	},
  	logLayout: {
    		height: 96,
    		position: "absolute"
  	},
  	logTypo: {
    		width: 402,
    		fontSize: 24,
    		color: "#2c4262",
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	image7Position: {
    		top: -6,
    		position: "absolute"
  	},
  	logIn3Position: {
    		top: 3,
    		height: 96,
    		position: "absolute"
  	},
  	tripPlanner: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		overflow: "hidden",
    		width: "100%"
  	},
  	tripPlannerChild: {
    		top: 154,
    		left: 55
  	},
  	from: {
    		top: 123,
    		textAlign: "left",
    		fontSize: 20,
    		left: 55
  	},
  	searchWrapper: {
    		top: 354,
    		left: 109,
    		backgroundColor: "#2c4262",
    		borderColor: "#2c4262",
    		height: 39,
    		width: 183,
    		position: "absolute"
  	},
  	search: {
    		left: 59,
    		color: "#fff",
    		top: 8,
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute",
    		textAlign: "left",
    		fontSize: 20
  	},
  	tripPlannerItem: {
    		top: 254,
    		left: 52
  	},
  	planATripContainer: {
    		left: 27,
    		top: 66,
    		position: "absolute"
  	},
  	text: {
    		height: 31,
    		width: 183
  	},
  	planATrip: {
    		fontSize: 24
  	},
  	blankLine: {
    		fontFamily: "Inter-Regular"
  	},
  	text3: {
    		fontSize: 20
  	},
  	frameParent: {
    		top: 523,
    		left: -7,
    		height: 285,
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff",
    		position: "absolute"
  	},
  	recentSearchesWrapper: {
    		backgroundColor: "#faf5be",
    		height: 50,
    		left: 0,
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden",
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		top: 0
  	},
  	recentSearches: {
    		left: 110,
    		width: 257,
    		height: 34,
    		fontSize: 24,
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		top: 8,
    		position: "absolute"
  	},
  	pastTripssearches: {
    		top: 128,
    		left: 47,
    		fontSize: 24,
    		textAlign: "left"
  	},
  	logInParent: {
    		top: 791,
    		left: -15,
    		width: 417,
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	logIn: {
    		top: -4,
    		height: 96,
    		position: "absolute",
    		left: 0
  	},
  	image5Parent: {
    		left: 8,
    		height: 80,
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden",
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff"
  	},
  	image5: {
    		left: 38,
    		width: 51,
    		height: 51
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
    		top: -1,
    		left: 6,
    		height: 96,
    		position: "absolute"
  	},
  	image5Group: {
    		top: -8,
    		width: 428,
    		left: 14,
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	logIn3: {
    		left: 14,
    		width: 402,
    		fontSize: 24,
    		color: "#2c4262",
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	image5Container: {
    		left: -10,
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden",
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff"
  	},
  	logIn4: {
    		top: -52,
    		left: 21,
    		width: 579,
    		color: "#2c4262",
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	blankLine3: {
    		fontSize: 16
  	},
  	to: {
    		top: 225,
    		textAlign: "left",
    		fontSize: 20,
    		left: 55
  	}
});

export default TripPlanner;
