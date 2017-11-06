import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceLogComponent } from './voice-log.component';

describe('VoiceLogComponent', () => {
  let component: VoiceLogComponent;
  let fixture: ComponentFixture<VoiceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
