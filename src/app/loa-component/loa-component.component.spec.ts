import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaComponentComponent } from './loa-component.component';

describe('LoaComponentComponent', () => {
  let component: LoaComponentComponent;
  let fixture: ComponentFixture<LoaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
