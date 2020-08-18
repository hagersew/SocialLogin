import { Component } from '@angular/core';
import { MSConfig } from 'oauthlogin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExcellWrapperAng';
  loading = false;

  config: MSConfig = {
    config: {
      auth: {
        clientId: "eeb77728-2b9f-41c1-bebc-0bf0ec28a601",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000",
      },
      cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE10 or Edge
      },
    },
    login: {
      scopes: ["openid", "profile", "User.Read"],
    },
  };

  OnLoginSuccess(account : Account) {
    console.log(account)
  }

  OnLoginError(error : Error) {
    console.log(error)
  }
}
