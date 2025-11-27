import { Education } from './education.model';

export class EducationService {
  private educationList: Education[] = [
    new Education(
      'Amazon Web Services',
      'Certificate',
      'Certified Cloud Practitioner',
      'assets/images/aws-cloud-pract.png',
      'Online'
    ),
    new Education(
      'LaunchCode',
      'Certificate',
      'Full Stack Web Development',
      'assets/images/launchcode.png',
      'Kansas City, MO'
    ),

    new Education(
      'Udemy',
      'Certificate',
      'Angular - The Complete Guide',
      'assets/images/udemy.png',
      'Online',
      'https://www.udemy.com/certificate/UC-b310b0d4-ea23-4b0d-9f8b-4ba032a617a5/'
    ),

    new Education(
      'Harvard edX',
      'Certificate',
      'CS50 - Introduction to Computer Science',
      'assets/images/cs50.jpg',
      'Online',
      'https://certificates.cs50.io/3ffde443-dceb-4676-b4b0-1eac5a1c8782.pdf?size=letter'
    ),

    new Education(
      'University of Kansas',
      'Master of Science in Education',
      'Higher Education Administration',
      'assets/images/kueducation.jpg',
      'Lawrence, KS'
    ),

    new Education(
      'University of Kansas',
      'Bachelor of Science in Business',
      'Marketing',
      'assets/images/bschool.jpg',
      'Lawrence, KS'
    ),

    new Education(
      'Butler Community College',
      'Associate of Science',
      'Liberal Arts',
      'assets/images/butlercc.jpg',
      'El Dorado, KS'
    ),
  ];

  getEducationList() {
    return this.educationList.slice();
  }
}
