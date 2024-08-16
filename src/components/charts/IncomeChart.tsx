import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Line as LineJS, Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Income',
      data: [400, 300, 1060, 200],
      borderColor: '#000',
      pointBackgroundColor: '#00c853',
      pointBorderColor: '#00c853',
      pointRadius: 6,
      fill: {
        target: 'origin',
        above: '#00c85320',
      },
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const options: ChartJS.ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
};

const IncomeChartCard: React.FC = () => {
  return (
    <Card sx={{ bgcolor: "#ffff", color: "black", borderRadius: "25px", height: "210px" }}>
      <CardContent>
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="h1" className='text-xl font-semibold'>Income</Typography>
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: '#CCFFCD',
                color: 'black',
                textTransform: 'none',
                borderRadius: '20px',
                '&:hover': {
                  bgcolor: '#d5d5d5',
                },
              }}
            >
              Month <ArrowUpwardIcon fontSize="small" />
            </Button>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <ArrowUpwardIcon fontSize="small" sx={{ color: 'green', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: 'green' }}>+14.4%</Typography>
          </Box>
          <Line className='cursor-pointer' data={data} options={options} height={100} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IncomeChartCard;
