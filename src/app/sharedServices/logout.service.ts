import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CustomHeaders } from '../_models/head.model';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { ENDPOINTS } from '../../environments/endpoints';

const URL = environment.serverApi + ENDPOINTS.logout;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private http: HttpClient,
              private router: Router,
              private headers: CustomHeaders,
              private alert: AlertService) {
  }

  logout() {
    this.http.delete<any>(URL, httpOptions).subscribe(
      () => {
        localStorage.clear();
        this.alert.success('Logged out successfully!');
      });
  }
}
