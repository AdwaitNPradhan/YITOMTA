import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { useEffect } from "react";
import { Text, View } from "react-native";

const openrouter = createOpenRouter({
  apiKey: process.env.EXPO_PUBLIC_OPEN_ROUTER_KEY,
});

export const getLasagnaRecipe = async (modelName: string) => {
  const model = openrouter.chat(modelName);
  const { text } = await generateText({
    model: model,
    // prompt: "Write a vegetarian lasagna recipe for 4 people.",
    messages: [
      {
        role: "system",
        content:
          "Whatever is said to you, you will turn it into nonsense and reply precisely. You can go full dark mode with the replies completely ruthless or even be overly sarcastic.",
      },
      {
        role: "user",
        content:
          "I was in the hospital because of an accident that I had when I was hit by a passing truck!",
      },
    ],
  });
  console.log(text);
  return text;
};

export default function Index() {
  const generateMeText = async () => {
    try {
      // const completionModel = openrouter.chat(
      // 	"meta-llama/llama-4-maverick:free"
      // );

      // const { text } = await generateText({
      // 	model: completionModel,
      // 	prompt: "What is OpenRouter?",
      // });

      const text = await getLasagnaRecipe("meta-llama/llama-4-maverick:free");

      console.log({ text });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    generateMeText();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{process.env.EXPO_PUBLIC_OPEN_ROUTER_KEY}</Text>
    </View>
  );
}
