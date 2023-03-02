import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom"
import { Productcards } from './Productcards'
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

      //  let res = await axios.get(`http://localhost:3030/userproduct`)
      //  setData(res.data)

      // return axios({
      //     method:"get",
      //     baseURL:"http://localhost:3030/userproduct",
      //     params:{_sort:sortby,_order:order}
      //   }).then( (res)=>setData(res.data) )

      // return axios.get(`http://localhost:3030/userproduct`,{
      //   params:{_sort:sortby,_order:order}
      //  }).then( (res)=>setData(res.data) )

export const HomePage = () => {

  const [data,setData] = useState([])
  const [sort,setSort] = useState("")

  const HandleSort = (e)=>{
   setSort(e.target.value)
  }
   const sortOrder = async (sort)=>{
    let sortby = null
    let order = null
    if(sort=="HL"){
      sortby = "price"
      order = "desc"
   }
    else if(sort=="LH"){
      sortby = "price"
      order = "asc"
    }
    else {
    sortby = "id"
    order = "asc"
   }
       const res = await axios.get(`http://localhost:3030/userproduct`, {
         params: { _sort: sortby, _order: order }
       });
        return setData(res.data);
   }

   const fetchData = async ()=>{
      return axios.get(`http://localhost:3030/userproduct`)
         .then( (res)=>setData(res.data) )
    }
   
    useEffect(()=>{
       fetchData()
       sortOrder(sort)
    },[sort])

   
    
   return (
    <> 
          <h1> home page</h1>
         <div>
             <Productcards
                 data = {data}
                 HandleSort = {HandleSort}
            />
          </div>
     </>
  )

}
