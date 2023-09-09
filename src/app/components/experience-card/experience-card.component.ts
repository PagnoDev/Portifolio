import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() chipList!: string[];
  @Input() startYear!: string;
  @Input() lastYear: string = "Present";
  @Input() company!: string;
}
