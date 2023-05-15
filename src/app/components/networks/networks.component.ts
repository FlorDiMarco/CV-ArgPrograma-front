import { Component } from '@angular/core';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent {
  icongithub=faGithub;
  iconlinkedin=faLinkedin;
}
