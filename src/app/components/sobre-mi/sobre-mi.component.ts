import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  usuario: usuario = new usuario("","","");

  constructor(public usuarioService: UsuarioService){}

    ngOnInit(): void {
      this.usuarioService.getusuario().subscribe(data => {this.usuario = data})
  }

}  