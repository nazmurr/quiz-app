import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import questions from "../data";

const AnswersScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={[styles.questionContainer, index === 0 && { marginTop: 20 }]}
          >
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.answerText}>
              Correct Answer: {item.options[item.correctAnswer]}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  questionContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  answerText: {
    fontSize: 16,
    color: "#4CAF50",
  },
});

export default AnswersScreen;
