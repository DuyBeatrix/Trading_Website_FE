import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      lable: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      lable: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      lable: "1 Month",
      value: 30,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY_3",
      key: "3 Month Time Series",
      lable: "3 Month",
      value: 90,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY_6",
      key: "6 Month Time Series",
      lable: "6 Month",
      value: 180,
    },
    {
      keyword: "DIGITAL_CURRENCY_YEARLY",
      key: "Yearly Time Series",
      lable: "1 Year",
      value: 365,
    },
];

const StockChart = () => {
    const [activeLable, setActiveLable] = useState("1 Day");

    const searies = [
        {
            data : [
                [1738314229222, 104030.896044751],
                [1738318115249, 104310.044062001],
                [1738321433757, 104274.533892465],
                [1738325038237, 104740.661949552],
                [1738328619917, 104668.685974259],
                [1738332238995, 104614.284460025],
                [1738335837258, 104475.413085851],
                [1738339431787, 105480.453945175],
                [1738343004091, 105071.259454257],
                [1738346512530, 104623.761342953],
                [1738350217911, 102524.215207325],
                [1738353822567, 102310.355866336],
                [1738357426250, 101598.163727119],
                [1738361027520, 101921.936191401],
                [1738364563624, 102231.128376945],
                [1738368221032, 102404.933761079],
                [1738371835213, 102470.384028876],
                [1738375433898, 102512.466986956],
                [1738378938060, 102403.779773004],
                [1738382640119, 102249.729376457],
                [1738386230170, 102293.876363077],
                [1738389832868, 102475.681015846],
                [1738393414749, 102392.608853663],
                [1738396904168, 102185.387562059],
                [1738400432068, 101992.511776799],
                [1738404118541, 101615.248501444],
                [1738407809726, 101592.669908623],
                [1738411407151, 102019.515483717],
                [1738415294013, 102149.951545159],
                [1738418503267, 101860.22271649],
                [1738422215304, 101823.149840916],
                [1738425826677, 102108.349047974],
                [1738429457276, 101882.431461168],
                [1738433032509, 102239.737952376],
                [1738436628670, 101992.193285499],
                [1738440518590, 101476.280848766],
                [1738443732714, 101341.211445171],
                [1738447601288, 101393.694789538],
            ]
        }
    ]
    
    const options = {
        chart : {
            id : "area-datetime",
            type : "area",
            height: 350,
            zoom : {
                autoScaleYaxis : true
            }
        },
        dataLabels : {
            enabled : false
        }, 
        xaxis : {
            type : "datetime",
            tickAmount : 6
        },
        colors: ["#758AA2"],
        markers : {
            colors : ["#FFF"],
            strokeColor : "#FFF",
            size : 0,
            strokeWidth : 1,
            style : "hollow"
        },
        tooltip : {
            theme : "dark"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 1, 
                opacityTo: 1,
                colorStops: [
                    { offset: 0, color: "#FFFFFF", opacity: 1 },  
                    { offset: 100, color: "#FFFFFF", opacity: 1 } 
                ]
            }
        },
        
        grid : {
            borderColor : "#47535E",
            strokeDashArray : 4, 
            show : true
        }
    }

    const handleActiveLable = (value) => {
        setActiveLable(value);
    }

    return (
        <div>
            <div className="space-x-3">
                {timeSeries.map((item) => <Button 
                    key={item.lable} 
                    onClick = {() => handleActiveLable(item.lable)}
                    variant={activeLable == item.lable ? "" : "outline"}
                >
                    {item.lable}
                </Button>)}
            </div>
            <div id="chart-timelines">
                <ReactApexChart options={options} series={searies} height={450} type="area"/>
            </div>
        </div>
    )
}

export default StockChart