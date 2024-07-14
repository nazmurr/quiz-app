import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ResultScreen = ({ route, navigation }) => {
  const { userAnswers, totalQuestions } = route.params;

  // Calculate the number of correct answers
  const correctAnswersCount = userAnswers.filter(
    (answer) => answer.correct
  ).length;
  const totalScore = correctAnswersCount * 10; // Each question is worth 10 points

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        You got {correctAnswersCount} out of {totalQuestions} correct!
      </Text>
      <Text style={styles.scoreText}>
        Your score: {totalScore} out of {totalQuestions * 10}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Answers"
          onPress={() => navigation.navigate("Answers")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#d29dfa", // You might want to keep the background consistent with other screens
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default ResultScreen;
