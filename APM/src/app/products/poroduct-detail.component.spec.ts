import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoroductDetailComponent } from './poroduct-detail.component';

describe('PoroductDetailComponent', () => {
  let component: PoroductDetailComponent;
  let fixture: ComponentFixture<PoroductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoroductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoroductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
