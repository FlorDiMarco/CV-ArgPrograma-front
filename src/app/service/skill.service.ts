import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skillURL = 'html://localhost:8080/skill/';

  constructor(private hhtpClient: HttpClient) {}

  public lista(): Observable<Skill[]> {
    return this.hhtpClient.get<Skill[]>(this.skillURL + 'lista');
  }
  public detail(id: number): Observable<Skill> {
    return this.hhtpClient.get<Skill>(this.skillURL + `detail/${id}`);
  }
  public save(skill: Skill): Observable<any> {
    return this.hhtpClient.post<any>(this.skillURL + `create`, skill);
  }
  public update(id: number, skill: Skill): Observable<any> {
    return this.hhtpClient.put<any>(this.skillURL + `update/${id}`, skill);
  }
  public delete(id: number): Observable<any> {
    return this.hhtpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}
