import { Skill } from './skill.model';

export class SkillsService {
  private languageList: Skill[] = [
    new Skill('JavaScript', 'language', 'assets/images/skills/javascript.png'),
    new Skill('TypeScript', 'language', 'assets/images/skills/typescript.webp'),
    new Skill('Java', 'language', 'assets/images/skills/java.png'),
    new Skill('MySQL', 'language', 'assets/images/skills/sql.jpg'),
    new Skill('HTML', 'language', 'assets/images/skills/html.jpg'),
    new Skill('CSS', 'language', 'assets/images/skills/css.png'),
    new Skill('Python', 'language', 'assets/images/skills/python.jpg'),
  ];

  private frameworkList: Skill[] = [
    new Skill('Angular', 'framework', 'assets/images/skills/angular.png'),
    new Skill(
      'Spring Boot',
      'framework',
      'assets/images/skills/springboot.png'
    ),
    new Skill('Bootstrap', 'framework', 'assets/images/skills/bootstrap.png'),
    new Skill('Flask', 'framework', 'assets/images/skills/flask.png'),
  ];

  private toolList: Skill[] = [
    new Skill('AWS', 'tool', 'assets/images/skills/aws.png'),
    new Skill('Git', 'tool', 'assets/images/skills/git.png'),
    new Skill(
      'Visual Studio Code',
      'tool',
      'assets/images/skills/visual-studio-code.png'
    ),
    new Skill('IntelliJ', 'tool', 'assets/images/skills/intellij.png'),
  ];

  getLanguageList() {
    return this.languageList.slice();
  }

  getFrameworkList() {
    return this.frameworkList.slice();
  }

  getToolList() {
    return this.toolList.slice();
  }
}
