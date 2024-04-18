import {View,Text,StyleSheet, Switch,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import * as Localization from 'expo-localization'
import {I18n} from 'i18n-js'
import { registerIndieID, unregisterIndieDevice } from 'native-notify'; //Must be in the login component (Hook function)
import axios from 'axios';

const translations = {
    en:{
        name: 'My name is Kuruvilla',
        busstop: 'Get off at Chittethukara Bus Stop',
        arrival: 'KSRTC Bus arriving in 20 minutes',
    },
    mal:{
        name:'എൻ്റെ പേര് കുരുവിള',
        busstop: 'ചിറ്റേത്തുകര ബസ് സ്റ്റോപ്പിൽ ഇറങ്ങുക',
        arrival:'KSRTC ബസ് 20 മിനിറ്റിനുള്ളിൽ എത്തും',
    }
};

const i18n = new I18n(translations)
i18n.locale = Localization.locale;
i18n.enableFallback = true;

const Translator = () => {
    const [locale, setLocale] = useState(i18n.locale);
    registerIndieID('Kuruvilla', 20676, 'qokgHbBtqedMbz1GCk9bSy');
    const changeLocale = (locale) => {
        i18n.locale = locale;
        setLocale(locale);
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Multimodal Transport App!</Text>
            <Text>{'\n'}</Text>
            <Text style = {styles.text}>{i18n.t('name')}{'\n'}</Text>
            <Text style = {styles.text}>{i18n.t('busstop')}{'\n'}</Text>
            <Text style = {styles.text}>{i18n.t('arrival')}{'\n'}</Text>
            <Text style = {styles.changeLang}>Select Language</Text>
            <TouchableOpacity onPress={() =>{ 
                    changeLocale('en');
                    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
                    subID: 'Kuruvilla',
                    appId: 20676,
                    appToken: 'qokgHbBtqedMbz1GCk9bSy',
                    title: 'English',
                    message: 'You have selected English!'
                    });
                }}>
                <Text style = {styles.langOptions}> English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                    changeLocale('mal')
                    axios.post(`https://app.nativenotify.com/api/indie/notification`, {
                    subID: 'Kuruvilla',
                    appId: 20676,
                    appToken: 'qokgHbBtqedMbz1GCk9bSy',
                    title: 'Malayalam',
                    message: 'You have selected Malayalam!'
                    });
                }}>
                <Text style = {styles.langOptions}> Malayalam</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Translator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36a2cf',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Arial', 
      fontWeight: 'bold',
      fontSize: 20, 
      color: 'white',
    },
    header:{
        fontFamily: 'Arial', 
        fontWeight: 'bold',
        fontSize: 22, 
        color: 'black',
        textAlign: 'center',
        marginTop: '30%',
    },
    changeLang: {
        fontFamily: 'Arial', 
        fontWeight: 'bold',
        fontSize: 22, 
        color: 'black',
        textAlign: 'center',
        marginTop: '20%',
        marginBottom:'10%'
    },
    langOptions:{
        fontFamily: 'Arial', 
        fontWeight: 'bold',
        fontSize: 20, 
        color: '#80ffeb',
        textAlign: 'center',
        marginBottom: '5%',
    }
  });
  