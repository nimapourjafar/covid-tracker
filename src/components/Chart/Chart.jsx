import React, {useState,useEffect} from  'react'
import {fetchDailyData }from '../../Api/index'
import {Line,Bar} from 'react-chartjs-2'
import style from './Chart.module.css'

export default function Chart({data,country}) {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialDailyData = await fetchDailyData();
    
          setDailyData(initialDailyData);
        };
    
        fetchMyAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: 'red',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#000000',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              }],
            }}
          />
        ) : null
      );

    const barChar = (
      data.confirmed?
      (
        <Bar data ={{
          labels: ['Infected','Recovered','Deaths'],
          datasets:[{
            label:'People',
            backgroundColor:['rgba(225,0,0,0.5)','rgba(0,0,225,0.5)','rgba(0,0,0,0.5)'],
            data:[data.confirmed.value,data.recovered.value,data.deaths.value]
          }]

        }}
        options={{
          legend:{display:false},
          title:{display:true, text:{country}}
        }}/>

      ): null
    )
    return (
        <div className={style.container}>
            {country ? barChar : lineChart}
        </div>
    )
}
