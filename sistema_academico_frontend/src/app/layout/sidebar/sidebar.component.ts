import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, studentMenuItems, teacherMenuItems } from 'src/app/models/menu-items.model';
import { UsersModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems?: MenuItem[];

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    let user: UsersModel | null;
    user = this._authService.getCurrentUser();
    switch (user?.role) {
      case 'PROFESOR':
        this.menuItems = teacherMenuItems;
        break;
      case 'ESTUDIANTE':
        this.menuItems = studentMenuItems;
        break;
    }
  }

}
