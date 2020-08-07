import React, {useContext} from 'react'
import './Styles/Dashboard.css'
import {DataContext} from './context'
import { Line,Doughnut } from 'react-chartjs-2';


const Dashboard = () => {

    const [state] = useContext(DataContext)
    


    const data = {
        labels: ['2014' ,'2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'My Money',
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgb(8, 29, 63)',
            borderColor: ' rgb(8, 29, 63)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50000,78000, 78000, 94000, 98000, 97000, 82000, 78000]
          }
        ]
      };

console.log('dashboard rendered')
return(



<React.Fragment>
<div  className="main-div-Dashboard"><span id="heading">Dashboard !</span></div>
<h1 id="moneytitle">₪125,235</h1>
<div className="data-container">
    <div id="line">
<Line data={data} />
<Line data={data} />
</div>
<div id="pie">
<Line data={data} />
<Line data={data} />

</div>
</div>

</React.Fragment>
)

    }




export default Dashboard;