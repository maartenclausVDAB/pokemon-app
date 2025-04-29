import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexHOmeComponent } from './pokedex-home.component';

describe('PokedexHOmeComponent', () => {
  let component: PokedexHOmeComponent;
  let fixture: ComponentFixture<PokedexHOmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexHOmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexHOmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
