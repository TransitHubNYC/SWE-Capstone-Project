import * as React from "react";
import {StyleSheet, View, Text, Pressable, Image} from "react-native";

const CarbonFootprint = () => {
  	
  	return (
    		<View style={styles.carbonFootprint}>
      			<View style={styles.carbonFootprintChild} />
      			<Pressable style={styles.carbonFootprint2} onPress={()=>{}}>
        				<Text style={styles.text}>
          					<Text style={styles.carbonFootprint3}>
            						<Text style={styles.carbonFootprint4}>←  Carbon Footprint {'\n'}</Text>
            						<Text style={styles.blankLine}>{' '}</Text>
          					</Text>
          					<Text style={styles.blankLine}>
            						<Text style={styles.text3}>{`     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<Image style={styles.carbonFootprintItem} resizeMode="cover" />
      			<Text style={[styles.yourCarbonFootprint, styles.year12ContainerTypo]}>Your Carbon Footprint{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      			<Text style={[styles.year12Container, styles.year12ContainerTypo]}>
        				<Text style={styles.text4}>{`             2.8 `}</Text>
        				<Text style={styles.carbonFootprint3}>/ year{'\n'} {'\n'}     ↓ 12% lower than last year</Text>
      			</Text>
      			<Pressable style={styles.image18} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" />
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	year12ContainerTypo: {
    		color: "#fff",
    		fontFamily: "Inter-ExtraBold",
    		fontWeight: "800",
    		position: "absolute"
  	},
  	carbonFootprint: {
    		height: 874,
    		backgroundColor: "#cbeaf3",
    		overflow: "hidden",
    		width: "100%"
  	},
  	carbonFootprintChild: {
    		top: -3,
    		left: -57,
    		borderRadius: 2,
    		backgroundColor: "#2c4262",
    		borderStyle: "solid",
    		borderColor: "rgba(3, 31, 56, 0.1)",
    		borderWidth: 1,
    		width: 471,
    		height: 134,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	carbonFootprint2: {
    		left: 14,
    		top: 86,
    		position: "absolute"
  	},
  	text: {
    		color: "#cbeaf3",
    		width: 356,
    		height: 123,
    		textAlign: "left"
  	},
  	carbonFootprint3: {
    		fontSize: 24
  	},
  	carbonFootprint4: {
    		fontWeight: "700",
    		fontFamily: "Inter-Bold"
  	},
  	blankLine: {
    		fontFamily: "Inter-Regular"
  	},
  	text3: {
    		fontSize: 20
  	},
  	carbonFootprintItem: {
    		top: 331,
    		left: 18,
    		borderRadius: 30,
    		height: 231,
    		width: 365,
    		position: "absolute"
  	},
  	yourCarbonFootprint: {
    		top: 360,
    		left: 32,
    		textAlign: "center",
    		width: 333,
    		height: 34,
    		fontSize: 24
  	},
  	year12Container: {
    		top: 408,
    		left: 16,
    		height: 148,
    		width: 365,
    		textAlign: "left"
  	},
  	text4: {
    		fontSize: 40
  	},
  	image18: {
    		left: 297,
    		top: 131,
    		width: 105,
    		height: 105,
    		position: "absolute"
  	},
  	icon: {
    		height: "100%",
    		nodeWidth: 105,
    		nodeHeight: 105,
    		width: "100%"
  	}
});

export default CarbonFootprint;
