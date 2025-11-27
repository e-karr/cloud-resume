import { BulletPoint } from '../bullet-point.model';
import { Job } from './job.model';

export class ExperienceService {
  private experienceList: Job[] = [
    new Job(
      'Security Benefit',
      'Software Engineer II',
      null,
      'Topeka, KS',
      'January 2024 - Present',
      null,
      [
        new BulletPoint(
          'Develop and maintain Python applications that provide timely, accurate liability and market data insights to the derivatives trading team, supporting daily trading decisions for product risk management.'
        ),
        new BulletPoint(
          'Own full development life cycle for new features and system improvements, including design and architecture considerations, DevOps coordination, code implementation, QA partnership, and production deployment support.'
        ),
        new BulletPoint(
          'Transformed a complex SQL stored procedure into a maintainable, high-performance Python application, improving testability, easing future enhancements, and ensuring accurate generation of integral liability data sourced from nine SQL tables.'
        ),
        new BulletPoint(
          'Implemented new business features in the main Angular application, improving maintainability by componentizing enhancements and following Angular best practices.'
        ),
        new BulletPoint(
          'Led the team-wide upgrade of all team Python applications to Python 3.12 by completing initial conversions and producing upgrade documentation and lists of key code changes to look for during team-wide adoption.'
        )
      ],
      'assets/images/experience/securitybenefit.png'),
    new Job(
      'Security Benefit',
      'IT Intern - AWS Infrastructure',
      null,
      'Topeka, KS',
      'August 2023 - January 2024',
      null,
      [
        new BulletPoint(
          'Collaborate with colleagues on AWS infrastructure projects, such as tracking OS upgrades and building dashboards in CloudWatch to monitor RDS database performance'
        ),
        new BulletPoint(
          'Designed process to analyze VPC flow logs and security group rules to identify redundancy and clean up security groups using S3, Lambda, EventBridge Scheduler, Glue, and Athena'
        ),
        new BulletPoint(
          'Researched OpenSearch Serverless, API Gateway, and Lambda functions to collaboratively build proof of concept search engine'
        ),
        new BulletPoint(
          'Create weekly tickets to track Microsoft patches to servers in development, QA, and production environments'
        ),
        new BulletPoint(
          'Expand AWS knowledge and skills through Cloud Guru coursework'
        ),
      ],
      'assets/images/experience/securitybenefit.png'
    ),

    new Job(
      'Commerce Bank',
      'Early Career Talent Strategist',
      null,
      'Kansas City, MO',
      'January 2022 - November 2022',
      null,
      [
        new BulletPoint(
          'Partnered with Early Career Programs Manager to build a strategic and data-driven recruitment plan for internships and entry-level roles.'
        ),
        new BulletPoint(
          'Represented Commerce Bank at college recruitment and community events such as career fairs, mock interviews, resume reviews, and professional development events; fostering meaningful connections with prospective talent and generating applications from target universities and demographics'
        ),
        new BulletPoint(
          'Cultivated relationships with hiring managers across the bank through close communication about the hiring process on open positions.'
        ),
        new BulletPoint(
          'Professionally guided candidates through the hiring process and provided timely updates on hiring status.'
        ),
        new BulletPoint(
          'Collaborated with Talent Acquisition team on implementation of new recruitment software, Phenom.'
        ),
      ],
      'assets/images/experience/commercebank.png'
    ),

    new Job(
      'KU School of Business',
      'Assistant Director of Undergraduate Recruitment',
      'Recruitment Coordinator & Academic Advisor',
      'Lawrence, KS',
      'January 2021 - January 2022',
      'June 2017 - January 2021',
      [
        new BulletPoint(
          'Promoted to recognize exemplary performance in meeting undergraduate recruitment goals and dedication to the School of Business.'
        ),
        new BulletPoint(
          'Collaborated with the School of Business communications team and enrichment program directors to develop integrated recruitment communications, resulting in a 10% increase in applications for the Business Leadership Program (BLP) and over a 100% increase in applications for the Multicultural Business Scholars Program during '
        ),
        new BulletPoint(
          'Effectively hired, managed, and developed team of 15-20 business student ambassadors. Oversaw ambassador budget of approximately $20,000.'
        ),
        new BulletPoint(
          'Planned, promoted, and executed recruitment events such as student visits, open house, high school group visits, college fairs, and events in coordination with the Office of Admissions; resulting in an average 18% increase in incoming freshmen per year from Fall 2017 to Fall 2021.'
        ),
        new BulletPoint(
          'Collaborated with community college partners to develop and expand transfer student recruitment strategy for Fall 2021 recruitment cycle, resulting in a 67% increase in yield of admitted transfer students.'
        ),
        new BulletPoint(
          'Quickly adapted to a changing environment in order to provide an engaging virtual recruitment strategy during height of COVID-19 pandemic.'
        ),
        new BulletPoint(
          'Utilized Slate and Tableau content management systems to assist with design and implementation of data-driven undergraduate recruitment strategy. Quickly became a top user of Slate management system.'
        ),
        new BulletPoint(
          'Counseled advising course load of approximately 150 current business students on degree requirements, guided students towards appropriate campus resources, and developed timely graduation plans.'
        ),
      ],
      'assets/images/bschool.jpg'
    ),

    new Job(
      'KU School of Engineering',
      'Aerospace Engineering, Administrative Associate',
      null,
      'Lawrence, KS',
      'August 2015 - June 2017',
      null,
      [
        new BulletPoint(
          'Assisted with School of Engineering recruitment events to represent the Department of Aerospace Engineering.'
        ),
        new BulletPoint(
          'Designed department newsletter that was sent to 200 Aerospace Engineering departments across the country.'
        ),
        new BulletPoint(
          'Formulated a survey sent to undergraduate students to research and improve current advising climate. Set into motion improvements based on student feedback.'
        ),
        new BulletPoint(
          'Directly advised 30 freshmen and provided support for all undergraduate and graduate students and faculty.'
        ),
      ],
      'assets/images/experience/aerospace.jpg'
    ),
  ];

  getExperienceList() {
    return this.experienceList.slice();
  }
}
