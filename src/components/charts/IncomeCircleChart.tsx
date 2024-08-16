import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { AlignVerticalBottomOutlined } from '@mui/icons-material';

Chart.register(ArcElement, Tooltip, Legend);

interface IncomeCircleGraphProps {
  percentage: number;
  color: string;
}

const IncomeCircleGraphCard: React.FC<IncomeCircleGraphProps> = ({ percentage, color }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, '#E5E7EB'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  return (
    <Card sx={{ color: "black", borderRadius: "25px" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <div>
              <AlignVerticalBottomOutlined
                sx={{
                  color:"#00B771",
                  backgroundColor: "#CCFFCD",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  padding: "10px",
                }}
              />
            </div>
            <h1 className="text-xl mt-1 font-semibold">Income</h1>
          </Box>
            <Box sx={{ width: 80, height: 80 }}> 
                <Doughnut data={data} options={{ cutout: '75%', rotation: -90 }} />
            </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h4" mt={2} display="flex" alignItems="start">$1,040</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          
         
        </Box>
      </CardContent>
    </Card>
  );
};

export default IncomeCircleGraphCard;
