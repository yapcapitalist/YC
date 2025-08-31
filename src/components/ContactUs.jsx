import React from 'react'
import { Link } from 'react-router-dom'
import yclogo from '../assets/YAAP_CAPITAL.svg'

const ContactUs = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-8 text-sm leading-relaxed text-white'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2 className="font-bold !text-[#fefe00] mb-6">Contact Us</h2>
            <p>If you have questions about our policies, or need support, reach out:</p>

            <p className='!text-[#fefe00] mb-6'> YapCapitalist Cohort</p>
            <p> 📧 Email: info@yapcapitalist.com </p>

            {/* <p> 📞 Phone: [+91-XXXXXXXXXX] </p> */}
            <p>🌐 Website: www.yapcapitalist.com</p>
        </div>
    )
}

export default ContactUs