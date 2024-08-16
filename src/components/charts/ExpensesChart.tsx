import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { ArrowUpward, ArrowDropDown } from '@mui/icons-material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpensesChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Expenses',
        data: [800, 600, 1060, 300, 500],
        backgroundColor: ['#00FF3F', '#00FF3F', '#000000', '#00FF3F', '#00FF3F'],
        borderRadius: 10,
        barThickness: 25,
        hoverBackgroundColor: ['#00FF3F', '#00FF3F', '#000000', '#00FF3F', '#00FF3F'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `+ $${tooltipItem.raw}`,
        },
        displayColors: false,
        backgroundColor: '#f8f9fa',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <Card sx={{ bgcolor: "#ffff", color: "black", borderRadius: "25px", height:"250px"}}>
      <CardContent>
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" className='font-semibold'>Expenses</Typography>
            <Button size="small" variant="contained" sx={{ bgcolor: '#CCFFCD', color: 'black', textTransform: 'none', borderRadius: '20px',
                '&:hover': {
                  bgcolor: '#d5d5d5',
                },
              }}
            >
              Week <ArrowDropDown fontSize="small" />
            </Button>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <ArrowUpward fontSize="small" sx={{ color: 'green', mr: 0.5 }} />
            <Typography variant="body2" sx={{ color: 'green' }}>+14.4%</Typography>
          </Box>
          <Box sx={{ height: "150px" }}>
            <Bar data={data} options={options} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpensesChart;
