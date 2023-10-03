import { BulletPoint } from '../bullet-point.model';
import { Project } from './project.model';

export class ProjectsService {
  private projectsList: Project[] = [
    new Project(
      'AWS Cloud Resume Challenge',
      'placeholder link',
      [new BulletPoint('Design and develop single-page application using Angular framework')],
      ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'AWS', 'Python'],
      'assets/images/projects/resume.png'
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
