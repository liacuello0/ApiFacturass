import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent} from './registro/registro.component';
import { VerComponent} from './ver/ver.component';
import { ModificarComponent} from './modificar/modificar.component';
import { EliminarComponent} from './eliminar/eliminar.component';

const routes: Routes = [
  {
    path: "",
    component: RegistroComponent
  },
  {
    path: "ver",
    component: VerComponent
  },
  {
    path: "modificar",
    component: ModificarComponent
  },
  {
    path: "eliminar",
    component: EliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
