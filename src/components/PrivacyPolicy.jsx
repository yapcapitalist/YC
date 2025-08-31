import React from 'react'
import { Link } from 'react-router-dom'
import yclogo from '../assets/YAAP_CAPITAL.svg'

const PrivacyPolicy = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-8 text-sm leading-relaxed text-white'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2 className="font-bold !text-[#fefe00] mb-6">Privacy Policy</h2>

            <p> At YapCapitalist Cohort, we value your trust and are committed to protecting your privacy. </p>

            <p className='my-4'><span className='font-bold'>Information We Collect:</span> When you register, we collect personal details such as your name, email, phone number, and payment information. We may also collect feedback and participation data during the program.</p>

            <p className='my-4'> <span className='font-bold'>How We Use It:</span> We use this information to process your enrollment, deliver program sessions, improve our offerings, and communicate with you.</p>

            <p className='my-4'><span className='font-bold'>Data Protection: </span>Your data is stored securely. We do not sell or rent your personal information to third parties.</p>

            <p className='my-4'><span className='font-bold'>Third-Party Services: </span>We may use trusted partners (like payment processors or communication platforms) to run the cohort. These partners follow strict privacy and compliance standards.</p>

            <p className='my-4'><span className='font-bold'>Your Rights:</span> You can request access, correction, or deletion of your data anytime by contacting us.</p>
        </div>
    )
}

export default PrivacyPolicy