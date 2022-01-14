import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data: DataService, private auth: AuthService) {
  }

  getProducts() {
    this.data.get('/products').subscribe(d => {
      return console.log('products'+d);
    });
  }

  logout() {
    this.auth.logout();
  }
}
