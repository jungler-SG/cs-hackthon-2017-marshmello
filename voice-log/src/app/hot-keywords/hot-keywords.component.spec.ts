import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotKeywordsComponent } from './hot-keywords.component';

describe('HotKeywordsComponent', () => {
  let component: HotKeywordsComponent;
  let fixture: ComponentFixture<HotKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
