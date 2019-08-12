import React from "react";
import {View,Text,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard} from "react-native";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userid:'',
      Password:''

    }

  }

  myfun=()=>{
    const{userid,Password}= this.state;
    Alert.alert("welcome "+userid);

  }

 render(){
 

   return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.textStyles}>Login</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#c1c1c1"
        style={styles.InputStyle}
        onChangeText={
          userid => this.setState({userid})
        }
      
      />
      <TextInput
      placeholder="Password"
      placeholderTextColor="#c1c1c1"
      style={styles.InputStyle}

    />
    <TouchableOpacity onPress={()=>this.myfun()}>
    <Text style={styles.butttonStyle}>Login</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
        </TouchableWithoutFeedback>
   );
   
 }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab04c',
    alignItems: 'center',
    justifyContent: 'center',
   //padding:20,
   
  
  },
  textStyles:{
    fontSize:40,
    color:"#fff",
    textAlign:"center",

  },
  InputStyle:{
    color:"#fff",
    fontSize:20,
    paddingTop:25,
    borderBottomWidth:1,
    borderBottomColor:"#fff",
    width:250,
    
  },
  butttonStyle:{
    textAlign:"center",
    fontSize:30,
    color:"#fff",
    borderColor:"#fff",
    borderWidth:1,
  //  backgroundColor:"#019031",
    marginTop:25,
    padding:7,
    

  }
});
