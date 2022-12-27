import { InputValue } from "graphql";
import React, { useEffect, useState} from "react";
import { Input, InputGroup, InputGroupText} from 'reactstrap'
import Graph from "../Graph/graphs";
import { VictoryBar, Bar, VictoryChart, VictoryGroup } from 'victory';


const ROICalc = () => {
  
  const [percent, setPercents] = useState(["This is a world"]);
  const [services, setServices] = useState([])
  const [listservices, setListServices] = useState([])

  const inputs = [
      {service: "Depression Screen",
        medicareReimb: true, 
        medicaidReim: true,
        commericalReimb: true,
        Reimbursement: 11.44,
        caprate: 0,
        potential: 0,
        id: 1
      },
      {service: "Alcohol Screen",
      medicareReimb: true, 
      medicaidReim: true,
      commericalReimb: true,
      Reimbursement: 11.44,
      caprate: 0,
      potential: 0,
      id: 2
      },
      {service: "Ankle Brachial Index",
      medicareReimb: true, 
      medicaidReim: true,
      commericalReimb: true,
      Reimbursement: 84,
      caprate: 0,
      potential: 0,
      id:3
      },
  {service: "Annual Wellness Visit",
      medicareReimb: true, 
      medicaidReim: true,
      commericalReimb: true,
      Reimbursement: 125,
      caprate: 0,
      id: 4
   }];


   const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

      const handleInput = event => {
        setServices(event.target.value)
        
      }      


      function handleSubmit () {
        setListServices()
        console.log(listservices)
      }
    


      useEffect(() => {
        const handleInput = event => {
          setServices(event.target.value)
        }  
        console.log("new console log" + services)
      }, [services])
      

      function handleClick() {
        let strrep = services.replace("Services","")
        let newint = parseInt(strrep)
        
        
        setListServices([...listservices, newint])
        console.log(listservices)
        setValorPerf([
          { x: "Alc Screen",  y: 11.44 * .8 * 4000 }, 
          { x: "Depression Screen", y: 11.44 * .8 * 4000 }, 
          { x: "ABI", y: 85 * .8 * 2000 *.35 },
          {x: "Annual Wellness Visit", y: 125 * .8 * 2000}
        ]);
        setCurrPerf([
          { x: "Alc Screen",  y: listservices[0]/100 * 4000 *11.44 }, 
          { x: "Depression Screen", y: listservices[1] /100 * 4000 *11.44 }, 
          { x: "ABI", y: listservices[2] / 100 * 85 * 2000 * .35 },
          {x: "Annual Wellness Visit", y: listservices[3] / 100 * 2000 * 125}
        ])

        setMakeMunay(formatter.format(264016 - listservices[0]/100 * 4000 *11.44  - listservices[1] /100 * 4000 *11.44 -listservices[2] / 100 * 85 * 2000 * .35 -listservices[3] / 100 * 2000 * 125) )
      }



      function handleClick2() {
        setListServices([...listservices, {services}])
        console.log("newclick" + listservices)
      }

      const results = "Get your results!"
      
      function changeWorld(){
        percent === "This is a world" ? setPercents("This is not a world") : setPercents("This is a world")
      }

      const [currperf, setCurrPerf] = useState(
        [{ x: "Alc Screen",  y: 0 }, 
        { x: "Depression Screen", y: 0 }, 
        { x: "ABI", y: 0 },
        {x: "Annual Wellness Visit", y: 0}]);

        const [valorperf, setValorPerf] = useState(
          [{ x: "Alc Screen",  y: 0 }, 
          { x: "Depression Screen", y: 0 }, 
          { x: "ABI", y: 0 },
          {x: "Annual Wellness Visit", y: 0}]);



          const [makemunay, setMakeMunay] = useState(0) 

      return (
        
        <div >
            <p>Please select each service your clinic is currently providing, and indicating at what percent:</p>
          {inputs.map(input =>{
            return(

              <InputGroup>
                <InputGroupText>
                  {/* <Input 
                  key={input.id}
                  addon
                  aria-label="Checkbox for following text input"
                  type="checkbox"
                  onChange={handleInput}>
                  </Input> */}
                </InputGroupText>
                <Input 
                placeholder={input.service} 
                onChange={handleInput}/>
                <button
                onClick={handleClick}
               >
                  Submit</button>
              </InputGroup> 
            )
          })
     
        }  <button
            onClick={handleClick}
            value="FinalSubmit"
            label= {results}>
              {results}
          </button>
          <div>
            
          <VictoryChart>
            <VictoryGroup offset={10}
              colorScale={"qualitative"}
            >
              <VictoryBar
                
                data={currperf}
        
              />

              <VictoryBar
                data={valorperf}
              />
            </VictoryGroup>
          </VictoryChart>
          </div>
          <h2> You could earn an additional ${makemunay} per provider by partnering with Valor!</h2>


        </div>

    
    )}
      

export default ROICalc;
