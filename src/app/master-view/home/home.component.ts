import { Component, OnInit } from '@angular/core';
import { SwaggerPetstoreOpenAPI301Service } from '../../services/swagger-petstore-open-api301.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public swaggerPetstoreOpenAPI301PetFindByStatus: any = null;

  constructor(
    private swaggerPetstoreOpenAPI301Service: SwaggerPetstoreOpenAPI301Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.swaggerPetstoreOpenAPI301Service.getPetFindByStatus().subscribe(data => this.swaggerPetstoreOpenAPI301PetFindByStatus = data);
  }
}
