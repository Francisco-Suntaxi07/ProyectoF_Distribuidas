import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, teacherMenuItems } from 'src/app/models/menu-items.model';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems?: MenuItem[];

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.menuItems = teacherMenuItems;
  }
  
}
