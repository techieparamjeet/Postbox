import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from './shared/interfaces/post.interface';
import { DataService } from './shared/services/data.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './shared/components/dialog.component';
import { Subscription, interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  dataSource : any;
  title = 'postbox';
  postSub: Subscription;
  numbers = interval(1000);
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService : DataService, public dialog: MatDialog){}

  ngOnInit() {
    this.displayedColumns = ['title', 'url', 'created_at', 'author'];
    this.postSub = interval(10000).pipe(
      startWith(0),
      switchMap(() => this.dataService.getPosts())
      ).subscribe((res : Post) => {
        console.log(res.hits);
        this.dataSource = new MatTableDataSource<any>(res.hits);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showData(elem){
    this.dialog.open(DialogComponent, {
      data: elem
    });
  }

  onDestroy(){
    this.postSub.unsubscribe();
  }
}
