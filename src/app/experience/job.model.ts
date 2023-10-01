import { BulletPoint } from '../bullet-point.model';

export class Job {
  public company: string;
  public title: string;
  public title2: string | null;
  public location: string;
  public dates: string;
  public dates2: string | null;
  public bullets: BulletPoint[];
  public imagePath: string;

  constructor(
    company: string,
    title: string,
    title2: string | null,
    location: string,
    dates: string,
    dates2: string | null,
    bullets: BulletPoint[],
    imagePath: string
  ) {
    this.company = company;
    this.title = title;
    this.title2 = title2;
    this.location = location;
    this.dates = dates;
    this.dates2 = dates2;
    this.bullets = bullets;
    this.imagePath = imagePath;
  }
}
