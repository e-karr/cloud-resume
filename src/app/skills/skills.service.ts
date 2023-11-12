import { Skill } from './skill.model';

export class SkillsService {
  private languageList: Skill[] = [
    new Skill('JavaScript', 'language', 'assets/images/skills/javascript.svg'),
    new Skill('TypeScript', 'language', 'assets/images/skills/typescript.svg'),
    new Skill('Java', 'language', 'assets/images/skills/java.svg'),
    new Skill('MySQL', 'language', 'assets/images/skills/mysql.svg'),
    new Skill('HTML', 'language', 'assets/images/skills/html.svg'),
    new Skill('CSS', 'language', 'assets/images/skills/css.svg'),
    new Skill('Python', 'language', 'assets/images/skills/python.svg'),
  ];

  private frameworkList: Skill[] = [
    new Skill('Angular', 'framework', 'assets/images/skills/angular.svg'),
    new Skill(
      'Spring Boot',
      'framework',
      'assets/images/skills/springboot.svg'
    ),
    new Skill('Bootstrap', 'framework', 'assets/images/skills/bootstrap.svg'),
  ];

  private toolList: Skill[] = [
    new Skill('Amazon Web Services', 'tool', 'assets/images/skills/aws.svg'),
    new Skill('Git', 'tool', 'assets/images/skills/git.svg'),
    new Skill(
      'Visual Studio Code',
      'tool',
      'assets/images/skills/visual-studio-code.svg'
    ),
    new Skill('IntelliJ', 'tool', 'assets/images/skills/intellij.svg'),
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
