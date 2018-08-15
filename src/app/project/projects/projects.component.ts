import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   projects : Project[]=[{name:"alp",id:"basar"},{name:"ufuk",id:"varol"},];
  constructor(private _projectService : ProjectService) { }
  
  ngOnInit() {
  }
  populate(){
    this._projectService.getProjects().subscribe((data)=>this.projects = data);
  }

}
