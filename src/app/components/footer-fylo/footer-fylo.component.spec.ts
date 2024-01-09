import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFyloComponent } from './footer-fylo.component';

describe('FooterFyloComponent', () => {
  let component: FooterFyloComponent;
  let fixture: ComponentFixture<FooterFyloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFyloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFyloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
