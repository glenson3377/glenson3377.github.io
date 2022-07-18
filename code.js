//button enabler disabler
function begin(){ // executes when the start button is pushed
        index = 0;
        document.getElementById('data').rows["cell1"].innerHTML = dataRow("proccessing...");
        timer = setInterval(updateDisplay, Time_interval = 5000);
        document.getElementById('go').disabled = true; // disable the start button
        document.getElementById('stop').disabled = false; // enable the stop button
        console.log('start button disabled');
}

function stop(){ //executed when the stop button is pushed
        console.log('stop button disabled');
        clearInterval(timer);
        document.getElementById('go').disabled = false; // enable the start button
        document.getElementById('stop').disabled = true; // disable the stop button
}
class InputData{// class to make the data work
        constructor(
                time,
                latitude,
                longitude,
                gps,
                bmpsensor_altitude,
                bmpsensor_pressure,
                digsensor_temp,
                csssenson_temp,
                csssenson_eco2,
                csssenson_tvdc,
                uv,
                accelx,
                accely,
                accelz,
                magneticX,
                magneticy,
                magneticz,
                gyrox,
                gyroy,
                gyroz

        ){
                this.time = time;
                this.latitude = latitude;
                this.longitude = longitude;
                this.gps = gps;
                this.bmpsensor_altitude = bmpsensor_altitude;
                this.bmpsensor_pressure = bmpsensor_pressure;
                this.digsensor_temp = digsensor_temp;
                this.csssenson_temp = csssenson_temp;
                this.csssenson_eco2 = csssenson_eco2;
                this.csssenson_tvdc = csssenson_tvdc;
                this.uv = uv;
                this.accelx = accelx;
                this.accely = accely;
                this.accelz = accelz;
                this.magneticX = magneticX;
                this.magneticy = magneticy;
                this.magneticz = magneticz;
                this.gyrox = gyrox;
                this.gyroy = gyroy;
                this.gyroz = gyroz;
        }
}
function getData(){
        var loadedData = loadData();
        return loadedData
}
function dataRow(legend, value, units){
        msg = '<td>';
        msg += legend;
        msg += ": </td><td>";
        msg += value;
        msg += " " + units;
        msg += "</td>";
        return msg;
}
function updateDisplay(){
        var timeRead = data[index].time;
        if(timeRead >= 10){
                document.getElementById('data').rows["cell1"].innerHTML = dataRow("time elapsed", data[index].time,"seconds");
                document.getElementById('data').rows["cell2"].innerHTML = dataRow("latitude" ,data[index].latitude),"";
                document.getElementById('data').rows["cell3"].innerHTML = dataRow("longitude" ,data[index].longitude,'');
                document.getElementById('data').rows["cell4"].innerHTML = dataRow("gps" ,data[index].gps,'');
                document.getElementById('data').rows["cell5"].innerHTML = dataRow("bmpsensor_altitude" ,data[index].bmpsensor_altitude,'');
                document.getElementById('data').rows["cell6"].innerHTML = dataRow("bmpsensor_pressure" ,data[index].bmpsensor_pressure,'');
                document.getElementById('data').rows["cell7"].innerHTML = dataRow("digsensor_temp" ,data[index].digsensor_temp,'');
                document.getElementById('data').rows["cell8"].innerHTML = dataRow("csssenson_temp" ,data[index].csssenson_temp,'');
                document.getElementById('data').rows["cell9"].innerHTML = dataRow("csssenson_eco2" ,data[index].csssenson_eco2,'');
                document.getElementById('data').rows["cell10"].innerHTML = dataRow("csssenson_tvdc" ,data[index].csssenson_tvdc,'');
                document.getElementById('data').rows["cell11"].innerHTML = dataRow("uv" ,data[index].uv,'');
                document.getElementById('data').rows["cell12"].innerHTML = dataRow( "accelx",data[index].accelx,'');
                document.getElementById('data').rows["cell13"].innerHTML = dataRow("accely" ,data[index].accely,'');
                document.getElementById('data').rows["cell14"].innerHTML = dataRow("accelz" ,data[index].accelz,'');
                document.getElementById('data').rows["cell15"].innerHTML = dataRow("magneticX" ,data[index].magneticX,'');
                document.getElementById('data').rows["cell16"].innerHTML = dataRow("magneticy" ,data[index].magneticy,'');
                document.getElementById('data').rows["cell17"].innerHTML = dataRow("magneticz" ,data[index].magneticz,'');
                document.getElementById('data').rows["cell18"].innerHTML = dataRow("gyrox" ,data[index].gyrox,'');
                document.getElementById('data').rows["cell19"].innerHTML = dataRow("gyroy" ,data[index].gyroy,'');
                document.getElementById('data').rows["cell20"].innerHTML = dataRow("gyroz" ,data[index].gyroz,'');
        }
}