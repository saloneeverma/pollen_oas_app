import React from 'react';
import { Text, StyleSheet,Button, View, Image } from 'react-native';
 
const FirstScreen = (props) => {
    console.log(props.navigation)
 
    return (
        <View>
            <Button
            title = "Go To App"
            color="#5905AD"
            onPress = {() => props.navigation.navigate('HomeScreen')}
            />  
            <Button
    title = "go to counter screen"
    onPress = {() => props.navigation.navigate('HomeScreen')}
    />
            <Button
            title = "Go To FAQ"
            color="#5905AD"
            onPress = {() => props.navigation.navigate('FAQScreen')}
            /> 
        </View>
    
    );
};
 
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});
 
export default FirstScreen;
