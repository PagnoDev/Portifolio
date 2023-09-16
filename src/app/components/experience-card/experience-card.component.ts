import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() occupation!: string;
  @Input() company!: string;
  @Input() description!: string;
  @Input() chipList!: string[];
  @Input() startYear!: string;
  @Input() lastYear!: string;
}
