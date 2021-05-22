import { Options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '90%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '$540',
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: 'Fri', y: 50, color: '#eeeeee' },
        { name: 'Sat', y: 200, color: '#393e46' },
        { name: 'Sun', y: 20, color: '#393f46' },
        { name: 'Mon', y: 120, color: '#323e46' },
        { name: 'Tue', y: 40, color: '#00adb5' },
        { name: 'Wed', y: 50, color: '#00adb5' },
        { name: 'The', y: 60, color: '#00adb5' },
      ],
    },
  ],
};
