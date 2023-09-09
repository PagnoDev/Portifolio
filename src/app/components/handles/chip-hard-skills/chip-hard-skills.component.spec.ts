import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipHardSkillsComponent } from './chip-hard-skills.component';

describe('ChipHardSkillsComponent', () => {
  let component: ChipHardSkillsComponent;
  let fixture: ComponentFixture<ChipHardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipHardSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipHardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
