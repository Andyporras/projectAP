


function cargaGraficos(flag){

    console.log("SI ENTRO");
    document.getElementById("containers").innerHTML = "";  
    document.getElementById("container").innerHTML = "";
      
    if(flag == 1|| flag == null){
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
    }else{
        var pie = new ej.charts.AccumulationChart({
            //Initializing Series
            series: [
                {
                    
                    dataSource: [
                        
                        { 'x': 'Costarricense', y: 3, }, 
                        { 'x': 'Americano', y: 1, }
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

    }
    pie.appendTo('#container');


    

    if (flag == 1){
        var data = {
            header: ["Name", "Death toll"],
            rows: [
              ["Hombres", 65],
              ["Mujeres", 30],
              ["Otro", 5]
          ]}
    
    }else{
        var data = {
            header: ["Name", "Death toll"],
            rows: [
              ["Costarricense", 3],
              ["Americano", 1]
          ]}
    }
    // create the chart
var chart = anychart.column();
 
// add the data

chart.data(data);
chart.container('containers');
chart.background("#fff0")

chart.draw();

   
}


//pie.appendTo('#container');