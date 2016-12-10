export class Pokemon {
  id: string;
  name: string;
  url: string;
  // type: string;
  imageURL: string;

  static parse(data){
    let pokemon = Object.assign(new Pokemon(), data);
    pokemon.getId();
    pokemon.getImageUrl();
    return pokemon;
  }

  getId(){
    const reg = this.url.match('([0-9]+)\/$');
    this.id = reg[1];
  }

  getImageUrl(){
    this.imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png";
  }
}
