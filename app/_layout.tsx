import { COLORS } from "@/assets/colors";
import DrawerContent from "@/components/DrawerContent";
import DrawerHeader from "@/components/DrawerHeader";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import "@/polyfill";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";

import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode="light">
        <SafeAreaProvider>
          <SafeAreaView className="flex flex-1" edges={[]}>
            <StatusBar
              backgroundColor={COLORS.jet}
              barStyle={"light-content"}
            />
            <Drawer
              screenOptions={{
                header: (props) => <DrawerHeader {...props} />,
                drawerType: "back",
              }}
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Home" />
            </Drawer>
          </SafeAreaView>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
