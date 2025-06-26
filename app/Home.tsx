import { COLORS } from '@/assets/colors';
import BackWall from '@/components/BackWall';
import { TextStyles } from '@/styles';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <BackWall
      colors={COLORS.gradients[1]}
      locations={[0.1, 0.7, 1]}
      className="flex flex-1"
      hasHeader>
      <View className="p-4 pt-0">
        <Text
          style={[
            TextStyles.heading,
            {
              fontSize: 32,
              fontFamily: 'Outfit-Medium',
            },
          ]}>
          Pick your leisure
        </Text>
      </View>
      <View></View>
    </BackWall>
  );
};

export default Home;
