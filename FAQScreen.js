import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

 
const FAQScreen = ({navigation}) => {
 
    return (
        <ScrollView style={styles.background}>


            <View style={styles.container}>  
            <Text style={styles.title}>OAS Buddy FAQ</Text> 
            <Entypo name="leaf" size={50} color="black" />
            </View>

            <View style={styles.container}>
            <Text style={styles.question}>What are the symptoms?</Text>
            <Text>Symptoms usually come up within 5-10 minutes. 
                They affect the lining of the lips and mouth and consist of itchiness, tingling, 
                redness, swelling, seized vocal chords. Some people can also experience vomiting, nausea,
                and other gastrointestinal pain. The intensity of these symptoms can be range from to low 
                to extreme. While analphylaxis is uncommon, it is possible. </Text>

            </View>

            <View style={styles.container}>
            <Text style={styles.question}>What does OAS stand for?</Text>
            <Text>Oral Allergy Syndrome. </Text>
            </View>

            <View style={styles.container}>
            <Text style={styles.question}>Can it be cured?</Text>
            <Text>While immunotherapy and slowly introducing allergic foods in a medical setting can help peanut allergies
                retreat to the point that people can then be exposed to peanuts without developing analphylaxis, this approach
                does not often work with OAS. Most people with OAS usually have to avoid the foods during pollen allergy season.
                 </Text>
                
            </View>

        



        </ScrollView>
    
    );
};
 
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#edfce8',
        flex:1,
        padding: 15,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    container: {
        padding:15,
        flex:1,
    },
    topContainer: {
        padding:15,
        flex:1,
        flexDirection: 'row',
    },
    question: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    answer: {
        fontSize: 20,
    }
});
 
export default FAQScreen;
