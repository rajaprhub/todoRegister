 import {
          Flex,
          Box,
          FormControl,
          FormLabel,
          Input,
          Checkbox,
          Stack,
          Link,
          Button,
          Heading,
          Text,
          useColorModeValue,
        } from '@chakra-ui/react';

import React ,{ useState ,useEffect} from 'react';
        
  export const Login = ()=> {
     const [inputs,setInputs] = useState ( { email: "",password:""}) ;
   
    const handleInput = (event)=>{
       setInputs( {...inputs,[event.target.name] : event.target.value})
    }
        const HandleLogin =  async (e)=>{
          e.preventDefault()
          try {
            let res = await fetch(`http://localhost:3030/user`)
                res = await res.json() ;
            //  console.log(res)
                let x = false 
                for(let i=0; i< res.length; i++){
                  if((res[i].email===inputs.email && res[i].password===inputs.password)){
                    x = true
                    window.location.href="/"
                    console.log("login sucess")
                  }
                }

           }
           catch (error) {
             console.log(error)
          }
     
       }

  
    
     return (
            <Flex
              minH={'90vh'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Login to your account</Heading>
                </Stack>
                <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" 
                           name="email"               //email
                         onChange ={handleInput}  
                      />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input type="password"         
                         name="password" 
                         onChange ={handleInput}   //password
                      />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                      </Stack>
                      <Button  onClick={HandleLogin}  // handlesubmit
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}>
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          );
        }