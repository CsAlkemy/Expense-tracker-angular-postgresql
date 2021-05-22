import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IPost {
  id: string;
  TransType?: string;
  details?: string;
  amount?: number;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  dataSource: MatTableDataSource<IPost>;
  expenses: IPost[];
  columns: string[] = ['id', 'TransType', 'details', 'amount'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {
    this.expenses = [
      {
        id: '1',
        TransType: 'Income',
        details: 'Salary',
        amount: 5500,
      },
      {
        id: '2',
        TransType: 'Income',
        details: 'Tee Shirt',
        amount: 500,
      },
      {
        id: '3',
        TransType: 'Income',
        details: 'Salary',
        amount: 54500,
      },
    ];
    this.dataSource = new MatTableDataSource(this.expenses);
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
