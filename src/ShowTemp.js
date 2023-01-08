import React from 'react'
import './styles.css'

function ShowTemp({text,foredata}) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const showTime = current.getHours() 
        + ':' + current.getMinutes() ;
        
    const conversion =(value)=>{

        if(value==0)
        {
            value=300;
        }
        return (((value - 273.15)).toFixed(1))
    }
    const day=(val,dayadd)=>{
        const d = new Date();

        let dayInDig=d.getDay();
        // console.log("day",day);
        //     console.log("enterng")
            
            if(dayInDig+dayadd === 0){
                return "Sunday";
              }
            else if(dayInDig+dayadd === 1){
              return "Monday";
            }
            else if(dayInDig+dayadd === 2){
              return "Tuesday";
            }
            else if(dayInDig+dayadd === 3){
              return "Wednesday";
            }
            else if(dayInDig+dayadd === 4){
              return "Thursday";
            }
            else if(dayInDig+dayadd === 5){
              return "Friday";
            }
            else if(dayInDig+dayadd === 6){
              return "Saturday";
            }
            
          
       
    }
    return (
        

        <div class="container">
            <div class="card">
                <div>
                    <div class="col-12 ">
                        <div class="row top">
                            <div class="col bold location">{text.location}</div>
                            <div class="col location">{date}</div>
                            {/* <div class="col">Rain map</div> */}
                        </div>
                        <div class="row">
                            <div class="col-7 temp">{conversion(text.temp)}&deg;</div>
                            <div class="col-5 time "><p>{showTime}</p><h2><b>{day(date,0)}</b></h2></div>
                        </div>
                        <div class="row bottom">
                            <div class="col"><hr/></div>
                            <div class="col border">
                                <div class="row">{day(date,1)}</div>
                                <div class="row"><b>{conversion(foredata.day2temp)}&deg;</b></div>
                            </div>
                            <div class="col">
                                <div class="row">{day(date,2)}</div>
                                <div class="row"><b>{conversion(foredata.day3temp)}&deg;</b></div>
                            </div>
                            <div class="col">
                                <div class="row">{day(date,3)}</div>
                                <div class="row"><b>{conversion(foredata.day4temp)}&deg;</b></div>
                            </div>
                            <div class="col">
                                <div class="row">{day(date,4)}</div>
                                <div class="row"><b>{conversion(foredata.day5temp)}&deg;</b></div>
                            </div>
                            <div class="col">
                                <div class="row">{day(date,5)}</div>
                                <div class="row"><b>{conversion(foredata.day6temp)}&deg;</b></div>
                            </div>
                            <div class="col">
                                <div class="row">{day(date,6)}</div>
                                <div class="row"><b>{conversion(foredata.day7temp)}&deg;</b></div>
                            </div>
                           
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;
