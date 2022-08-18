import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} 
from 'react-native';
import Tempo from './components/Tempo';

async function buscaCep(){
  const response = await Api.get('weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date,description&key=7ab934df&city_name=Peruibe,SP');
}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do Tempo</Text>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>Digite sua Cidade: </Text>
        <TextInput 
          placeholder='sua cidade ...'
          style={styles.input}
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <Tempo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  titulo:{
    fontSize:30
  },
  label:{
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20
  },
  botao:{
    marginLeft:'10%',
    marginRight:'10%',
    backgroundColor:'#000',
  },
  textoBotao:{
    color:'#FFF',
    fontSize:20,
    textAlign:'center'
  },
  blocoGeral:{
    marginTop:20
  }
});
