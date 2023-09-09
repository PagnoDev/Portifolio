import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-hard-skills',
  templateUrl: './chip-hard-skills.component.html',
  styleUrls: ['./chip-hard-skills.component.scss']
})
export class ChipHardSkillsComponent {
  @Input() content!: string;
}
