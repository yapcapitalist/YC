import React from 'react'
import { Link } from 'react-router-dom'
import yclogo from '../assets/YAAP_CAPITAL.svg'

const RefundCancelation = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-8 text-sm leading-relaxed text-white'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2 className="font-bold !text-[#fefe00] mb-6">Refund and Cancelation</h2>
            <p>We believe in transparent pricing and delivering value.</p>
            <div>
                <p> <span className='!font-extrabold !text-[#fefe00] mb-4'>1-</span> If you are not satisfied after two sessions, we offer a 100% full refund—no questions asked.</p>
                <p><span className='!font-bold !text-[#fefe00] mb-4'>2-</span> Refund requests must be submitted in writing within a day of the second session.</p>
                <p><span className='!font-bold !text-[#fefe00] mb-4'>3-</span> Beyond this point, refunds are not available, but we’ll do our best to support you with alternatives.</p>
            </div>
        </div>
    )
}

export default RefundCancelation