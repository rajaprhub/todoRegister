import React, { useEffect, useState } from 'react'
import styles from "../Styles/Homepage.module.css"

import {
  Flex,
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Container ,
  InputGroup,
  HStack,
  Spacer,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';


export const Productcards = ( props) => {
  const {data,HandleSort} = props;
 

//   let [data,setdata] = useState(props.data);
//  console.log(data)

  // const [filtered_data,set_filtered_data] =useState([]);
  // const [search,setsearch] = useState("");


  // useEffect(()=>{
         
  //   console.log(data,filtered_data,"filtered_data")
  //    let dataa = data.filter(ele =>{
  //       if(search ==""){
  //         return ele
  //       }
  //       else
  //       {
  //         if(ele.name?.includes(search)){
  //           return ele
  //         }
  //       }
  //    });

  //    console.log(dataa,"data");
      
  //   set_filtered_data(dataa);
  // },[ ])
    

 return (
    <> 
     <div style={{ height:"100%"}}    >
    
         
     <Flex minWidth='max-content'  justifyContent="space-around" alignItems='center' gap='1'>
           <Box size='md'  p='1' >
             <Input onChange={(e)=> e.target.value} 
              border='1px solid black'  w='200px' placeholder='search ' />
          </Box>
          <Box p='1' >
          <span >Sort By</span>
             <select onChange={(e)=>HandleSort(e)}>
             <option>Relevance</option>
             <option value="LH">Price: Low to High</option>
             <option value="HL">Price: High to Low</option>
            <option></option>
          </select>
          </Box>
        </Flex>
      
          <SimpleGrid  className={styles.maincarddiv}>
              {
                  data.map( (el) =>(
                       <Box  className={styles.box}  key= {el.id}>
                          <img   className={styles.imagebox}  src={el.image}/>
                           <div >
                              <p>{el.name}</p>
                              <h3>{el.price}</h3>
                              <p>{el.desc}</p>
                            </div> 
                       </Box>  
                  ))
               }
          </SimpleGrid>
       </div>
    </>
  )
}

