import React, { useEffect } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
	Easing,
	interpolate,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const COLORS = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#9D4EDD"];
const WORM_COUNT = 8;
const SEGMENTS_PER_WORM = 20;

function getRandom<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

function WormSegmented({ index }: { index: number }) {
	const color = getRandom(COLORS);
	const baseY = Math.random() * height;
	const baseX = Math.random() * width;
	const speed = 3000 + Math.random() * 3000;
	const waveAmplitude = 20 + Math.random() * 20;
	const waveLength = 25;
	const direction = Math.random() > 0.5 ? 1 : -1;

	const progress = useSharedValue(0);

	useEffect(() => {
		progress.value = withRepeat(
			withTiming(2 * Math.PI, {
				duration: speed,
				easing: Easing.linear,
			}),
			-1,
			false
		);
	}, []);

	return (
		<>
			{Array.from({ length: SEGMENTS_PER_WORM }).map((_, i) => {
				const segmentX = useDerivedValue(() => {
					return (
						baseX +
						i * waveLength * direction +
						interpolate(
							Math.sin(progress.value + i * 0.3),
							[-1, 1],
							[-waveAmplitude, waveAmplitude]
						)
					);
				});

				const segmentY = useDerivedValue(() => {
					return (
						baseY +
						interpolate(
							Math.cos(progress.value + i * 0.3),
							[-1, 1],
							[-waveAmplitude, waveAmplitude]
						)
					);
				});

				const animatedStyle = useAnimatedStyle(() => ({
					position: "absolute",
					transform: [
						{ translateX: segmentX.value },
						{ translateY: segmentY.value },
					],
				}));

				return (
					<Animated.View
						key={i}
						style={[
							{
								width: 20,
								height: 20,
								borderRadius: 10,
								backgroundColor: color,
							},
							animatedStyle,
						]}
					/>
				);
			})}
		</>
	);
}

export default function WormsWigglingScreen() {
	return (
		<View style={{ flex: 1, backgroundColor: "#000" }}>
			{Array.from({ length: WORM_COUNT }).map((_, i) => (
				<WormSegmented key={i} index={i} />
			))}
		</View>
	);
}
