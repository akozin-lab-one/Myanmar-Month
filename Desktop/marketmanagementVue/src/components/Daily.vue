<template>
<Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        const dailyIncomeData = [100, 150, 120, 180, 200, 170, 220, 190, 250, 200, 150, 120];
        const chartData = {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12'],
            datasets: [
                {
                    label: 'Daily Income',
                    data: dailyIncomeData,
                    backgroundColor: '#ff6384',
                    borderColor: '#ff6384',
                    borderWidth: 1
                }
            ]
        };
        return {
            chartData,
            chartOptions: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    }
}
</script>