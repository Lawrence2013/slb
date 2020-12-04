import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      var filtered = [];
      var cities = ['Wisokyburgh', 'McKenziehaven'];
      data.forEach(function(user){
        if(user.address != null && cities.indexOf(user.address.city) > -1){
          filtered.push(user);
        }
      });
      this.users = filtered;
    }) 
  }
}
