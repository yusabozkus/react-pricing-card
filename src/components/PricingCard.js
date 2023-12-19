import React, { Component } from 'react'
import { useContext } from 'react'
import { PricingContext } from '../context/PricingContext'

const PricingCard = () => {
    const { allPricing, enabled, setEnabled } = useContext(PricingContext);
    const cardClassName = "px-8 py-12 bg-white border-2 border-indigo-400 flex-1 rounded-lg shadow-lg"

    return (
        <div className='items-center justify-center flex'>
            {enabled ? (
                <div className='w-2/3'>
                    <h1 className='text-indigo-600 text-5xl font-bold uppercase mb-10'>Annual</h1>
                    <div className='flex gap-4 w-full items-center justify-center'>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Full.Basic.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Full.Basic.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Basic.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Basic.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Basic.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white transition-colors duration-300'>learn more</button>
                        </div>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Full.Pro.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Full.Pro.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Pro.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Pro.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Pro.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white duration-300'>learn more</button>
                        </div>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Full.Master.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Full.Master.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Master.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Master.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Full.Master.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white duration-300'>learn more</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-2/3'>
                    <h1 className='text-indigo-600 text-5xl font-bold uppercase mb-10'>Montly</h1>
                    <div className='flex gap-4 w-full items-center justify-center'>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Montly.Basic.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Montly.Basic.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Basic.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Basic.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Basic.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white transition-colors duration-300'>learn more</button>
                        </div>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Montly.Pro.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Montly.Pro.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Pro.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Pro.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Pro.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white duration-300'>learn more</button>
                        </div>
                        <div className={cardClassName}>
                            <h1 className='text-black text-lg font-semibold'>{allPricing.Montly.Master.Name}</h1>
                            <p className='text-5xl font-bold text-slate-800 mt-4 mb-10'>{allPricing.Montly.Master.Price}</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Master.Storage} Storage</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Master.Users} Users</p>
                            <hr className='m-4' />
                            <p className='text-base text-slate-500 font-medium'>{allPricing.Montly.Master.Send} Send</p>
                            <button className='text-base font-medium uppercase tracking-widest border-2 border-indigo-500 px-5 py-2 rounded-md mt-8 hover:bg-indigo-500 hover:border-white hover:text-white duration-300'>learn more</button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default PricingCard