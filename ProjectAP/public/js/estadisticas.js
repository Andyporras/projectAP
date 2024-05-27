
function cargaGraficos(){
    
    var pie = new ej.charts.AccumulationChart({
        //Initializing Series
        series: [
            {
                
                dataSource: [
                    
                    { 'x': 'Chrome', y: 37, }, 
                    { 'x': 'UC Browser', y: 17, },
                    { 'x': 'iPhone', y: 19 },
                    { 'x': 'Others', y: 4 }, 
                    { 'x': 'Opera', y: 11 },
                    { 'x': 'Android', y: 12 }
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
              ["opcion1", 150],
              ["opcion2", 170],
              ["opcion3", 190]
          ]}
    

    // create the chart
var chart = anychart.column();
 
// add the data
chart.title("Titulo Diagrama")
chart.data(data);
chart.container('containers');
chart.background("#fff0")

chart.draw();

   
}


//pie.appendTo('#container');