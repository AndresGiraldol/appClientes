import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-cliente',
  templateUrl: './no-cliente.component.html',
  styleUrls: ['./no-cliente.component.css']
})
export class NoClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  irHome() {
  this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
