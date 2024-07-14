import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ResultScreen from "./screens/ResultScreen";
import AnswersScreen from "./screens/AnswersScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
        <Stack.Screen
          name="Answers"
          component={AnswersScreen}
          options={{ headerShown: true, title: "Answers" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
