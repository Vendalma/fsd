import Chart from 'chart.js';
import './donut-chart.scss';

class DonutChart {
  constructor(container, options) {
    this.container = container;
    this.items = options.items.reverse();
    this.text = options.text;
    this.totalCount = 0;
    this.chartContainer = this.container.getContext('2d');
    this.initDiagram();
    this.createText();
  }

  getOptions(optionsType) {
    const result = [];
    this.items.forEach((item) => {
      if (optionsType === 'count') {
        this.totalCount += item.count;
        result.push(item.count);
      } else if (optionsType === 'text') {
        result.push(item.text);
      } else if (optionsType === 'color') {
        const chartColor = this.chartContainer.createLinearGradient(
          0,
          0,
          0,
          600,
        );
        chartColor.addColorStop(0, item.color[0]);
        chartColor.addColorStop(1, item.color[1]);
        result.push(chartColor);
      }
    });
    return result;
  }

  createText() {
    const chartText = this.container.parentElement.querySelector(
      '.js-chart__text',
    );
    const chartTextCount = this.container.parentElement.querySelector(
      '.js-chart__count',
    );
    chartText.textContent = `${this.setRightName()}`;
    chartTextCount.textContent = `${this.totalCount}`;
    this.setTextPosition();
  }

  setTextPosition() {
    const textContainer = this.container.parentElement.querySelector(
      '.js-chart__info',
    );
    textContainer.style.left = `${
      (this.container.offsetWidth - textContainer.offsetWidth) / 2
    }px`;
  }

  setRightName() {
    const calcTotal = Math.abs(this.totalCount) % 100;
    const calcRemainder = calcTotal % 10;
    if (calcTotal > 10 && calcTotal < 20) {
      return this.text[2];
    }
    if (calcRemainder > 1 && calcRemainder < 5) {
      return this.text[1];
    }
    if (calcRemainder === 1) {
      return this.text[0];
    }
    return this.text[2];
  }

  initDiagram() {
    new Chart(this.container, {
      type: 'doughnut',
      data: {
        labels: this.getOptions('text'),
        datasets: [
          {
            data: this.getOptions('count'),
            backgroundColor: this.getOptions('color'),
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutoutPercentage: 90,
        responsive: false,
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
          custom: this.createCustomLabel,
        },
      },
    });
  }

  createCustomLabel({
    opacity, yAlign, body, caretX, caretY,
  }) {
    let tooltipEl = document.getElementById('chartjs-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      document.body.appendChild(tooltipEl);
      tooltipEl.classList.add('chart__diagram-label');
    }

    if (opacity === 0) {
      tooltipEl.classList.add('chart__diagram-label_hidden');
    } else {
      tooltipEl.classList.remove('chart__diagram-label_hidden');
    }

    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (yAlign) {
      tooltipEl.classList.add(yAlign);
    } else {
      tooltipEl.classList.add('no-transform');
    }

    if (body) {
      const tableRoot = tooltipEl.querySelector('table');
      body.forEach((bodyElem) => {
        tableRoot.innerHTML = `<tbody><tr><td>${bodyElem.lines[0]}</td></tr></tbody>`;
      });
    }
    /* eslint-disable-next-line */
    const position = this._chart.canvas.getBoundingClientRect();
    tooltipEl.classList.add('chart__diagram-label');
    tooltipEl.style.left = `${position.left + window.pageXOffset + caretX}px`;
    tooltipEl.style.top = `${position.top + window.pageYOffset + caretY}px`;
  }
}
export default DonutChart;
