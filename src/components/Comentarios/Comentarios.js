import React, { Fragment, useState } from 'react'
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import estilo from "./estilo";
const Comentarios = ({comentarios}) => {
  
  let conteudoCampoInput = "";
  let campoInput;

  const [estComentario, setEstComentario] = useState(comentarios);

  const adicionarComentario = () => {
    
    campoInput.clear();
    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: "igor"
    }

    setEstComentario([...estComentario, novoComentario])

  }

  return (
    <Fragment>
      <FlatList 
        data={estComentario}
        keyExtractor={(item,index) => index.toString() }
        renderItem={({ item }) =>
        <View style={estilo.naMesmaLinha}>
          <Text style={{fontWeight: "bold",color:"#111"}}>{item.userName} </Text>
          <Text style={{fontWeight: "400",color:"#111"}}>{item.text}</Text>
        </View> }
      />
      <View style={estilo.naMesmaLinha} >
        <TextInput 
          ref={textInput => campoInput = textInput}
          placeholder={"Deixe seu comentário"}
          style={{flex:1}}
          onChangeText={text => conteudoCampoInput = text}
        />
        <TouchableOpacity
          onPress={adicionarComentario}
        >
          <Image 
            style={estilo.imgSend} 
            source={require("../../../res/img/send.png")} 
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}
export default Comentarios;