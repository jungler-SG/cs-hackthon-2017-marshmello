import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceLogListComponent } from './voice-log-list.component';

describe('VoiceLogListComponent', () => {
  let component: VoiceLogListComponent;
  let fixture: ComponentFixture<VoiceLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
