import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <div className='relative pb-12 sm:pb-[158px] px-6 sm:px-4 max-w-[1600px] mx-auto'>
            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>
            <h2>Privacy Policy</h2>

            <p> At YapCapitalist Cohort, we value your trust and are committed to protecting your privacy. </p>

            <p>Information We Collect: When you register, we collect personal details such as your name, email, phone number, and payment information. We may also collect feedback and participation data during the program.</p>

            <p>How We Use It: We use this information to process your enrollment, deliver program sessions, improve our offerings, and communicate with you.</p>

            <p>Data Protection: Your data is stored securely. We do not sell or rent your personal information to third parties.</p>

            <p>Third-Party Services: We may use trusted partners (like payment processors or communication platforms) to run the cohort. These partners follow strict privacy and compliance standards.</p>

            <p>Your Rights: You can request access, correction, or deletion of your data anytime by contacting us.</p>
        </div>
    )
}

export default PrivacyPolicy