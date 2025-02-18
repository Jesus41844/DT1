import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoprintCComponent } from './octoprint-c.component';

describe('OctoprintCComponent', () => {
  let component: OctoprintCComponent;
  let fixture: ComponentFixture<OctoprintCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoprintCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoprintCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
