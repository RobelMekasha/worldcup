//alert('done')// Data retrieved from:

var dataa  = [];
var dataa2  = [];
var dataa3  = [];
var dataa4  = [];

function save1() {
   dataa.push({
        s1: document.getElementById("point1").value,
        s2: document.getElementById("point2").value,
        s3: document.getElementById("point3").value,
        s4: document.getElementById("point4").value,
       
      });   
}

function addData1() {
       
  var xValue = ["Italy", "Italy", "Italy", "Italy"];
  var yValue = [dataa[0].s1,dataa[0].s2,dataa[0].s3,dataa[0].s4];
  var barColors = ["red", "green","blue","orange"];        
    new Chart( "myChart",
        {
        type: "bar",
        data: {
          labels: xValue,
          datasets: [{
            backgroundColor: barColors,
            data: yValue
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Group 1"
          }
        }
      });
  }

    
    