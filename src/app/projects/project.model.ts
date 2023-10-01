import { BulletPoint } from '../bullet-point.model';

export class Project {
  public name: string;
  public link: string | undefined;
  public gitHub: string;
  public bullets: BulletPoint[];
  public languages: string[];
  public imagePath: string;

  constructor(
    name: string,
    gitHub: string,
    bullets: BulletPoint[],
    languages: string[],
    imagePath: string,
    link?: string | undefined
  ) {
    this.name = name;
    this.gitHub = gitHub;
    this.bullets = bullets;
    this.languages = languages;
    this.imagePath = imagePath;
    this.link = link;
  }
}
