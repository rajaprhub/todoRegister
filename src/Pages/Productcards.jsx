import React, { useEffect, useState } from 'react'
import styles from "../Styles/ProductCard.module.css"

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
     const [search,setsearch] = useState("");
     
  return (
    <> 
     <div style={{ height:"100%"}}    >
     <Flex minWidth='max-content'  justifyContent="space-around" alignItems='center' gap='1'>
           <Box size='md'  p='1' >
             <Input onChange={(e)=> setsearch(e.target.value)} 
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
                       <Box  className={styles.procard}  key= {el.id}>

                             <img  width={"95%"} height={180}className={styles.imagebox}  src={el.image}/>
                              <div className={styles.Procardd} > 
                               <div style={ {display:"flex", justifyContent : "space-between"}}>    
                                 <h1> Name : {el.name}</h1>
                                 <h6> id:{el.id} </h6>
                               </div>
                              <h5>Price : {el.price}</h5>
                              <p> Description : {el.desc}</p>
                             </div>
                        </Box>  
                  ))
               }
          </SimpleGrid>
       </div>
    </>
  )
}

