import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from "react-native";
import { Cabecalho } from './src/components/Cabecalho';
import { Foto } from './src/components/Foto';
import lerFotos from './src/api/feed';
import { Comentarios } from "./src/components/Comentarios";


const App = () => {

  const [foto, setFoto] = useState({});

  useEffect(() => {

    lerFotos(setFoto);
    // [] no useEffect é o estado vázio, pois assim ele é só chamado uma vez,
    //assim só chamamos a requisição uma vez e não varias
  },[])

  return (
      <FlatList
        data={foto}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
            <Foto urlFoto={item.url} descricao={item.description} qtdLikes={item.likes} />
            <Comentarios comentarios={item.comentarios} />
          </Fragment>}
      />
  )
};
export default App;
