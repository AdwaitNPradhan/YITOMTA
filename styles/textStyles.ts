import { COLORS } from "@/assets/colors";
import { Fonts } from "@/assets/fonts";
import { StyleSheet, TextStyle } from "react-native";

const baseConfig: TextStyle = {
	color: COLORS.aliceBlue,
	fontFamily: Fonts.outfit_regular,
	fontSize: 14,
};

const TextStyles = StyleSheet.create({
	regular: baseConfig,
	heading: {
		...baseConfig,
		fontSize: 28,
		fontFamily: Fonts.outfit_medium,
	},
	bold: {
		...baseConfig,
		fontFamily: Fonts.outfit_bold,
	},
});

export { TextStyles };
