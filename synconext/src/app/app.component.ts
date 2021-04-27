import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';
import { Users } from './Users';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:any;
  resultsLength: any;

  displayedColumns: string[] = ['id','building','city','state','lat','long','phon','email'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(
    public userService: AppService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = new MatTableDataSource<usersinterface>(data);
      this.users.sort=this.sort;
      this.resultsLength = data.length;
      this.users.paginator = this.paginator;
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
  }
}

export interface usersinterface {
  id: number;
  building: string;
  city: string;
  state: string;
  lat: number;
  long: number;
  phon: number;
  email: string
}
