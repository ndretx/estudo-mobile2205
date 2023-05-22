import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View  style={styles.card}>
       <Text style={styles.textTitle}>
        Andre Chaves Teixeira
        </Text>
      
      <Text style={styles.textSubTitle}>
        Web Developer :
        </Text>
       
        <Text style={styles.textSubTitle}>
        HTML | CSS | JavaScript | React 
        </Text>
        
        </View>
      <Image source={{ uri: 'https://lh3.googleusercontent.com/a/AGNmyxbUQdqzu5YGPB4r3xL3SSKz1StYoJ-NGul71YrI=s288-c-no', }}
        style={styles.image}/>
        <View  style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Linkedin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Instagram
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Email
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
     
      </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#360568',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 200,
    borderRadius: 400 / 2,
    marginTop: -100,
    marginLeft: -100,
  },
  button: {
    backgroundColor: '#FF6F59',
    borderRadius: 15,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '80%',
    left: '35%',
    marginTop: -100,
    marginLeft: -100,
    justifyContent: 'space-between',
  },
  card:{
    flex:1,
    justifyContent: "flex-start",
    marginTop: 100,
   
    
  },
  textTitle:{
    color: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',

  },
  textSubTitle:{
    color: "#F7C59F",
    alignItems: "flex-start",
    justifyContent: 'center',
    fontSize: 16,
    

  }


});
