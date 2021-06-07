import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsVegitablesComponent } from './fruits-vegitables.component';

describe('FruitsVegitablesComponent', () => {
  let component: FruitsVegitablesComponent;
  let fixture: ComponentFixture<FruitsVegitablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsVegitablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
