
import * as Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface Props {
    color: string
}

export class TinyChart extends PureComponent<Props> {
//   static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

  constructor(props: Props){
    super(props)
    this.state = {
        data: [
   
            {
              name: 'Page A',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page B',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page C',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page D',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page E',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page F',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
            {
              name: 'Page G',
              uv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              pv: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
              amt: Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000,
            },
          ]
    }
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={this.state.data}>
        
          <Line type="monotone" dataKey="pv" stroke={this.props.color} strokeWidth={1.5} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}



export const ChartOne = ()=>{
  
    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
        
    }
    



 

    const options2 = {
        chart: {
            type: 'spline'
        },

        legend: {
            symbolWidth: 40
        },

        title: {
            text: 'Financial stocks holding total',
            align: 'left'
        },

        subtitle: {
            text: 'This chart do not represent real figures ',
            align: 'left'
        },

        yAxis: {
            title: {
                text: 'Percentage usage'
            },
            accessibility: {
                description: 'Percentage usage'
            }
        },

        xAxis: {
            title: {
                text: 'Time'
            },
            accessibility: {
                description: 'Time from December 2010 to September 2019'
            },
            categories: ['December 2010', 'May 2012', 'January 2014', 'July 2015', 'October 2017', 'September 2019']
        },

        tooltip: {
            valueSuffix: '%',
            stickOnContact: true
        },

        plotOptions: {
            // series: {
            //     point: {
            //         events: {
            //             click: function () {
            //                 window.location.href = this.series.options.website;
            //             }
            //         }
            //     },
            //     cursor: 'pointer',
            //     lineWidth: 2
            // }
        },

        series: [
            {
                name: 'Apple Inc',
                data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
                website: 'https://www.nvaccess.org',
                color: '#6b66e4',
                accessibility: {
                    description: 'This is the most used screen reader in 2019.'
                }
            }, {
                name: 'Tesla',
                data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
                website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
                dashStyle: 'ShortDashDot',
                color: '#c93d40'
            }, {
                name: 'Facebook',
                data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
                website: 'http://www.apple.com/accessibility/osx/voiceover',
                dashStyle: 'ShortDot',
                color: '#7ac07e'
            }, {
                name: 'Microsoft',
                data: [null, null, null, null, 21.4, 30.3],
                website: 'https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator',
                dashStyle: 'Dash',
                color: '#5682c0'
            }, {
                name: 'Walmart',
                data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
                website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
                dashStyle: 'ShortDot',
                color: '#b4c234'
            }, {
                name: 'Adobe',
                data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
                website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
                dashStyle: 'ShortDash',
                color:'#c41cc4'
            }
        ],
        credits:{
            enabled: false
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 550
                },
                chartOptions: {
                    chart: {
                        spacingLeft: 3,
                        spacingRight: 3
                    },
                    legend: {
                        itemWidth: 150
                    },
                    xAxis: {
                        categories: ['Dec. 2010', 'May 2012', 'Jan. 2014', 'July 2015', 'Oct. 2017', 'Sep. 2019'],
                        title: ''
                    },
                    yAxis: {
                        visible: false
                    }
                }
            }]
        }
    }

    return(
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options2}
            />
        </div>
    )
}