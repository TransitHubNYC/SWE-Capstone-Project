import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable} from "react-native";

const AdminDashboard = () => {
  	
  	return (
    		<View style={styles.adminDashboard}>
      			<View style={[styles.dashboardWrapper, styles.dashboardWrapperBorder]}>
        				<Text style={styles.dashboard}>         Dashboard</Text>
      			</View>
      			<View style={[styles.adminDashboardChild, styles.dashboardWrapperBorder]} />
      			<View style={[styles.frameParent, styles.parentBorder]}>
        				<Pressable style={[styles.image2Parent, styles.reports3NewLayout]} onPress={()=>{}}>
          					<Image style={styles.image2Icon} resizeMode="cover" />
          					<Text style={[styles.reports3New, styles.textTypo]}>       Reports{'\n'}{'\n'}  3 New</Text>
        				</Pressable>
        				<View style={[styles.allMapRoutesWrapper, styles.frameChildBg]}>
          					<Text style={[styles.allMapRoutes, styles.textTypo]}>All Map {'\n'}Routes</Text>
        				</View>
        				<View style={[styles.allSchedulesWrapper, styles.dashboardWrapperBorder]}>
          					<Text style={styles.allSchedules}>All Schedules</Text>
        				</View>
      			</View>
      			<View style={[styles.transportParent, styles.parentBorder]}>
        				<Text style={[styles.transport, styles.textTypo]}>            Transport{'\n'}{'\n'}</Text>
        				<View style={[styles.frameChild, styles.frameBorder]} />
        				<View style={[styles.frameItem, styles.frameItemLayout]} />
      			</View>
      			<Text style={[styles.text, styles.textTypo]}>256   Active  165 Not active</Text>
      			<View style={[styles.image5Parent, styles.logInLayout]}>
        				<Image style={[styles.image5Icon, styles.frameItemLayout]} resizeMode="cover" />
        				<Image style={[styles.image6Icon, styles.image7Position]} resizeMode="cover" />
        				<Pressable style={[styles.image7, styles.image7Position]} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={styles.image8} onPress={()=>{}}>
          					<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Text style={[styles.logIn, styles.logInLayout]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	dashboardWrapperBorder: {
    		borderWidth: 1,
    		borderStyle: "solid",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	parentBorder: {
    		width: 349,
    		borderColor: "#031f38",
    		left: 23,
    		backgroundColor: "#fff",
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	reports3NewLayout: {
    		height: 102,
    		width: 175,
    		position: "absolute"
  	},
  	textTypo: {
    		color: "#2c4262",
    		fontFamily: "Inter-Regular",
    		textAlign: "left",
    		fontSize: 24
  	},
  	frameChildBg: {
    		backgroundColor: "#d3f2ca",
    		position: "absolute"
  	},
  	frameBorder: {
    		top: 103,
    		height: 34,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	frameItemLayout: {
    		width: 51,
    		position: "absolute"
  	},
  	logInLayout: {
    		height: 96,
    		position: "absolute"
  	},
  	image7Position: {
    		top: -6,
    		position: "absolute"
  	},
  	iconLayout: {
    		height: "100%",
    		width: "100%"
  	},
  	adminDashboard: {
    		height: 874,
    		overflow: "hidden",
    		width: "100%",
    		backgroundColor: "#cbeaf3"
  	},
  	dashboardWrapper: {
    		top: -21,
    		left: -1,
    		backgroundColor: "#2c4262",
    		width: 409,
    		height: 195,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderRadius: 2,
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	dashboard: {
    		top: 75,
    		left: 77,
    		fontWeight: "700",
    		fontFamily: "Inter-Bold",
    		color: "#fff",
    		width: 256,
    		height: 44,
    		textAlign: "left",
    		fontSize: 24,
    		position: "absolute"
  	},
  	adminDashboardChild: {
    		top: 223,
    		left: 113,
    		borderRadius: 50,
    		borderColor: "rgba(251, 253, 255, 0.1)",
    		width: 172,
    		height: 150,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: "#cbeaf3"
  	},
  	frameParent: {
    		top: 311,
    		height: 355
  	},
  	image2Parent: {
    		top: 12,
    		backgroundColor: "#ffd4d4",
    		left: 11,
    		height: 102,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	image2Icon: {
    		left: 0,
    		width: 38,
    		height: 39,
    		top: 0,
    		position: "absolute"
  	},
  	reports3New: {
    		left: 4,
    		top: 0,
    		height: 102,
    		width: 175,
    		position: "absolute"
  	},
  	allMapRoutesWrapper: {
    		top: 127,
    		height: 101,
    		width: 175,
    		backgroundColor: "#d3f2ca",
    		left: 11,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	allMapRoutes: {
    		top: 28,
    		left: 42,
    		position: "absolute"
  	},
  	allSchedulesWrapper: {
    		top: 241,
    		left: 8,
    		backgroundColor: "#ece0f3",
    		width: 178,
    		height: 93,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderRadius: 2,
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	allSchedules: {
    		top: 30,
    		width: 179,
    		height: 34,
    		color: "#2c4262",
    		fontFamily: "Inter-Regular",
    		left: 11,
    		textAlign: "left",
    		fontSize: 24,
    		position: "absolute"
  	},
  	transportParent: {
    		top: 93,
    		height: 162
  	},
  	transport: {
    		left: 119,
    		width: 135,
    		height: 67,
    		top: 0,
    		position: "absolute"
  	},
  	frameChild: {
    		left: 19,
    		width: 64,
    		backgroundColor: "#d3f2ca",
    		position: "absolute"
  	},
  	frameItem: {
    		left: 174,
    		backgroundColor: "#c8d3c5",
    		top: 103,
    		height: 34,
    		borderWidth: 1,
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	text: {
    		top: 196,
    		left: 54,
    		width: 336,
    		height: 83,
    		position: "absolute"
  	},
  	image5Parent: {
    		top: 778,
    		left: -7,
    		borderColor: "rgba(44, 66, 98, 0.1)",
    		width: 421,
    		backgroundColor: "#fff",
    		height: 96,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderRadius: 2,
    		overflow: "hidden"
  	},
  	image5Icon: {
    		left: 38,
    		height: 51,
    		top: 0
  	},
  	image6Icon: {
    		left: 117,
    		height: 64,
    		width: 64
  	},
  	image7: {
    		left: 209,
    		width: 74,
    		height: 66
  	},
  	icon: {
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
  	icon2: {
    		nodeWidth: 55,
    		nodeHeight: 55
  	},
  	logIn: {
    		top: 3,
    		left: 14,
    		width: 402,
    		color: "#2c4262",
    		fontFamily: "Inter-Regular",
    		textAlign: "left",
    		fontSize: 24
  	}
});

export default AdminDashboard;

