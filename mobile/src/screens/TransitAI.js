import * as React from "react";
import {Text, StyleSheet, Image, Pressable, View} from "react-native";

const TransitAI = () => {
  	
  	return (
    		<View style={styles.transitAi}>
      			<Text style={[styles.logIn, styles.logClr]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			<Text style={[styles.logIn, styles.logClr]}>          {'\n'}                 {'\n'}   Home    Map    Tickets     More{'\n'}                 {'\n'}   Home    Map    Tickets     More</Text>
      			<View style={[styles.image5Parent, styles.logInPosition]}>
        				<Pressable style={styles.image5} onPress={()=>{}}>
          					<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={[styles.image6, styles.imagePosition]} onPress={()=>{}}>
          					<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={[styles.image7, styles.imagePosition]} onPress={()=>{}}>
          					<Image style={[styles.icon3, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Pressable style={[styles.image8, styles.image8Position]} onPress={()=>{}}>
          					<Image style={[styles.icon4, styles.iconLayout]} resizeMode="cover" />
        				</Pressable>
        				<Text style={[styles.logIn3, styles.image8Position]}>
          					<Text style={styles.blankLine}>{' '}</Text>
          					<Text style={styles.home}>                 {'\n'}    Home    Map      Tickets   More</Text>
        				</Text>
      			</View>
      			<Image style={styles.transitAiChild} resizeMode="cover" />
      			<Image style={[styles.transitAiItem, styles.transitLayout]} resizeMode="cover" />
      			<Image style={[styles.transitAiInner, styles.transitLayout]} resizeMode="cover" />
      			<Text style={styles.typeYourMessage}>Type your message...</Text>
      			<Pressable style={styles.endChat} onPress={()=>{}}>
        				<Text style={[styles.text, styles.logClr]}>
          					<Text style={styles.home}>
            						<Text style={styles.endChat3}>←   End Chat{'\n'}</Text>
            						<Text style={styles.blankLine2}>{' '}</Text>
          					</Text>
          					<Text style={styles.blankLine2}>
            						<Text style={styles.text3}>{`     `}</Text>
          					</Text>
        				</Text>
      			</Pressable>
      			<Text style={[styles.helloThisIs, styles.helloTypo]}>Hello. This is TransitHub NY AI assistant. How can I help you?</Text>
        				<Text style={[styles.helloThisMessage, styles.helloTypo]}>Hello. This message is only for a demo.</Text>
        				<Image style={styles.image13Icon} resizeMode="cover" />
        				<Image style={styles.image14Icon} resizeMode="cover" />
        				</View>);
      			};
      			
      			const styles = StyleSheet.create({
        				logClr: {
          					color: "#2c4262",
          					textAlign: "left"
        				},
        				logInPosition: {
          					left: 0,
          					height: 96,
          					position: "absolute"
        				},
        				iconLayout: {
          					height: "100%",
          					width: "100%"
        				},
        				imagePosition: {
          					top: -6,
          					position: "absolute"
        				},
        				image8Position: {
          					top: 5,
          					position: "absolute"
        				},
        				transitLayout: {
          					height: 92,
          					borderRadius: 30,
          					position: "absolute"
        				},
        				helloTypo: {
          					color: "#000205",
          					fontSize: 20,
          					textAlign: "left",
          					fontFamily: "Inter-Regular",
          					position: "absolute"
        				},
        				transitAi: {
          					height: 874,
          					backgroundColor: "#cbeaf3",
          					overflow: "hidden",
          					width: "100%"
        				},
        				logIn: {
          					top: 778,
          					width: 402,
          					height: 96,
          					textAlign: "left",
          					fontFamily: "Inter-Regular",
          					fontSize: 24,
          					left: 0,
          					position: "absolute"
        				},
        				image5Parent: {
          					top: 782,
          					borderRadius: 2,
          					backgroundColor: "#fff",
          					borderStyle: "solid",
          					borderColor: "rgba(44, 66, 98, 0.1)",
          					borderWidth: 1,
          					width: 409,
          					height: 96,
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
        				image6: {
          					left: 117,
          					width: 64,
          					height: 64
        				},
        				icon2: {
          					nodeWidth: 64,
          					nodeHeight: 64
        				},
        				image7: {
          					left: 209,
          					width: 74,
          					height: 66
        				},
        				icon3: {
          					nodeWidth: 74,
          					nodeHeight: 66
        				},
        				image8: {
          					left: 316,
          					width: 55,
          					height: 55
        				},
        				icon4: {
          					nodeWidth: 55,
          					nodeHeight: 55
        				},
        				logIn3: {
          					left: 6,
          					width: 445,
          					height: 96,
          					textAlign: "left",
          					color: "#2c4262",
          					fontFamily: "Inter-Regular"
        				},
        				blankLine: {
          					fontSize: 16
        				},
        				home: {
          					fontSize: 24
        				},
        				transitAiChild: {
          					top: 723,
          					left: 10,
          					width: 313,
          					height: 44,
          					borderRadius: 30,
          					position: "absolute"
        				},
        				transitAiItem: {
          					top: 446,
          					left: 64,
          					width: 307
        				},
        				transitAiInner: {
          					top: 591,
          					left: 121,
          					width: 275
        				},
        				typeYourMessage: {
          					top: 735,
          					left: 22,
          					color: "#4f6267",
          					width: 289,
          					height: 23,
          					fontSize: 16,
          					textAlign: "left",
          					fontFamily: "Inter-Regular",
          					position: "absolute"
        				},
        				endChat: {
          					left: 15,
          					top: 40,
          					position: "absolute"
        				},
        				text: {
          					width: 183,
          					height: 31,
          					textAlign: "left"
        				},
        				endChat3: {
          					fontWeight: "700",
          					fontFamily: "Inter-Bold"
        				},
        				blankLine2: {
          					fontFamily: "Inter-Regular"
        				},
        				text3: {
          					fontSize: 20
        				},
        				helloThisIs: {
          					top: 468,
          					left: 78,
          					width: 293,
          					height: 116
        				},
        				helloThisMessage: {
          					top: 618,
          					left: 137,
          					width: 253,
          					height: 64
        				},
        				image13Icon: {
          					top: 2,
          					left: 286,
          					width: 123,
          					height: 123,
          					position: "absolute"
        				},
        				image14Icon: {
          					top: 457,
          					left: -7,
          					width: 70,
          					height: 70,
          					position: "absolute"
        				}
      			});
      			
      			export default TransitAI;
      			