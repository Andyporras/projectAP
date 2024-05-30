


function cargaGraficos(){

    console.log("SI ENTRO");

    

    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                
                dataSource: [
                    
                    { 'x': 'Hombres', y: 65, }, 
                    { 'x': 'Mujeres', y: 30, },
                    { 'x': 'Otro', y: 5 }
                ],
                dataLabel: {
                    visible: true,
                    position: 'Inside',
                },
                xName: 'x',
              
                yName: 'y'
                
            }
            
        ],
        background: "#fffa",
        width: '650', height: '350'
        
        
    });
    pie.appendTo('#container');


    

   
        var data = {
            header: ["Name", "Death toll"],
            rows: [
              ["Hombres", 65],
              ["Mujeres", 30],
              ["Otro", 5]
          ]}
    

    // create the chart
var chart = anychart.column();
 
// add the data

chart.data(data);
chart.container('containers');
chart.background("#fff0")

chart.draw();

   
}


//pie.appendTo('#container');