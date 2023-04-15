import { Component } from '@angular/core';
import { ApiGatewayService } from '../services/api-gateway.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  constructor(private apiGateway: ApiGatewayService) {}

  callMe(event: Event){
    event.preventDefault();
    console.log("call me from API COMPONEnt CALLED");
    this.apiGateway.apiPost();
  }
}
