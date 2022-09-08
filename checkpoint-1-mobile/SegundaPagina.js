import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';

export const SecondPage = ({navigation, route}) => {

  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.container2}>
          <Text>{route.params.service}</Text>
          <Text>{route.params.email}</Text>
          <Text>{route.params.password}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity> 
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    botao : {
    backgroundColor: "black",
    borderRadius : 30,
    margin : 10,
    padding : 15,
    textAlign : "center"
  },
    textoBotao : {
      color: "#fff"
    },
    container: {
    flex: 1,
    backgroundColor: "red"
  },
  container2 : {
    backgroundColor: "#fff",
    borderRadius : 30,
    margin : 10,
    padding : 15,
    textAlign : "center"
  }
})

export default SecondPage;
