import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css'],
})
export class HardSoftSkillsComponent implements OnInit {
  icongithub = faGithub;
  iconlinkedin = faLinkedin;
  iconEdit = faPenToSquare;
  iconBorrar = faTrash;
  skill: Skill[] = [];
  constructor(
    private skillS: SkillService,
    private tokenService: TokenService
  ) {}
  isLogged = false;
  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      this.skill = data;
    });
  }
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  delete(id?: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}
