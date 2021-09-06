import React from "react";

import { Line, Pie } from "react-chartjs-2";

function PieChartCreate(props) {
    let labels = [];
    let data = [];
    if(props != null && props.data != null) {
        labels = props.data.map(element => { return element.title});
        data = props.data.map(element => { return element.totalInventory});
    }
    const pieData = {

        labels: labels,
        datasets: [
            {
                label: 'Inventory Available',
                data: data,
                backgroundColor:[
                    "#FFAEBC",
                    "#A0E7E5",
                    "#B4F8C8",
                    "#FBE7C6",
                    "#013A20",
                    "#478C5C",
                    "#BACC81",
                    "#CDD193"
                ]

            }
        ]
    }

    return (
        <div>
            <Pie data = {pieData} />
        </div>
        
    )
}

export default PieChartCreate