import { Options } from 'highcharts';

export const lineSpendingsOptions: Options = {
  chart: {
    styledMode: true,
    type: 'line',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: true,
      },
    },
    line: {},
  },
  legend: {
    enabled: false,
  },
  title: {
    text: null,
  },
  yAxis: {
    visible: true,
  },
  xAxis: {
    visible: true,
    categories: [
      '1 May',
      '2 May',
      '3 May',
      '4 May',
      '5 May',
      '6 May',
      '7 May',
      '8 May',
      '9 May',
      '10 May',
      '11 May',
      '12 May',
    ],
  },
  series: [
    {
      type: 'line',
      data: [
        { name: '1 may 21', y: 50 },
        { name: '2 may 21', y: 200 },
        { name: '3 may 21', y: 20 },
        { name: '4 may 21', y: 120 },
        { name: '5 may 21', y: 40 },
        { name: '6 may 21', y: 40 },
        { name: '7 may 21', y: 60 },
        { name: '8 may 21', y: 250 },
        { name: '9 may 21', y: 46 },
        { name: '10 may 21', y: 80 },
        { name: '11 may 21', y: 90 },
        { name: '12 may 21', y: 20 },
      ],
    },
  ],
};
