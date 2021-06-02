import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Config';
export default class WriteScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            TitleText: "Story Title",
            AuthorText: "Name of the Author",
            StoryText: "Write your story here",
            word:""

        }
        
    }
    submitStory = ()=>{
        db.collection("Story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
       ToastAndroid.show("Your story has been submitted.");
    }
    render(){
        return(
            <View  style={{backgroundColor: 'white' , height: 1000}}>
               
                <Text style = {{ backgroundColor : 'blue',  color : 'black', fontSize : 50, textAlign : 'center'}}> Story Hub  </Text>
                
                <TextInput
                style={style.inputStyle}
                 onChangeText={(text)=>{
                     this.setState({
                         TitleText: text
                    })
                  }}
                  value={this.state.TitleText}/>

                  <TextInput
                      style={style.inputStyle}
                      placeholder="Book Id"
                      onChangeText={(text)=>{
                          this.setState({
                              AuthorText: text
                          })
                      }}
                      value={this.state.AuthorText}/>   

                  <TextInput
                      style={{width:'80%', marginTop: 40, alignSelf: 'center', height: 200, textAlign: 'center', borderWidth: 2, borderRadius:25,backgroundColor: 'red',  fontWeight : 'bold', }}
                      onChangeText={(text)=>{
                          this.setState({
                              StoryText: text
                          })
                      }}
                      multiline={true}
                      value={this.state.StoryText}/>

                      <TouchableOpacity style = {{borderWidth : 3, padding : 5, margin : 30, justifyContent : 'center', alignItems : 'center',alignSelf : 'center', height : 50, width : '62%', borderRadius : 100,  backgroundColor:'green'}}onPress = {this.submitStory}>
                      <Text style = {{ fontSize : 20, fontWeight : 'bold',}}>
                      Submit
                      </Text>
                      </TouchableOpacity>
            </View>

            
        )
     }
  }

  const style = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 50,
backgroundColor: 'red',
fontFamily : 'Comic Sans MS',
fontWeight : 'bold',
      }
  })