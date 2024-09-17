import {html} from "lit";
import {customElement, property} from "lit/decorators.js";
import ApexCharts from 'apexcharts';
import {PropertyValues} from "@lit/reactive-element";
import {ZincElement} from "@/zinc-element";

type ChartType = 'area' | 'bar' | 'line'

@customElement('zn-data-chart')
export class DataChart extends ZincElement
{
  @property() type: ChartType = 'bar';
  @property({type: Array}) data: any[] = [];
  @property({type: Array}) categories: string | string[] = '';

  @property() xAxis: string;

  // Live
  @property({type: Boolean}) live = false;
  @property({attribute: 'data-url', type: String}) dataUrl = '';
  @property({attribute: 'live-interval', type: Number}) liveInterval = 1000;

  private chart: ApexCharts;

  protected firstUpdated(_changedProperties: PropertyValues)
  {
    // Setup Chart and render it
    const options = {
      chart: {
        type: this.type,
        toolbar: {show: false},
        height: '250px',
        fontFamily: '"Inter", sans',
        animations: {},
        events: {}
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 1,
        strokeWidth: 0,
        hover: {
          sizeOffset: 2
        }
      },
      colors: ["#8967ef", "#6483F2", "#29bab5", "#3F51B5", "#9C27B0", "#ff6c9c", "#6836F5", "#47D6D6"],
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '12px',
        fontFamily: '"Inter", sans',
        fontWeight: 400,
        labels: {
          colors: '#72619F',
        },
        markers: {
          size: 5,
          shape: 'circle',
        },
      },
      stroke: {
        width: 1.5
      },
      fill: {
        type: 'solid',
        opacity: this.type === 'area' ? 0.1 : .8
      },
      series: this.data,
      xaxis: {}
    };

    if(this.xAxis)
    {
      options.xaxis = {
        type: this.xAxis,
      };
    }
    else
    {
      options.xaxis = {
        categories: this.categories,
      };
    }

    if(this.live)
    {
      options.chart.animations = {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 400
        }
      };

      options.chart.events = {
        animationEnd: function (chartCtx, opts)
        {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();

          // check animation end event for just 1 series to avoid multiple updates
          if(opts.el.node.getAttribute('index') === '0')
          {
            window.setTimeout(function ()
            {
              chartCtx.updateOptions({
                series: [{
                  data: newData1
                }, {
                  data: newData2
                }],
              }, false, false);
            }, 300);
          }

        }
      };
    }

    if(!this.chart)
    {
      this.chart = new ApexCharts(this.shadowRoot?.getElementById('chart'), options);
      this.chart.render();
    }


    super.firstUpdated(_changedProperties);
  }


  protected render(): unknown
  {
    return html`
      <div id="chart"></div>
    `;
  }

}
