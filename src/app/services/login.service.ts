import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { AuthenticationResponse, Login } from '../model/login';
import { DevicesInfo } from '../model/devices';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private baseUrl = 'https://9t5auzeluh.execute-api.eu-west-1.amazonaws.com';

  private authenticationHttpHeaders: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/x-amz-json-1.1')
    .set('X-Amz-Target', 'AWSCognitoIdentityProviderService.InitiateAuth');

  login(userId: string = 'j9et07fi') {
    return this.http
      .get<Login>(`${this.baseUrl}/latest/auth-information?id=${userId}`)
      .pipe(
        switchMap((res) =>
          this.http.post<AuthenticationResponse>(
            'https://cognito-idp.eu-west-1.amazonaws.com/login',
            {
              AuthFlow: 'USER_PASSWORD_AUTH',
              ClientId: res.user_pool_client_id,
              AuthParameters: {
                USERNAME: environment.username,
                PASSWORD: environment.password,
              },
            },
            {
              headers: this.authenticationHttpHeaders,
            }
          )
        ),
        tap((res) => {
          localStorage.setItem('token', res.AuthenticationResult.IdToken);
        }),
        switchMap(() =>
          this.http.get<DevicesInfo>(
            `${this.baseUrl}/latest/${userId}/devices/statistics/_`
          )
        )
      );
  }
}
