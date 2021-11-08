const imgLike = (curitu) => {
  if(curitu) {
      return require('../../res/img/s2-checked.png')
  }else {
      return require('../../res/img/s2.png')
  }
} 

const curtirFoto = (curtiu,like) => {
  let qtd = like;
  if(curtiu){
      qtd--;
  }else{
      qtd++;

  }
  return [!curtiu,qtd];
}

export {imgLike, curtirFoto};