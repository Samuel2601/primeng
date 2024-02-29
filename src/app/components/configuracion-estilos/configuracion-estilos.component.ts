import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TimelineModule } from 'primeng/timeline'
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion-estilos',
  standalone: true,
  imports: [SidebarModule,RadioButtonModule, TimelineModule,InputSwitchModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './configuracion-estilos.component.html',
  styleUrl: './configuracion-estilos.component.scss'
})
export class ConfiguracionEstilosComponent {
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  get sidebarClass() {
    return this.sidebarVisible ? 'layout-config-sidebar w-18rem p-sidebar p-sidebar-active p-sidebar-right' : 'layout-config-sidebar w-18rem';
  }

  get sidebarStyle() {
    return this.sidebarVisible ? {'z-index': '1102'} : {};
  }
}
