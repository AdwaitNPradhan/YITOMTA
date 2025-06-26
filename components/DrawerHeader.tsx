import { COLORS } from "@/assets/colors";
import { Fonts } from "@/assets/fonts";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Icon, MenuIcon } from "./ui/icon";

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  layout,
  navigation,
  options,
  route,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <HStack
      className="p-4 absolute w-full h-16 flex items-center justify-between "
      style={{
        marginTop: insets.top,
      }}
    >
      <HStack className="flex items-center">
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Box className="mr-4">
            <Icon as={MenuIcon} color="#FFF" size="xl" />
          </Box>
        </Pressable>
        <Text
          className={`text-[${COLORS.aliceBlue}] text-2xl`}
          style={{
            fontFamily: Fonts.outfit_bold,
            color: COLORS.aliceBlue,
          }}
        >
          YITOMTA
        </Text>
      </HStack>
    </HStack>
  );
};

export default DrawerHeader;
