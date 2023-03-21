import React from 'react';
import {
  Flex,
  Box,
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
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Register = () =>{
     const [inputs,setInputs] = useState ( 
           { email: "",password:"", name:""}
        )
      const handleInput = (event)=>{
         setInputs( {...inputs,[event.target.name] : event.target.value})
      }

   //  ****************************
    const Registeruser = async ()=>{
 
         try {
                 const res = await fetch(`http://localhost:3030/user`,{
                      method: "POST",
                      body: JSON.stringify(inputs),
                      headers: {
                        "Content-Type":"application/json"
                      }
                   })
                   res = await res.json()
            
             } 
            catch (error) {
              console.log(error)
            }
        }
   //  ****************************
      const handleSubmit =(e)=>{
        let status = true
        e.preventDefault();
           if(inputs.name =="" || inputs.email == "" || inputs.password == "" ){
            alert("Please fill all the credentials")
          }
          else if(inputs.password.length<=6){
            alert("Length of password should be atleast 6")
        }
         
       else{
         let existuserdetail = ''
         fetch("http://localhost:3030/user")
          .then((res) => res.json())
          .then((res) => { existuserdetail = res
            // console.log(existuserdetail)
            for(let i=0; i < existuserdetail.length; i++){
              if(existuserdetail[i].name == inputs.name ){
                 status = false
                 alert("user Name already exist")
             
               }
               else if(existuserdetail[i].email==inputs.email){
                status = false
                alert("Email is already registered")
              }
           } //loop
              
             if(status){
                  Registeruser()
                 setInputs({email: "",password:"", name:""})
                 alert("signUP success")
                }

         }) //res exist
           
        }

      }  //handle submit end
   //  ****************************
 const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'60vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          w={456}
          p={8}>
          <Stack spacing={3}>
        
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
               <Input type="text"    //name
                value = {inputs.name}
                 name="name"            
                 onChange ={handleInput} 
                 autoFocus
                />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"           //email
                 value = {inputs.email}
                name="email" 
                 onChange ={handleInput}  
                 autoFocus
                />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} //password
                     value = {inputs.password}
                    name="password"                 
                    onChange ={handleInput}
                    autoFocus
                 />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button onClick={handleSubmit}  // handlesubmit
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}