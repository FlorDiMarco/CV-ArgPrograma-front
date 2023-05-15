import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-neweducation',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css'],
})
export class NeweducationComponent {
  nombreE: string;
  descripcionE: string;
  constructor(private educationS: EducationService, private router: Router) {}
  ngOnInit() {}
  onCreate() {
    const edu = new Education(this.nombreE, this.descripcionE);
    this.educationS.save(edu).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al crear la educación');
        this.router.navigate(['']);
      }
    );
  }
}
