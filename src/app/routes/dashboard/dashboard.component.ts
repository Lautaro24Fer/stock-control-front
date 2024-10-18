import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../../shared/aside/aside.component';
import { MainComponent } from '../../shared/main/main.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, AsideComponent, MainComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
