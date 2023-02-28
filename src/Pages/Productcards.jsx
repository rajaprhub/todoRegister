import React from 'react'
import styles from "../Styles/Homepage.module.css"

import {
  Flex,
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';


export const Productcards = ( props) => {
  const {data,sort} = props
      console.log("product card now",data)


        
  return (
    <> 
      <div>
          <span >Sort By</span>
          <select onChange={(e)=>sort(e)}>
             <option>Relevance</option>
             <option value="LH">Price: Low to High</option>
             <option value="HL">Price: High to Low</option>
          <option></option>
         </select>
       </div>

         <div className= {styles.container}>
              {
                  data.map( (el) =>(
                     <div   className={styles.box}  key= {el.id}>
                          <img  src={el.image}/>
                           <div>
                              <p>{el.name}</p>
                              <p>{el.price}</p>
                              <p>{el.desc}</p>

                            </div> 
                       </div>  
                  ))
               }
          </div>
    </>
  )
}

