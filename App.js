import { StatusBar } from 'expo-status-bar';
import react,{useState, useEffect} from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Botao from './Botao';

export default function App() {


  console.disableYellowBox=true;
  const[fristNumber, setFristNumber]=useState(0);
  const[secondNumber, setSecondNumber]=useState(0);
  const[sinal, setSinal]=useState("");
  const[ponto, setPonto]=useState("");

  const[stringCalculo, setStringCalculo]=useState("0");
  var numeros = [];
  for(var i =9; i>=0; i--){
    numeros.push(i);
  }


  function logicaCalculadora(n){
    if(sinal==""){
      setFristNumber(parseFloat(fristNumber.toString()+n.toString()));
      setStringCalculo(parseFloat(fristNumber.toString()+n.toString()));
    }
    
  
    if((n=="+"||n=="-"|| n=="*"|| n=="/" ) && secondNumber == 0 ){
      setStringCalculo(fristNumber.toString()+n);
      setSinal(n);

    }
    if(sinal!=""){
      setSecondNumber(parseFloat(secondNumber.toString()+n.toString()));
      setStringCalculo(fristNumber+sinal+parseFloat(secondNumber.toString()+n.toString()));

    }
    if(n =="="){
      let resultado=0;
      if(sinal=="+"){
        resultado=fristNumber+secondNumber;
      }else if(sinal=="-"){
        resultado=fristNumber-secondNumber;
      }else if(sinal=="/"){
        resultado=fristNumber/secondNumber;
      }else if(sinal=="*"){
        resultado=fristNumber*secondNumber;
      }
      setStringCalculo(resultado);
      setSinal("");
      setFristNumber(resultado);
      setSecondNumber(0);
    }
    
  }
  
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <StatusBar hidden/>
      <View style={styles.topo}>
        <Text style={{fontSize:25,color:'white',}}>{stringCalculo}</Text>
      </View>

      <View style={{ flexDirection:'row',height:'12%',}}>
        <TouchableOpacity onPress={()=>logicaCalculadora('+')} style={{ width:'25%',backgroundColor:'rgb(20,20,20)'}}><Text style={styles.num} >+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('-')} style={{ width:'25%',backgroundColor:'rgb(20,20,20)'}}><Text style={styles.num} >-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('*')} style={{ width:'25%',backgroundColor:'rgb(20,20,20)'}}><Text style={styles.num} >*</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logicaCalculadora('/')} style={{ width:'25%',backgroundColor:'rgb(20,20,20)'}}><Text style={styles.num} >/</Text></TouchableOpacity>
        
      </View>

      <View style={{ flexDirection:'row',flexWrap:'wrap',borderBottomColor:'black',borderEndWidth:2,marginTop:5,}}>
        {
          numeros.map(function(e){
            return(<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
          })
        }
      </View>
      <View style={{marginTop:9,marginLeft:272, backgroundColor:'rgb(84, 77, 77)',borderColor:'white',borderWidth:1,width:'33.3%',}}>
        <TouchableOpacity onPress={()=>logicaCalculadora('=')} style={{fontSize:35,color:'black',marginBottom:10}}><Text style={styles.igual} >=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding:10,
    borderTopColor:"white",
    borderBottomWidth:2,
    height:'50%',
    justifyContent:'center',
    paddingLeft:25,
    
   
  },
  num:{
    fontSize:35,
    marginTop:30 ,
    textAlign:'center',
    color:'white'
  },
  igual:{
    fontSize:35,
    marginTop:9 ,
    textAlign:'center',
    color:'black',
  },
  ponto:{
    fontSize:35,
    marginTop:9 ,
    textAlign:'center',
    color:'white',
  },
    
    
  
});
