export class Pokemon {
  name: string;
  url: string;
  type: string;
  image: string;

  static parse(data){
    let pokemon = Object.assign(new Pokemon(), data);

    return pokemon;
  }
}
