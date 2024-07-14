import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import questions from "../data";

const QuestionScreen = ({ route, navigation }) => {
  const { questionIndex } = route.params;
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    setSelectedOption(null);
  }, [questionIndex]);

  const handleNextPress = () => {
    // console.log(question.correctAnswer);
    // console.log(selectedOption);
    const isCorrect = selectedOption === question.correctAnswer;
    const updatedUserAnswers = [...userAnswers, { correct: isCorrect }];

    if (questionIndex < questions.length - 1) {
      navigation.navigate("Question", {
        questionIndex: questionIndex + 1,
      });
      setUserAnswers(updatedUserAnswers);
    } else {
      navigation.navigate("Results", {
        userAnswers: updatedUserAnswers,
        totalQuestions: questions.length,
      });
    }
  };

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {questionIndex + 1}/{questions.length}
      </Text>
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton(selectedOption === index)}
            onPress={() => handleOptionPress(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Next Question"
        onPress={handleNextPress}
        disabled={selectedOption === null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  counter: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  optionButton: (isSelected) => ({
    backgroundColor: isSelected ? "#87bdff" : "#e3e3e3",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
  }),
  optionText: {
    fontSize: 16,
  },
});

export default QuestionScreen;
