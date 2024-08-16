import { AddCircle, AddCircleOutline, ArrowUpward, ArrowDownwardOutlined, CallMadeOutlined, ArrowDownward, AddOutlined, NearMe, FilterAlt, Sort } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import IncomeChart from "../components/charts/IncomeChart"
import visaIMG from '../assets/visa.png'
import USD from '../assets/USD.png'
import EUR from '../assets/EUR.png'
import ENG from '../assets/ENG.png'
import { userData } from "../data/transferUsers"
import { currency_data } from "../data/currencyMarketData"
import ExpensesChart from "../components/charts/expensesChart"
import IncomeCircleGraphCard from "../components/charts/incomeCircleChart"
import IncomeCircleGraphCard2 from "../components/charts/IncomeCircleChart2"

type Status = "paid" | "overdue" | "failed" | string;

const changeStatusColor = (status: Status) => {
  switch (status.toLowerCase()){
    case "paid":
      return {backgroundColor:'#CCFFCD', color:"#00B771"}
    case "overdue":
      return {backgroundColor:'#FFEBDD', color:"#FF6756"}
    case "pending":
      return {backgroundColor:'#FEFACD', color:"#D6B306"}
    default:
      return {backgroundColor:'#ffffff', color:"#000000"}
  }
}


const Dashboard = () => {
  return (
    <Box p={1} bgcolor="#f4f5f7" minHeight="100vh">
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{bgcolor:"#00FF6B",color:"black", borderRadius:"25px"}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <h1 className='text-xl font-semibold'>Total balance</h1>
                  <Typography variant="h4" mt={2} display="flex" alignItems="start">$20,000<span className="text-sm items-start">&nbsp;USD</span></Typography>
                </Box>
                <IconButton>
                  <AddCircle fontSize="large" sx={{color:"white", fontSize:"3rem"}}/>
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
                <Button sx={{backgroundColor:"white", color:"black", borderRadius:"25px", paddingX:"30px", paddingY:"10px"}}>Deposit&nbsp;<ArrowDownwardOutlined fontSize="inherit"/></Button>
                <Button sx={{backgroundColor:"black", color:"white", borderRadius:"25px", paddingX:"30px", paddingY:"10px"}}>Send&nbsp;<CallMadeOutlined fontSize="inherit"/></Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={6} lg={4}>
          <IncomeChart/>
        </Grid>

        
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{bgcolor:"#ffff",color:"black", borderRadius:"25px"}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <div>
                    <h1 className='text-xl font-semibold'>Your card</h1>
                    <p className="flex text-xs rounded-full justify-center w-14" style={{backgroundColor:"#DAE1FE"}}>Premium</p>
                  </div>
                </Box>
                <IconButton>
                  <AddCircleOutline fontSize="large" sx={{color:"black", fontSize:"3rem"}}/>
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Card sx={{bgcolor:"black",color:"white", height:"100px", borderRadius:"15px"}}>
                  <div className="flex p-3 items-center justify-between gap-10">
                    <h1 className="text-3xl">$2,900</h1>
                    <img src={visaIMG} alt="visa" className="h-5" />
                  </div>
                  <div className="flex justify-between px-5 mt-3">
                    <p className="">**** 1776</p>                  
                    <p className="">20/16</p>
                  </div>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} md={6} lg={2.6}>
          <IncomeCircleGraphCard percentage={75} color="#00FF6B" />
        </Grid>


        <Grid item xs={12} md={6} lg={2.6}>
          <IncomeCircleGraphCard2 percentage={75} color="#FF6756" />
        </Grid>
        

        <Grid item xs={12} md={6} lg={2.6}>
          <Card sx={{ color: "black", borderRadius: "25px" }}>
            <CardContent>
              <Box display="flex" justifyContent="center">
                <h1 className='text-xl mt-1 font-semibold'>Currencies Market</h1>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} px={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <img src={USD} alt="USD" className="h-10" />
                  <Box>
                    <Typography variant="h1" fontSize="15px">USD</Typography>
                    <Typography variant="subtitle1" fontSize="12px" color="#9c8e8e">0.73</Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h1" fontSize="15px">105.27</Typography>
                  <Box display="flex" alignItems="center">
                    <ArrowUpward sx={{ color: 'green', mr: 0.5, fontSize: "10px" }} />
                    <Typography variant="subtitle1" fontSize="12px" sx={{ color: 'green' }}> +14.4%</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} px={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <img src={EUR} alt="EUR" className="h-10" />
                  <Box>
                    <Typography variant="h1" fontSize="15px">EUR</Typography>
                    <Typography variant="subtitle1" fontSize="12px" color="#9c8e8e">-0.0056</Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography variant="h1" fontSize="15px">1.0656</Typography>
                  <Box display="flex" alignItems="center">
                    <ArrowDownward sx={{ color: 'red', mr: 0.5, fontSize: "10px" }} />
                    <Typography variant="subtitle1" fontSize="12px" sx={{ color: 'red' }}> -0.67%</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} md={6} lg={4.2}>
          <Card sx={{color:"black", borderRadius:"25px"}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" px={1}>
                  <h1 className='text-xl mt-1 font-semibold'>Quick Transfer</h1>
                  <h2 className='text-md mt-1 font-semibold text-blue-600'>View all</h2>
              </Box>
              <Box display="flex" alignItems="center" gap={3} mt={2}>
                {userData.map((user) => (
                  <Box key={user.name} sx={{display:"flex", flexDirection:"column", alignItems:"center",backgroundColor:"#FFEBDD", padding:"5px", paddingY:"20px", borderRadius:"25px"}}>
                    <img src={user.image} alt="EUR" className="h-10" />
                    <Typography fontSize="12px">{user.name}</Typography>
                  </Box>
                ))
              }
                  <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px", paddingY:"32px", border:"2px solid #9c8e8e",borderRadius:"25px"}}>
                    <AddOutlined/>
                  </Box>
              </Box>
              <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingY:"10px", paddingX:"10px", marginTop:"10px", backgroundColor:"#F3F4F7",borderRadius:"15px"  }}>                
                <Box sx={{display:"flex",gap:"5px"}}>
                  <img src={ENG} alt="EUR" className="h-10" />
                  <h1 className="text-3xl">$2,900</h1>
                </Box>
                <Box sx={{backgroundColor:"white", borderRadius:"50%", padding:"10px"}}>
                  <NearMe/>
                </Box>
              </Box>
            </CardContent>
          </Card> 
        </Grid>
        

        <Grid item xs={12} md={6} lg={7.8} sx={{marginTop:"-60px"}}>
        <Card sx={{color:"black", borderRadius:"25px"}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" px={1}>
                  <h1 className='text-xl mt-1 font-semibold'>Currencies Market</h1>
                  <h2 className='flex gap-3 text-md cursor-pointer'><FilterAlt/><Sort/></h2>
              </Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell  sx={{color:"#9c8e8e"}}>Name</TableCell>
                    <TableCell  sx={{color:"#9c8e8e"}}>Amount</TableCell>
                    <TableCell  sx={{color:"#9c8e8e"}}>Date</TableCell>
                    <TableCell  sx={{color:"#9c8e8e"}}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currency_data.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell  sx={{display:"flex",alignItems:"center", gap:"5px"}}><img src={item.image} className="h-6" />{item.name}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell style={changeStatusColor(item.status)}> • {item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card> 
        </Grid>


        <Grid item xs={12} md={6} lg={4.2}>
          <ExpensesChart/>
        </Grid>


      </Grid>
    </Box>
  )
}

export default Dashboard