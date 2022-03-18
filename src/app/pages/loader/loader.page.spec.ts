import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router:Router; // declare router as Router type
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: 
      [IonicModule.forRoot(),
      AppRoutingModule
            ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router= TestBed.get(Router);//TestBed creates an instance of component or service
    component = fixture.componentInstance;
    
    
  }));

  it('should go tologin page after load', () => {
    component.ngOnInit(); // function ngOnInt() islaways executed when our component is started
    // Everytime the 'loader is opened , it wi9ll execute this ngOnInt function
    expect(router.navigate).toHaveBeenCalledWith(['login']) // router'snavigate functions is called  with an array that has string 'login'
  })
});
