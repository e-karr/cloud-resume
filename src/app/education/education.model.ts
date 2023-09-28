export class Education {
    public school: string;
    public city: string;
    public state: string;
    public degree: string;
    public major: string;
    public imagePath: string;
    public certificatePath: string | undefined;

    constructor (school: string, degree: string, major: string, imagePath: string, city: string, state: string, certificatePath?: string | undefined) {
        this.school = school;
        this.city = city;
        this.state = state;
        this.degree = degree;
        this.major = major;
        this.imagePath = imagePath;
        this.certificatePath = certificatePath;
    }
}