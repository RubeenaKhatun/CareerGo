import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { status } from "../../../../../src/lib/helper";
import { DropDown } from "../../../../../src/components/Reusables/Dropdown";
import { getLoginSession } from "../../../../../src/lib/auth";
import { findUser } from "../../../../../src/lib/user";
import Link from "next/link";
import { useColleges } from "../../../../../src/hooks/useColleges";

const OpenJobAdd = ({ openjob }) => {
  console.log("openjob",openjob)
  const router = useRouter();
  const [name, setName] = useState(openjob?.name);
  const [lastDate, setLastDate] = useState(openjob?.lastDate)
  const [eligiblityBatch, setEligiblityBatch] = useState(openjob?.eligiblityBatch)
  const [registerLink, setRegisterLink] = useState(openjob?.jobLink)
  const [collegeVisible, setcollegeVisible] = useState(openjob?.visibility)
  const [selectedStatus, setSelectedStatus] = useState(status.filter((x) => x.name == openjob.status)[0]);
  const { colleges, isLoading, isError } = useColleges();
  const [visibility, setvisibility] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      data: { message },
    } = await axios.put(`${process.env.NEXT_PUBLIC_HOST_URL}/api/openjobs`, {
      ...openjob,
      name,
      eligiblityBatch,
      jobLink: registerLink,
      lastDate: new Date(lastDate),
      status: selectedStatus.name,
      visibility:visibility
    });


    if (message == "Openjob Updated") {
      toast.success(message, { toastId: message });
      router.push("/dashboard/admin/openjobs");
    } else {
      toast.error(message, { toastId: message });
    }
  };

  return (
    <main className='bg-gray-50 pt-[15vh]'>
      <div className='space-y-6 max-w-6xl mx-auto py-8'>
        <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
          <div className='mb-5 md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Create Open Job</h3>
            <p className='mt-1 text-sm text-gray-500'>
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div>
            <form className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6' method='POST'>
              <div className='sm:col-span-6'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Company Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete='off'
                  className='mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <div className='sm:col-span-6'>
                <label htmlFor='batch' className='block text-sm font-medium text-gray-700'>
                  Eligibility Batch
                </label>
                <input
                  type='text'
                  name='batch'
                  id='batch'
                  value={eligiblityBatch}
                  onChange={(e) => setEligiblityBatch(e.target.value)}
                  autoComplete='off'
                  className='mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <div className='sm:col-span-6'>
                <label htmlFor='link' className='block text-sm font-medium text-gray-700'>
                  Register Link
                </label>
                <input
                  type='text'
                  name='link'
                  id='link'
                  value={registerLink}
                  onChange={(e) => setRegisterLink(e.target.value)}
                  autoComplete='off'
                  className='mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <div className='sm:col-span-3'>
                <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
                  Last Date To Apply
                </label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  value={lastDate.substring(0, 10)}
                  onChange={(e) => setLastDate(e.target.value)}
                  autoComplete='off'
                  className='mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                />
              </div>

              <div className='sm:col-span-3 relative -top-[22px]'>
                <DropDown
                  title={"Status"}
                  options={status}
                  selectedOption={selectedStatus}
                  setSelectedOption={setSelectedStatus}
                />
              </div>
              <div className='sm:col-span-6'>

                <h1 className="py-2">visibility</h1>
                <div className="inline pr-5">
                <div></div>
                
                <input
                  type='checkbox'
                  name='link'
                  id='link'
                  value="all"
                  className=" border-orange-300 text-orange-500 focus:ring-orange-200"
                  onChange={()=>{
                    var arr = visibility
                    if(arr.includes("all")){
                      arr = arr.filter((item)=> item !== "all")
                      setvisibility(arr)
                    }
                    else{
                      arr.push("all")
                      setvisibility(arr)

                    }
                  }}  
                />
                <label htmlFor='link' className=' text-sm font-medium mx-2 text-gray-700 inline pr-2'>
                  All
                </label>
                </div>
               {colleges && (<>
               <div className="inline-flex gap-5">
                {colleges.map((college)=>(<>
                {console.log("college ins")}
                <div className="flex gap-2">
                 
               {/* {collegeVisible.includes(college.college.name) && (
                 <input
                 className=" border-orange-300 text-orange-500 focus:ring-orange-200"
                 type='checkbox'
                 name={college.college.name}
                 id={college.college.name}
                 value={college.college.name}
                 defaultChecked
                 onChange={()=>{
                   var arr = visibility
                   if(arr.includes(college.college.name)){
                     arr = arr.filter((item)=> item !== college.college.name)
                     setvisibility(arr)
                   }
                   else{
                     arr.push(college.college.name)
                     setvisibility(arr)

                   }
                 }}  
               />
               )}
               {!collegeVisible.includes(college.college.name) && (
                 <input
                 className=" border-orange-300 text-orange-500 focus:ring-orange-200"
                 type='checkbox'
                 name={college.college.name}
                 id={college.college.name}
                 value={college.college.name}
                 onChange={()=>{
                   var arr = visibility
                   if(arr.includes(college.college.name)){
                     arr = arr.filter((item)=> item !== college.college.name)
                     setvisibility(arr)
                   }
                   else{
                     arr.push(college.college.name)
                     setvisibility(arr)

                   }
                 }}  
               />
               
               )} */}
                <input
                 className=" border-orange-300 text-orange-500 focus:ring-orange-200"
                 type='checkbox'
                 name={college.college.name}
                 id={college.college.name}
                 value={college.college.name}
                 onChange={()=>{
                   var arr = visibility
                   if(arr.includes(college.college.name)){
                     arr = arr.filter((item)=> item !== college.college.name)
                     setvisibility(arr)
                   }
                   else{
                     arr.push(college.college.name)
                     setvisibility(arr)

                   }
                 }}  
               />
               <label htmlFor='link' className='text-sm font-medium text-gray-700 pb-[1px]'>
                  {college.college.name}
                </label>
                </div>
                </>
                ))}
                </div>
               </>)
                }
              </div>
            </form>
            <div className='flex justify-end mt-6'>
              <Link href={`/dashboard/admin/openjobs`}>
                <button
                  type='button'
                  className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                >
                  Cancel
                </button>
              </Link>
              <button
                onClick={onSubmitHandler}
                className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps = async ({ req, res, query }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  if (user.category !== "admin") {
    return {
      redirect: {
        destination: "/dashbaord/" + user.category,
        permanent: false,
      },
    };
  }


  const {
    data: { openjob },
  } = await axios.get(`${process.env.HOST_URL}/api/openjobs/${query.id}`);
  
  return {
    props: {openjob},
  };
};

export default OpenJobAdd;
