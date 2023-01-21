import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View, Alert } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [result, setResult] = useState('Guess a number between 1-100');
  const [total, setTotal] = useState(1);

  // console.log(number);

  const checkGuess = () => {

    setTotal(total + 1);

    if (guess < number) {
      setResult("Your guess " + guess + " is too low")
    } else if (guess > number) {
      setResult("Your guess " + guess + " is too high")
    } else {
      Alert.alert("You guessed the number in " + total + " guesses")
      newGame();
    }
  }

  const newGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setTotal(1);
  }

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={checkGuess} title="MAKE GUESS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
    margin: 20,
  },
});
