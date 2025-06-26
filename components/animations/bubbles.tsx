import React from "react";
import { Dimensions, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const BUBBLE_COUNT = 10;

function Bubble({ index }: { index: number }) {
	const translateY = useSharedValue(height + Math.random() * 100);
	const translateX = useSharedValue(Math.random() * width);
	const scale = 0.4 + Math.random() * 0.6;

	const xWobble = Math.random() * 40 - 20;

	// Animate the bubble upward with horizontal wobble
	React.useEffect(() => {
		translateY.value = withDelay(
			index * 200,
			withRepeat(
				withTiming(-100, { duration: 8000 + Math.random() * 3000 }),
				-1,
				false
			)
		);
		translateX.value = withDelay(
			index * 200,
			withRepeat(
				withTiming(translateX.value + xWobble, { duration: 3000 }),
				-1,
				true
			)
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{ translateX: translateX.value },
			{ translateY: translateY.value },
			{ scale: scale },
		],
		opacity: 0.6,
	}));

	return (
		<Animated.View
			style={[
				{
					position: "absolute",
					width: 40,
					height: 40,
					borderRadius: 20,
					backgroundColor: "#99ccff",
				},
				animatedStyle,
			]}
		/>
	);
}

export default function BubbleScreen() {
	return (
		<View style={{ flex: 1, backgroundColor: "#001f3f" }}>
			{Array.from({ length: BUBBLE_COUNT }).map((_, i) => (
				<Bubble key={i} index={i} />
			))}
		</View>
	);
}
