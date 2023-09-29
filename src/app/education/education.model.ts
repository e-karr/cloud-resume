export class Education {
  public school: string;
  public location: string;
  public state: string | undefined;
  public degree: string;
  public major: string;
  public imagePath: string;
  public certificatePath: string | undefined;

  constructor(
    school: string,
    degree: string,
    major: string,
    imagePath: string,
    location: string,
    certificatePath?: string | undefined
  ) {
    this.school = school;
    this.location = location;
    this.degree = degree;
    this.major = major;
    this.imagePath = imagePath;
    this.certificatePath = certificatePath;
  }
}
