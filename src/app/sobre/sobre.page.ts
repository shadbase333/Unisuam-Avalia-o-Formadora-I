import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class SobrePage {
  constructor(private router: Router) {}

  voltarHome() {
    this.router.navigate(['/']);
  }
}
