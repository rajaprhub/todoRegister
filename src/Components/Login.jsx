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
import {useNavigate ,Navigate} from "react-router-dom" ;
import { AuthContext } from "../Context/AuthContext";
import { saveData,loadData } from '../Utilis/localStorage';

export const Login = ()=> {
     const navigate = useNavigate();
     const [inputs,setInputs] = useState ( { email: "",password:""}) ;
   
     const handleInput = (event)=>{
      setInputs( {...inputs,[event.target.name] : event.target.value})
     }
  
     const {authState,loginUser,logoutUser} = React.useContext(AuthContext);
    //  console.log("is authstate now",authState)
   
   
   const Loginsucessful = async  ()=>{
      try{
        let res = await fetch(`http://localhost:3030/user`)
        res = await res.json()
        let x = false
         for(let i=0; i< res.length; i++){
                if(res[i].email==inputs.email &&   res[i].password==inputs.password){
                    console.log(i)
                    loginUser()
                    console.log("login  Matched")
                   return ;
               }
               
          }
       }

       catch (error) {
         console.log(error)
      }
     }

       const HandleLogin =  async (e)=>{
          e.preventDefault()
           Loginsucessful()
      }

       if(authState.isAuth){ 
        return <Navigate to="/" />
      }

     return (
            <Flex
              minH={'90vh'}
              align={'center'}
              justify={'center'}
           >
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Login to your account</Heading>
                </Stack>
                <Box
                  rounded={'lg'}
                  // bg={useColorModeValue('white', 'gray.700')}
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