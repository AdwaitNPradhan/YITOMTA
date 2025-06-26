import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends LinearGradientProps {
  hasHeader?: boolean;
}

const BackWall: React.FC<Props> = ({ ...props }) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      {...props}
      style={[
        {
          paddingTop: 64 + insets.top,
        },
        props.style,
      ]}
    />
  );
};

export default BackWall;
