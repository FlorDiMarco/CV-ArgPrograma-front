import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  persona: Persona = null;
  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}
  IsLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.IsLogged = true;
    } else {
      this.IsLogged = false;
    }
  }
  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
