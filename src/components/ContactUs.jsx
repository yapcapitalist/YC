import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2>Contact Us</h2>
            <h4>If you have questions about our policies, or need support, reach out:</h4>

            <h4> YapCapitalist Cohort</h4>
            <p> 📧 Email: info@yapcapitalist.com </p>

            {/* <p> 📞 Phone: [+91-XXXXXXXXXX] </p> */}
            <p>🌐 Website: www.yapcapitalist.com</p>
        </div>
    )
}

export default ContactUs