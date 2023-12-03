import { ComponentFixture, TestBed } from '@angular/core/testing';
import { STagComponent } from './s-tag.component';

describe('STagComponent', () => {
  let component: STagComponent;
  let fixture: ComponentFixture<STagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [STagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(STagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
