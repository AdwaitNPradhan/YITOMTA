import { COLORS } from "@/assets/colors";
import { TextStyles } from "@/styles";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { BlurView } from "expo-blur";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ShapeScreen from "./animations/shapes";
import { HStack } from "./ui/hstack";
import { CloseIcon, Icon } from "./ui/icon";
import { VStack } from "./ui/vstack";

const DrawerContent: React.FC<DrawerContentComponentProps> = ({
	descriptors,
	navigation,
	state,
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			className="h-full relative w-full"
			style={{
				backgroundColor: COLORS.jet,
				paddingTop: insets.top,
			}}
		>
			<VStack className="absolute h-full w-full bottom-0 left-0 right-0 p-8">
				<BlurView
					className="h-full w-full overflow-hidden p-4 items-start gap-20 z-20"
					intensity={100}
					style={{
						borderRadius: 20,
					}}
				>
					<VStack className="items-start gap-8">
						<VStack className="w-full gap-4">
							<HStack className="justify-between w-full items-center max-w-f">
								<Text
									className="line-clamp-1"
									style={[
										TextStyles.regular,
										{ fontSize: 24 },
									]}
								>
									The Stupidity
								</Text>
								<View>
									<Pressable
										onPress={() =>
											navigation.toggleDrawer()
										}
									>
										<Icon
											as={CloseIcon}
											className="h-10 w-10"
											color={COLORS.aliceBlue}
										/>
									</Pressable>
								</View>
							</HStack>
							<HStack
								className="w-full p-4 rounded-xl min-w-full"
								style={{
									backgroundColor: `${COLORS.red}22`,
								}}
							></HStack>
						</VStack>
						<VStack>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 1
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 2
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 3
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 4
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 5
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 6
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 7
							</Text>
							<Text
								style={[TextStyles.regular, { fontSize: 24 }]}
							>
								Item 8
							</Text>
						</VStack>
					</VStack>
					<VStack className="align-bottom">
						<Text style={[TextStyles.regular, { fontSize: 24 }]}>
							Item 6
						</Text>
						<Text style={[TextStyles.regular, { fontSize: 24 }]}>
							Item 7
						</Text>
					</VStack>
				</BlurView>
			</VStack>
			<VStack className="absolute h-full w-full bottom-0 left-0 right-0 z-10 overflow-hidden">
				<ShapeScreen />
			</VStack>
		</View>
	);
};

export default DrawerContent;

const styles = StyleSheet.create({});
