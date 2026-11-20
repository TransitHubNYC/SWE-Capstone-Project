import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const TripHistory = () => {
  	
  	return (
    		<View style={styles.tripHistory}>
      			<View style={[styles.tripHistoryWrapper, styles.image5ParentLayout]}>
        				<Text style={[styles.tripHistory2, styles.allTypo]}>Trip History</Text>
      			</View>
      			<View style={[styles.image5Parent, styles.tabPosition]}>
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
        				<Text style={[styles.logIn, styles.logInTypo]}>          {'\n'}                 {'\n'}                {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
      			<View style={styles.content}>
        				<View style={styles.filters}>
          					<View style={[styles.filterAll, styles.filterBorder]}>
            						<Text style={[styles.all, styles.allTypo]}>All</Text>
          					</View>
          					<View style={[styles.filterSubway, styles.filterBorder]}>
            						<Text style={[styles.subway, styles.logInTypo]}>Subway</Text>
          					</View>
          					<View style={[styles.filterSubway, styles.filterBorder]}>
            						<Text style={[styles.subway, styles.logInTypo]}>Bus</Text>
          					</View>
          					<View style={[styles.filterSubway, styles.filterBorder]}>
            						<Text style={[styles.subway, styles.logInTypo]}>Rail</Text>
          					</View>
        				</View>
        				<View style={styles.trip1}>
          					<Text style={[styles.timesSq, styles.timesSqTypo]}>Times Sq → Grand Central</Text>
          					<Text style={[styles.subway7, styles.timesSqTypo]}>Subway · 7 train · Oct 14, 6:42 PM</Text>
        				</View>
        				<View style={styles.trip1}>
          					<Text style={[styles.timesSq, styles.timesSqTypo]}>Jay St → Atlantic Av</Text>
          					<Text style={[styles.subway7, styles.timesSqTypo]}>Subway · R train · Oct 12, 8:15 AM</Text>
        				</View>
        				<View style={styles.trip1}>
          					<Text style={[styles.timesSq, styles.timesSqTypo]}>1 Av/E 23 St → South Ferry</Text>
          					<Text style={[styles.subway7, styles.timesSqTypo]}>Bus · M15 · Oct 10, 5:30 PM</Text>
        				</View>
        				<View style={styles.trip1}>
          					<Text style={[styles.timesSq, styles.timesSqTypo]}>Penn Station → Jamaica</Text>
          					<Text style={[styles.subway7, styles.timesSqTypo]}>Rail · LIRR · Oct 8, 7:05 PM</Text>
        				</View>
      			</View>
      			<Pressable style={[styles.tabHomeHotspot, styles.tabPosition]} onPress={()=>{}} />
      			<Pressable style={[styles.tabMapHotspot, styles.tabPosition]} onPress={()=>{}} />
      			<Pressable style={[styles.tabTicketsHotspot, styles.tabPosition]} onPress={()=>{}} />
      			<Pressable style={[styles.tabMoreHotspot, styles.tabPosition]} onPress={()=>{}} />
    		</View>);
};

const styles = StyleSheet.create({
  	image5ParentLayout: {
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	allTypo: {
    		textAlign: "left",
    		color: "#fff",
    		fontFamily: "Inter-Regular"
  	},
  	tabPosition: {
    		height: 96,
    		top: 778,
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
  	logInTypo: {
    		color: "#2c4262",
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	filterBorder: {
    		paddingVertical: 7,
    		paddingHorizontal: 15,
    		borderColor: "#031f38",
    		flexDirection: "row",
    		alignItems: "flex-start",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	timesSqTypo: {
    		width: 342,
    		color: "#2c4262",
    		textAlign: "left",
    		fontFamily: "Inter-Regular"
  	},
  	tripHistory: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		overflow: "hidden",
    		width: "100%"
  	},
  	tripHistoryWrapper: {
    		top: -21,
    		left: -7,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		height: 195,
    		backgroundColor: "#2c4262",
    		position: "absolute"
  	},
  	tripHistory2: {
    		top: 124,
    		left: 35,
    		width: 256,
    		height: 44,
    		fontSize: 24,
    		position: "absolute"
  	},
  	image5Parent: {
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		backgroundColor: "#fff",
    		left: 5,
    		height: 96,
    		top: 778,
    		width: 409,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	image5: {
    		left: 38,
    		top: 0,
    		width: 51,
    		height: 51,
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
  	logIn: {
    		top: -33,
    		left: 9,
    		width: 417,
    		height: 227,
    		fontSize: 24,
    		position: "absolute"
  	},
  	content: {
    		top: 205,
    		left: 14,
    		width: 374,
    		gap: 18,
    		alignItems: "flex-start",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	filters: {
    		alignSelf: "flex-start",
    		gap: 10,
    		flexDirection: "row",
    		alignItems: "flex-start",
    		overflow: "hidden"
  	},
  	filterAll: {
    		backgroundColor: "#2c4262"
  	},
  	all: {
    		fontSize: 16
  	},
  	filterSubway: {
    		backgroundColor: "#fff"
  	},
  	subway: {
    		fontSize: 16
  	},
  	trip1: {
    		alignSelf: "stretch",
    		paddingHorizontal: 16,
    		paddingVertical: 15,
    		gap: 4,
    		borderColor: "#031f38",
    		alignItems: "flex-start",
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	timesSq: {
    		fontSize: 20
  	},
  	subway7: {
    		fontSize: 16
  	},
  	tabHomeHotspot: {
    		width: 105,
    		left: 5,
    		height: 96,
    		top: 778
  	},
  	tabMapHotspot: {
    		left: 110,
    		width: 92,
    		top: 778,
    		height: 96
  	},
  	tabTicketsHotspot: {
    		left: 202,
    		width: 98,
    		top: 778,
    		height: 96
  	},
  	tabMoreHotspot: {
    		left: 300,
    		width: 102,
    		top: 778,
    		height: 96
  	}
});

export default TripHistory;
