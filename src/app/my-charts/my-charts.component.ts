import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from '../helpers/donutChartOptions';
import { lineSpendingsOptions } from '../helpers/lineSpendingsOptions';
import { lineIncometions } from '../helpers/lineIncomeHelper';

@Component({
  selector: 'app-my-charts',
  templateUrl: './my-charts.component.html',
  styleUrls: ['./my-charts.component.css'],
})
export class MyChartsComponent implements OnInit {
  donutChart = new Chart(donutChartOptions);
  areaChart = new Chart(lineSpendingsOptions);
  incomeChart = new Chart(lineIncometions);
  constructor() {}

  ngOnInit(): void {}
}
