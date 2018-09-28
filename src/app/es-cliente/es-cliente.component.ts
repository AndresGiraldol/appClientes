import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-es-cliente',
  templateUrl: './es-cliente.component.html',
  styleUrls: ['./es-cliente.component.css']
})
export class EsClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  irConfirmarDatos() {

  this.router.navigate(['/confirmarDatos']);
 // this.router.navigate(['http://localhost:4201/']);
  }

  ngOnInit() {
  }

}
