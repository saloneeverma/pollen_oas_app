import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({ term, onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='ZIP Code'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    backgroundStyle: {
        marginTop: 10,//moves the search bar down from the title
        backgroundColor: '#edfce8',//grey color
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,//moves the text over
        flexDirection: 'row',
    },

    inputStyle: {
        flex: 1,
        fontSize: 18,
		borderColor: '#5905AD',//to see where the input box is
        borderWidth:3,
        padding:10,
        flex:1, //takes up the whole input 
    },


    iconStyle: {//at the bottom in the stylesheet
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },


});

export default SearchBar;
