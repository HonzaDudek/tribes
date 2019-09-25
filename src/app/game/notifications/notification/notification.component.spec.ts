import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { AppComponent } from '../../../app.component';
import { LoginComponent } from '../../../login/login.component';
import { LogoutComponent } from '../../../logout/logout.component';
import { RegisterComponent } from '../../../register/register.component';
import { KingdomSettingsComponent } from '../../../kingdom-settings/kingdom-settings.component';
import { HeaderComponent } from '../../../header/header.component';
import { GameComponent } from '../../game.component';
import { ResourcesComponent } from '../../resources/resources.component';
import { AlertComponent } from '../../../alert/alert.component';
import { BuildingsComponent } from '../../buildings/buildings.component';
import { BuildingDetailComponent } from '../../buildings/building-details/building-detail.component';
import { BuildingComponent } from '../../buildings/building/building.component';
import { WelcomeScreenComponent } from '../../../welcome-screen/welcome-screen.component';
import { NotificationsComponent } from '../notifications.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TribesNotification } from '../../../_models/notification.model';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let notification: TribesNotification;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        LogoutComponent,
        KingdomSettingsComponent,
        HeaderComponent,
        GameComponent,
        ResourcesComponent,
        AlertComponent,
        BuildingsComponent,
        BuildingDetailComponent,
        BuildingComponent,
        WelcomeScreenComponent,
        NotificationsComponent,
        NotificationComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    component.notification = new TribesNotification('Building', 'farm', 123546789, 123456789);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it;
});
