import { StatusBar } from 'expo-status-bar';
import react,{useState, useEffect} from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

export default function Botao(props){

    return (<View style={{backgroundColor:'black',borderColor:'white',borderWidth:1,width:'33.3%',height:'35%',}}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora(props.numero)}>
        <Text style={{fontSize:35, marginLeft:10,color:'white', textAlign:'center',}}>
            {props.numero}</Text>
        </TouchableOpacity>
        
        </View>);
}