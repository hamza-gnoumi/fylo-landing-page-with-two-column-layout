import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFyloComponent } from './about-fylo.component';

describe('AboutFyloComponent', () => {
  let component: AboutFyloComponent;
  let fixture: ComponentFixture<AboutFyloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFyloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFyloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
