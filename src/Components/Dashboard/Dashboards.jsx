import React from 'react'

const Dashboards = ({setAllWidget}) => {


    const handleWidget = ()=>{
        setAllWidget(true);
    }

  return (
    <div className='dashboard'>
        <header className='header flex justify-between my-[30px] px-4'>
            <div className='head-left'>
                <h3 className='text-lg font-[550]'>CNAPP Dashboard</h3>
            </div>
            <div className='head-right flex gap-5 mr-5'>
                <button onClick={handleWidget} className='px-2 py-1 bg-white border border-gray-500 rounded-md text-sm'>Add widget <i className='text-xl font-bold'>+</i></button>
                <button className='px-2 py-1 bg-white border border-gray-500 rounded-md text-sm'><i class='bx bx-refresh'></i></button>
                <button className='px-2 py-1 bg-white border border-gray-500 rounded-md text-sm'><i class='bx bx-dots-vertical-rounded'></i></button>

                <div className='days rounded-md bg-white px-2 flex justify-between border border-blue-500 overflow-hidden'>
                    <i className='mx-2 mt-1'><i class='bx bxs-time-five' ></i></i>|
                    <p className='ml-2 mt-1 cursor-pointer'>Last two days</p><i className='mt-[6px] cursor-pointer mx-2'><i class='bx bx-chevron-down'></i></i>
                </div>
            </div>
        </header>


        {/* main */}

        <main className='main-1'>
            <h4 className='ml-7 font-medium'>CSPM Excutive Dashboard</h4>

            <div className='cspm-details flex justify-center items-center '>
                <div className='w-[370px] relative flex justify-between items-center h-[280px] bg-white rounded-md mx-2 my-4'>
                    <svg class="  transform  -rotate-90 w-72 h-72">
                        <circle cx="145" cy="145" r="70" stroke="currentColor" stroke-width="20" fill="transparent"
                            class="text-gray-700 " />

                        <circle cx="145" cy="145" r="70" stroke="currentColor" stroke-width="20" fill="transparent"
                            class="text-blue-500 " />

                            
                    </svg>
                    <span class="absolute text-3xl text-center ml-[30%] items-center font-semibold" >20%</span>

                   <div className='mr-5'>
                    Executive data
                   </div>
                    
                </div>
                <div className='w-[370px] h-[280px] bg-white rounded-md mx-2 my-4'>
                    <div className='grid place-items-center mt-[30%]'>No data</div>
                </div>
                <div className='w-[370px] h-[280px] flex justify-center items-center bg-white rounded-md mx-2 my-4'>
                     <button onClick={handleWidget} className='px-2 py-1 bg-gray-200 border border-gray-500 rounded-md text-sm'>Add widget +</button>
                </div>
            </div>
        </main>

        <main className='main-2 my-5'>
            <h4 className='text-xl font-semibold mx-5'>New Widgets</h4>
            <h5 className='font-medium px-5 ml-[10%] mt-6 border-b-[3px] pb-2 border-s'>Widget-1</h5>
            <h5 className='font-medium px-5 ml-[10%] mt-6 border-b-[3px] pb-2 border-s'>Widget-2</h5>
            <h5 className='font-medium px-5 ml-[10%] mt-6 border-b-[3px] pb-2 border-s'>Widget-3</h5>
        </main>
    </div>
  )
}

export default Dashboards