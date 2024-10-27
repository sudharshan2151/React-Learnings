import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Center,
  Grid,
  Box,
  Stack,
  Text,
  Heading
} from "@chakra-ui/react";

import {useState} from 'react'

function BMICalculator() {
  let fields = {
    height:"",
    weight:""
  }
  const[result,setResult] = useState({value:"",color:"",status:""});
  const [data,setData] = useState(fields);
  function capture(e){
     let {name,value} = e.target;
     let obj = {...data};
     obj[name]=value;
     console.log(obj);
     setData(obj);
  }

  function calculate(){
    let heightValue = +data.height;
    let weightValue=+data.weight;
    let height;
    height =heightValue / 100
    let bmi = (weightValue / (height* height));
    let res = {...result};
    console.log(bmi);
    res.value=(bmi).toFixed(2);
    res.color = bmi>=25?"red":bmi<18.5?"blue":"green";
    res.status = bmi>=25?"Overweight":bmi<18.5?"Underweight":"Healthy";
    setResult(res);
  }

  function reset(){
    let sample = {...fields}
    setData(sample);
    setResult({value:"",color:"",status:""});
  }
  return (

    <Box>
      <Center><Heading>BMI Calculator</Heading></Center>
      <SimpleGrid className="bmi-form">
        <label htmlFor="">Height (cm)</label>
        <input type="number" name="height" placeholder="Enter your height" value={data.height} className="height" onChange={capture}/>
        <label htmlFor="">weight (kg)</label>
        <input type="number" name="weight" placeholder="Enter your Weight" value={data.weight}  className="weight" onChange={capture}/>
      </SimpleGrid>
      <Button backgroundColor="green" color="white" onClick={calculate}>Calculate</Button>
      <Button backgroundColor="red" color="white" onClick={reset}>Reset</Button>
      <Center>
      {result.value?<Grid className="bmi-result">
        <Text className="bmi-value">{result.value}</Text>
        <Text className="bmi-status" color={result.color}>{result.status}</Text>
      </Grid>:<></>}
      </Center>

    </Box>
  )
}

export default BMICalculator;
