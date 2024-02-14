import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortforlioComponent } from './portforlio.component';

describe('PortforlioComponent', () => {
  let component: PortforlioComponent;
  let fixture: ComponentFixture<PortforlioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortforlioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortforlioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
