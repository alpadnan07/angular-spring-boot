import { Component, OnInit } from '@angular/core';
import {ProjectService} from "./project.service";
@Component({
  selector: 'project-component',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private  _projectService : ProjectService) { }
  name = "name";
  id = "id";
  editName = "name";
  editId = "id";
  deleteId = "id";
  ngOnInit() {
  }
   generate(){
    this._projectService.postProject({name:this.name,id:this.id});
  }
  delete(){
    this._projectService.deleteProject(this.deleteId);
  }
  edit(){
    this._projectService.editProject({name:this.editName,id:this.editId});
  }
}
