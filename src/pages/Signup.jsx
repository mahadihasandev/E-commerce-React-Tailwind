import Container from '../component/Container'
import MidList from '../component/MidList'
import Flex from '../component/Flex'
import { IoIosArrowForward } from "react-icons/io";
import Input from '../component/Input';
import Button from '../component/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Signup = () => {
  const [apiData, setApiData] = useState([]);
  const [storeCountry,setStoreCountry]=useState('')
  console.log(storeCountry);
  

 useEffect(()=>{
  async function ApiCall() {
    let data=await axios.get('https://restcountries.com/v3.1/all?fields=name,capital')
    setApiData(data.data);  
  }
  ApiCall()
 },[])

let handleDivision=(e)=>{
  if(e.target.value!='Select Country'){
    setStoreCountry(e.target.value)
  }


}

 

  return (
    <section className='py-26'>
       
     
      <Container>
        <MidList text='Sign Up'/>
        <Flex className='items-center gap-x-2 pb-[136px]'>
          <p className='text-sm text-primary font-normal font-DMs'>Home</p>
          <span className='text-sm text-primary font-normal font-DMs'><IoIosArrowForward /></span>
          <p className='text-sm text-primary font-normal font-DMs'>Sign up</p>
        </Flex>
        <p className='w-[644px] text-base text-primary font-normal font-DMs leading-7 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p> <hr className='text-third' />
        <h4 className=' text-[39px] text-secondary font-bold font-DMs pt-15 pb-10'>Your Personal Details</h4>
        <Flex className='w-w49 gap-x-5'>




          <Input className='w-[400px]' text='primary Name' type='text' check='text' placeholder=
            'primary Name' />
          <Input className='w-[400px]' text='Last Name' type='text' check='last-text' placeholder=
            'Last Name' />
        </Flex>



        <Flex className='w-w49 gap-x-5 pb-10'>
          {/* take email */}

          <div className='pt-6'>
            <label className='text-base text-second font-bold font-DMs leading-6' htmlFor='email'>Email: <br />
              <input id='email' type='email' className={`w-[400px] text-base font-normal py-4 px-2 border-b-2 border-third placeholder:text-sm placeholder:text-first placeholder:font-normal`} placeholder='Enter Email' /> <br />
            </label>
          </div>
          {/* take email */}

          <Input className='w-[400px]' text='Telephone' type='number' check='number' placeholder='Your phone number' />
        </Flex>

        <h4 className=' text-[39px] text-secondary font-bold font-san pt-15 pb-10'>Your Password</h4>
        <Flex className='w-w49 gap-x-5 pb-10'>
          {/* take password */}
          <div className='pt-6'>
            <label className='text-base text-second font-bold font-DMs leading-6' htmlFor='password'>Password: <br />
              <input id='password' type='password' className={`w-[400px] text-base font-normal py-4 px-2 border-b-2 border-third placeholder:text-sm placeholder:text-first placeholder:font-normal`} placeholder='Enter Password' /> <br />
            </label>
          </div>
          {/* take password */}
          <Input className='w-[400px]' text='Repeat Password' type='password' check='repeat' placeholder=
            'Repeat password' />
        </Flex><hr className='text-third' />

        <hr className='text-third' />
        <h4 className=' text-[39px] text-secondary font-bold font-DMs pt-15 pb-10'>New Customer</h4>
        <Flex className='w-w49 gap-x-5'>
          <Input className='w-[400px]' text='Address 1' type='text' check='address1' placeholder=
            '4279 Zboncak Port Suite 6212' />
          <Input className='w-[400px]' text='Address 2' type='text' check='address2' placeholder=
            '-' />
        </Flex>
        <Flex className='w-w49 gap-x-5'>
          <Input className='w-[400px]' text='City' type='text' check='city' placeholder=
            'Your city' />
          <Input className='w-[400px]' text='Post Code' type='number' check='post-code' placeholder=
            '05228' />
        </Flex>
        <Flex className='gap-x-32 mt-16 mb-10'>

          <select onChange={handleDivision}>
            <option>Select Country</option>
            {
            apiData.map((country, index) => (
              <option key={index}>{country.name.common}</option>
            ))
            }
          </select>

          <select className='w-[300px]'>
            <option >Select City</option>
            {
              apiData.map((country,index)=>(
                <option key={index}>
                  {country.name.common===storeCountry&&country.capital.map((capital)=>(capital))}
                  </option>
              ))
            }
          </select>
        </Flex><hr className='text-third' />



        <div className='pt-16 flex items-center '>
          <input id='select' className='mr-5 accent-primary' type="checkbox" />
          <label className='text-sm text-primary font-normal font-san' htmlFor="select"> I have read and agree to the Privacy Policy
          </label>
        </div>
        <Flex className='gap-x-8 items-center pt-6 pb-10'>
          <p className='text-sm text-primary font-normal font-san'>Subscribe Newsletter</p>
          <div className='flex gap-x-4 items-center'>
            <input className='accent-primary' type="checkbox" id='yes' />
            <label className='text-sm text-primary font-normal font-san' htmlFor="yes">Yes</label>
          </div>
          <div className='flex gap-x-4 items-center'>
            <input className='accent-primary' type="checkbox" id='no' />
            <label className='text-sm text-primary font-normal font-san' htmlFor="no">No</label>
          </div>
        </Flex>

        <div >
          <Button text='Log in' />
        </div>
      </Container>
    </section>
  )
}

export default Signup