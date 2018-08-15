import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }
  
  projects : Project[];
  
   getProjects(){
    return this.http.get<Project[]>(environment.apiUrl)

  }
   postProject(project : Project){
    this.http.post(environment.apiUrl,{name: project.name,id:project.id}).subscribe();
  }
    deleteProject(id : string){
      this.http.delete(environment.apiUrl+id).subscribe();
    }
    editProject(project : Project){
      this.http.put(environment.apiUrl+project.id,{name: project.name,id:project.id}).subscribe();

    }
  
  

}

