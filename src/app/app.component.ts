import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfiguracionEstilosComponent } from "./components/configuracion-estilos/configuracion-estilos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ConfiguracionEstilosComponent]
})
export class AppComponent {
  title = 'admin-primeng';
}
