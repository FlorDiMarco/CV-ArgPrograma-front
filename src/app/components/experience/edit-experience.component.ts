import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  expLab: Experience = null;
  constructor(
    private sExperience: SExperienceService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperience.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperience.update(id, this.expLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }
}
