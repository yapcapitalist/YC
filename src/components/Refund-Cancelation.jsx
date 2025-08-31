import React from 'react'

const RefundCancelation = () => {
    return (
        <div className='relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2>Refund and Cancelation</h2>
            <p>We believe in transparent pricing and delivering value.</p>
            <ul>
                <li>If you are not satisfied after two sessions, we offer a 100% full refund—no questions asked.</li>
                <li>Refund requests must be submitted in writing within a day of the second session.</li>
                <li>Beyond this point, refunds are not available, but we’ll do our best to support you with alternatives.</li>
            </ul>
        </div>
    )
}

export default RefundCancelation