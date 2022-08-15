import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services!: Service[];

  constructor(private router:Router, private serviceService: ServicesService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.serviceService.getList().subscribe(data => this.services = data);
  }
  deleteService(id:number){
    if(confirm("Are you sure want to delete?")){
      this.serviceService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getList();
        }, 1000);
      })
    } 
  }

  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`services/${selectedService.id}`);
  }
}