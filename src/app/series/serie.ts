//TODO 5. Se crea la clase que define la informacion de lo que se desea listar. Se usa Generate Class
//Se definen los atributos y el constructor
export class Serie {

  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;

  public constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string)
  {
    this.id=id;
    this.name=name;
    this.channel=channel;
    this.seasons=seasons;
    this.description=description;
    this.webpage=webpage;
    this.poster=poster;
  }
}
