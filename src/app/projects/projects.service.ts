import { BulletPoint } from '../bullet-point.model';
import { Project } from './project.model';

export class ProjectsService {
  private projectsList: Project[] = [
    new Project('Popcorn Picks', 'https://github.com/e-karr/launchcode-popcorn-picks',
    [
      new BulletPoint('Collaboratively built an app that allows users to browse and filter movies based on genre, streaming service, release year, etc., and search by text; users can save movies to watch later, watch history lists, and leave reviews'),
      new BulletPoint('Developed service in Angular and controller in Java to communicate with external API and retrieve movie details'),
      new BulletPoint('Designed and developed search by text functionality, allowing users to search for movies based on title or person'),
      new BulletPoint('Created a quiz that collects user answers in Angular, sends parameters to external API through Java, and returns a movie recommendation based on the user answers')
    ],
    ['Angular', 'TypeScript', 'Java', 'SpringBoot', 'MySQL', 'Bootstrap'],
    'assets/images/projects/popcorn-picks.png',
    'https://drive.google.com/file/d/1vss4q0R5BvGd2El4r_dBvSDgO7v_AI6J/view?usp=share_link'),

    new Project(
      'AWS Cloud Resume - In Progress',
      'https://github.com/e-karr/cloud-resume',
      [
        new BulletPoint(
          'Designed and developed single-page application using Angular framework'
        ),
        new BulletPoint(
          'Utilized CloudFormation template to provision S3 and CloudFront AWS resources'
        ),
        new BulletPoint(
          'Deployed website with S3 and domain name from Route 53'
        ),
        new BulletPoint('Allowed for HTTPS security with CloudFront'),
        new BulletPoint(
          'Configured API resources (DynamoDB, API Gateway, Lambda) with Terraform'
        ),
        new BulletPoint(
          'Implemented a CI/CD pipeline for front-end Angular updates using Github Actions'
        ),
        new BulletPoint(
          'Coming soon - Implement visitor counter with DynamoDB, API Gateway, and Python Lambda function'
        ),
      ],
      ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'AWS'],
      'assets/images/projects/resume.png',
      'https://www.elizabeth-karr.com'
    ),

    new Project(
      'Kickball Event Registration',
      'https://github.com/e-karr/cs50-final-project',
      [
        new BulletPoint(
          'Users can create an account, view upcoming events, register a team for an event, and join a team'
        ),
        new BulletPoint(
          'Developed a dynamic web application utilizing the Flask framework and Python'
        ),
        new BulletPoint(
          'Created relational database schema with SQLite and integrated database into application'
        ),
        new BulletPoint('Designed dynamic HTML templates using Jinja'),
        new BulletPoint(
          'Utilized Bootstrap CSS framework to create visually appealing web application'
        ),
      ],
      ['Python', 'HTML', 'SQLite', 'Flask', 'Bootstrap'],
      'assets/images/projects/kickball.png',
      'https://www.youtube.com/watch?v=aeZm5W6CpK8'
    ),

    new Project(
      'Tic Tac Toe',
      'https://github.com/e-karr/odin-tic-tac-toe',
      [
        new BulletPoint(
          'Users play tic tac toe verses another player or the computer'
        ),
        new BulletPoint(
          'Programmed tic tac toe functionality utilizing modular JavaScript'
        ),
        new BulletPoint('Designed graphic user interface with HTML and CSS'),
      ],
      ['JavaScript', 'HTML', 'CSS'],
      'assets/images/projects/tic-tac-toe.png',
      'https://e-karr.github.io/odin-tic-tac-toe/'
    ),

    new Project(
      'Etch-A-Sketch',
      'https://github.com/e-karr/odin-etch-a-sketch',
      [
        new BulletPoint(
          'Emulates the Etch-A-Sketch toy. Use the mouse to draw on a sketchpad'
        ),
        new BulletPoint(
          'Utilized JavaScript to dynamically create HTML elements'
        ),
        new BulletPoint('Designed graphic user interface with HTML and CSS'),
      ],
      ['JavaScript', 'HTML', 'CSS'],
      'assets/images/projects/etch-a-sketch.png',
      'https://e-karr.github.io/odin-etch-a-sketch/'
    ),
  ];

  getProjectList() {
    return this.projectsList.slice();
  }
}
