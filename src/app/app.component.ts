import { Component, OnInit } from '@angular/core';
import { Providers, Msal2Provider } from '@microsoft/mgt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'outlookcalendarapi';

  ngOnInit()
  {
    Providers.globalProvider = new Msal2Provider({
        clientId: '450644b1-3640-46ed-ba8b-f4cf5336bc50'
    });
  }
}