import React from "react";
// import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
 import { Bar} from 'react-chartjs-2';
const controllers = Object.values(ChartJS).filter(
    (chart) => chart.id !== undefined
  );

ChartJS.register(...registerables);
export default function Chartt({arrData}){
    return(
        <>
        <Bar
        
        // style={{position: 'relative',height:'400px', width:'80%'}}
        data={{
       labels:['firstDay','secondDay','thirdDay','fourthDay','fifthDay'],
       datasets:[{
        label: 'Temprature aver days',
           data:arrData,
           backgroundColor:[
               'red','blue','black','yellow','green'
           ],
           borderColor:[
            'red','blue','black','yellow','green'
           ],
           borderWidth:2,
           barThickness:55,
           width:'300px',
           height:'300px'
       }]
      


        }
    }
    //      height={100}
    // width={100}
        options={{
            aspectRatio:4,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        
        
        
        }}
        
        ></Bar>
        </>
    )
}