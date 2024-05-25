import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
export interface MenuItem {
  label: any;
  subMenu?: MenuItem[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  triggerMenuOnHover() {
    if (!this.menuTrigger.menuOpen) {
      this.menuTrigger.openMenu();
    } else {
      this.menuTrigger.closeMenu();
    }
  }

  closeMenuOnMouseLeave() {
    if (this.menuTrigger.menuOpen) {
      this.menuTrigger.closeMenu();
    }
  }
  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  closeMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  }
}
