import {useState, useEffect} from "react"
import { Text, StyleSheet, SafeAreaView, ScrollView, View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import api from './api.json'

export const PaginaInicial = ({navigation}) => {

  const [ servico, setServico ] = useState([])

  const renderItem = ({ item }) => (
      <View>
      <TouchableOpacity style = {styles.botao}
        onPress={() => navigation.navigate('SecondPage', {service : item.service, email : item.email, password : item.password})
      }
      >{item.service}</TouchableOpacity>
    </View>
  );

  const saveValueJson = () => {
    AsyncStorage.setItem('jsonValues', JSON.stringify(api))
    console.log('dados salvos') 
  }

  const getValueJson = () => {
    AsyncStorage.getItem('jsonValues').then(
      (value) => {
        setServico(JSON.parse(value))
      }
    )
  }

  const EmptyListMessage = () => {
  return (
    <Text style={styles.listaVazia}>
      Lista Vazia!
    </Text>
  );
};

  useEffect(() => {
    saveValueJson()
    getValueJson()
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerText}>Fiap Pass</Text>
        </SafeAreaView>

          <FlatList
            data={servico}
            renderItem={renderItem}
            ListEmptyComponent = {EmptyListMessage}
          />

        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  header : {
    height: 80,
    padding: 20,
    paddingTop:40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22, marginBottom: 10, textAlign: "center"
  },
  botao : {
    backgroundColor: "#fff",
    borderRadius : 30,
    margin : 10,
    padding : 15,
    textAlign : "center"
  },
  listaVazia : {
    padding: 10,
    alignItems: 'center',
    fontSize: 22,
    textAlign: 'center',
  }
})

export default PaginaInicial;