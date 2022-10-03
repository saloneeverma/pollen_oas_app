import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, ScrollView, View, Button, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import AllergyList from '../components/AllergyList';
import { Entypo } from '@expo/vector-icons';

import pollen from '../api/pollen';
import  zips  from '../api/zips.json';
import pollenInfo from '../api/pollenInfo.json';

const HomeScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [latLong, setLatLong] = useState(0);
    const [errMessage, setErrMessage] = useState('');

    const namesVarArray = ['grassIndex', 'treeAcaciaIndex', 'treeAshIndex', 'treeBeechIndex', 'treeBirchIndex', 'treeCedarIndex', 'treeCottonwoodIndex', 'treeCypressIndex', 'treeElderIndex', 'treeElmIndex', 'treeHemlockIndex', 'treeHickoryIndex', 'treeJuniperIndex', 'treeMahoganyIndex', 'treeOakIndex', 'treePineIndex', 'treeSpruceIndex', 'treeSycamoreIndex', 'treeWalnutIndex', 'treeWillowIndex', 'weedRagweedIndex'];
    const names = ['Grass', 'Acacia', 'Ash', 'Beech', 'Birch','Cedar', 'Cottonwood', 'Cypress', 'Elder', 'Elm', 'Hemlock', 'Hickory', 'Juniper', 'Mahogany', 'Oak', 'Pine', 'Spruce', 'Sycamore', 'Walnut', 'Willow', 'Ragweed'];


    console.log()
    

    const pollenApi = async() => {

        // try {
        //     const response = await fetch('/timelines?location='+zips[latLong].lat + "%2C" + zips[latLong].lng+'&fields=treeAcaciaIndex&fields=treeAshIndex&fields=treeBeechIndex&fields=treeBirchIndex&fields=treeCedarIndex&fields=treeCypressIndex&fields=treeElderIndex&fields=treeElmIndex&fields=treeHemlockIndex&fields=treeHickoryIndex&fields=treeJuniperIndex&fields=treeMahoganyIndex&fields=treeOakIndex&fields=treePineIndex&fields=treeCottonwoodIndex&fields=treeSpruceIndex&fields=treeSycamoreIndex&fields=treeWalnutIndex&fields=treeWillowIndex&fields=grassIndex&fields=weedRagweedIndex&units=metric&timesteps=1d&apikey=ufe5SN43xwtScph80XfXrCX8jssxsApI', 
        //     {
        //         headers: {
        //             Accept: 'application/json',
        //             'Accept-Encoding' : 'gzip'
        //         }
        //     });
        //     // const response = await pollen.get('/timelines', {
        //     //     params:{
        //     //         location: JSON.stringify(zips[latLong].lat + "," + zips[latLong].lng),
        //     //         fields: namesVarArray,
        //     //         units: 'metric',
        //     //         timesteps: ['1d'],
        //     //         query: 'ufe5SN43xwtScph80XfXrCX8jssxsApI',
        //     //     }
        //     // });
        //     console.log(response);
        //     setResults(response.data.timelines.intervals[0]);
        //     console.log(results);
        // } catch (err) {
        //     setErrMessage('the api is wrong');     
        //     console.error(err);   
        // }

        console.log('https://api.tomorrow.io/v4/timelines?location='+zips[latLong].lat +
        '2C' + zips[latLong].lng+'&fields=treeAcaciaIndex&fields=treeAshIndex&fields=treeBeechIndex&fields=treeBirchIndex&fields=treeCedarIndex&fields=treeCypressIndex&fields=treeElderIndex&fields=treeElmIndex&fields=treeHemlockIndex&fields=treeHickoryIndex&fields=treeJuniperIndex&fields=treeMahoganyIndex&fields=treeOakIndex&fields=treePineIndex&fields=treeCottonwoodIndex&fields=treeSpruceIndex&fields=treeSycamoreIndex&fields=treeWalnutIndex&fields=treeWillowIndex&fields=grassIndex&fields=weedRagweedIndex&units=metric&timesteps=1d&apikey=ufe5SN43xwtScph80XfXrCX8jssxsApI');
        const response = await fetch('https://api.tomorrow.io/v4/timelines?location='+zips[latLong].lat +
         '%2C' + zips[latLong].lng+'&fields=treeAcaciaIndex&fields=treeAshIndex&fields=treeBeechIndex&fields=treeBirchIndex&fields=treeCedarIndex&fields=treeCypressIndex&fields=treeElderIndex&fields=treeElmIndex&fields=treeHemlockIndex&fields=treeHickoryIndex&fields=treeJuniperIndex&fields=treeMahoganyIndex&fields=treeOakIndex&fields=treePineIndex&fields=treeCottonwoodIndex&fields=treeSpruceIndex&fields=treeSycamoreIndex&fields=treeWalnutIndex&fields=treeWillowIndex&fields=grassIndex&fields=weedRagweedIndex&units=metric&timesteps=1d&apikey=ufe5SN43xwtScph80XfXrCX8jssxsApI', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, 
    //body: JSON.stringify(formData)
})
.then(resp => {
    console.log('Printing out not json');
    console.log(resp);
    return resp.json();
})
.then((responseJson) => {
 console.log('Printing out json'); 
 console.log(responseJson);
setResults(responseJson.data.timelines[0].intervals[0].values);
console.log('Printing results');
console.log(results);
console.log('Test Case:');
console.log(results.grassIndex);

})
.catch(error => {
    this.setState({spinner: false});
    Alert.alert('Error', error.message);
    throw error;
});
    };

    useEffect(() => {
        getLatLong();
    }, []);


    const filterResults = (num) => {
        
        var tempArr = [];
        var infoArray = [];

        for (const [key, value] of Object.entries(results)) {
            // console.log(key, value);
            tempArr.push(value)
          }

        for (var j = 0; j < tempArr.length;j++) {
            if (tempArr[j] == parseInt(num)) {
                infoArray.push(pollenInfo[j]);
            }
        }
        
        return infoArray;
    }


    const getLatLong = async(zipVar) => {
        try {
            var temp = 0;
            for (var i = 0; i < zips.length; i++) {
                if(zips[i].zip == parseInt(zipVar)) {
                    temp = i;
                }
            }
            setLatLong(temp);
        } 
        catch(err) {
            setErrMessage('the latlong is wrong');
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.background}>

            <View style={styles.topLogo}>
                <Entypo name="leaf" size={50} color="black" />
                <Text style={styles.titleStyle}> OAS Buddy! </Text>
            </View>
            
            <View style={styles.spacer}>
                <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>getLatLong(term)}/>
                {errMessage ? <Text>{errMessage}</Text> : null} 
            </View>

            <View style={styles.spacer}>
            <Button
                title="Get results"
                color="#5905AD"
                onPress={()=> pollenApi(latLong)}
            /> 
            </View>

            

            {/* <View style={styles.spacer}>
                <Text style={styles.titleStyle}>Allergies and Avoidances: </Text>
            </View> */}

            <View style={styles.spacer}>
                <AllergyList title={'High Risk of Cross Reactivity'} pollenList={filterResults(5)}/>
            </View>

            <View style={styles.spacer}>
                <AllergyList title={'Medium Risk of Cross Reactivity'} pollenList={filterResults(4)}/>
            </View>

            <View style={styles.spacer}>
                <AllergyList title={'Low Risk of Cross Reactivity'} pollenList={filterResults(3)}/>
            </View>
          

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontStyle: 'italic',
    },
    background: {
        backgroundColor: '#edfce8',
        alignContent: 'space-between',
    },
    titleStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    listStyle: {
        flex:1,
        alignContent:'space-between',
    },
    buttonStyle: {
        padding: 50,
        flex:1,
        textAlign: 'center',
        alignItems: 'center',
    },
    spacer: {
        flex:1,
        paddingBottom:15,
        marginBottom:15,
    },
    topLogo: {
        flex:1,
        paddingBottom:15,
        marginBottom:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        paddingVertical: 20
      }
});

export default HomeScreen;
