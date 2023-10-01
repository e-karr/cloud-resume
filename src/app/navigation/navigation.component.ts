import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  menuItems: string[] = [
    'About',
    'Experience',
    'Skills',
    'Projects',
    'Education',
  ];
}
