import { Options } from 'highcharts';

export const lineIncometions: Options = {
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
    categories: ['1 May', '4 May', '5 May', '6 May', '7 May'],
  },
  series: [
    {
      type: 'line',
      data: [
        { name: '1 may 21', y: 500 },
        { name: '4 may 21', y: 5000 },
        { name: '5 may 21', y: 30000 },
        { name: '6 may 21', y: 1200 },
        { name: '7 may 21', y: 6000 },
      ],
    },
  ],
};
