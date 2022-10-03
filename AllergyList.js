import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

const AllergyList = ({title, pollenList, navigation }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                keyExtractor={(item) => item.name}
                data={pollenList}
                horizontal={true}
                renderItem={({ item }) => {
                    return <View style={styles.viewStyle}> 

                    <TouchableOpacity onPress={() => navigation.navigate('FoodiePicScreen', {id: item.id})}>
                        <Text style={styles.nameStyle}>{item.name}</Text>
                        <Text style={styles.text}>avoid {item.value}</Text>
                    </TouchableOpacity>
                        
                    </View>;
                        
                    
                }}
              
            />
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        flexWrap:'wrap',
        color: 'white',
    },
    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        
    },
    viewStyle: {
        margin: 15,
        flexDirection: 'row',
        height:500,
        width:200,
        backgroundColor: '#5f6660',
        borderColor: '#5905AD',
        borderWidth:5,
        padding: 15,
        paddingBottom: 15,
    }

});

export default withNavigation(AllergyList);