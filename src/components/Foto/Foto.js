import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import estilo from './estilo';
import {curtirFoto, imgLike} from '../../api/curtidas'

const Foto = ({urlFoto, descricao, qtdLikes}) => {
    const [curtiu, setCurtiu] = useState(false);
    const [like, setLike] = useState(qtdLikes);

    const clicouCurtiu = () => {
        const [novoEstCurtiu, qtd] = curtirFoto(curtiu, like);
        setLike(qtd);
        setCurtiu(novoEstCurtiu);
    }
    return (
        <Fragment>

            <Image
                source={{uri: urlFoto}}
                style={estilo.imagem}
            />
            <Text style={{color:"#111",fontSize:16,marginLeft:5}}>{descricao}</Text>
            <View style={estilo.viewLike}>

                <TouchableOpacity onPress={clicouCurtiu}>
                    <Image 
                        source={imgLike(curtiu)} 
                        style={estilo.like} 
                    />
                </TouchableOpacity>
                <Text style={{fontWeight:"bold",color:"#111"}}>Curtidas: </Text>
                <Text style={{color:"#111"}}>{like}</Text>
            </View>

        </Fragment>
    )
};

export default Foto;
