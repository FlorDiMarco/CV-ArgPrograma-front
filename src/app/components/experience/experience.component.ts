import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  iconEdit = faPenToSquare;
  iconBorrar = faTrash;
  experi: Experience[] = [];
  constructor(
    private sExperience: SExperienceService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isLogged = false;
  ngOninit(): void {
    this.cargarExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperience(): void {
    this.sExperience.lista().subscribe((data) => {
      this.experi = data;
    });
  }
  delete(id?: number) {
    if (id != undefined) {
      this.sExperience.delete(id).subscribe(
        (data) => {
          this.cargarExperience();
        },
        (err) => {
          alert('error al borrar');
        }
      );
    }
  }
}
