export class Skill {
  public name: string;
  public type: string;
  public imagePath: string;

  constructor(name: string, type: string, imagePath: string) {
    this.name = name;
    this.type = type;
    this.imagePath = imagePath;
  }
}
