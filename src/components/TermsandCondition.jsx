import yclogo from '../assets/YAAP_CAPITAL.svg'
import dot from "../assets/Dot Background.svg";
import { Link } from 'react-router-dom';
import React from 'react';
const TermsandCondition = () => {
    return (

        <section className="max-w-6xl mx-auto px-4 py-8 text-sm leading-relaxed text-white">

            <div className="relative  rounded z-2 py-8 max-w-7xl mx-auto">
                <Link to="/">
                    <div className='w-8 sm:w-11'>
                        <img src={yclogo} alt="" />
                    </div>
                </Link>
            </div>

            <div className="absolute grid-svg top-[280px] left-[-400px] !z-0">
                <img src={dot} alt="" width="" height="" />
            </div>
            <div className='relative z-10'>
                <h2 className="font-bold !text-[#fefe00] mb-6">Terms and Conditions</h2>

                <h3 className="font-semibold mt-6 mb-2 !text-white">1. Introduction</h3>
                <p>Welcome to Yapcapitalist, a cohort-based learning program operated by Gogrowth Labs Pvt. Ltd. (“Company”, “we”, “our”, “us”). By enrolling in the Yapcapitalist Communication Skills Cohort (“Program”), you (“participant”, “user”, “you”) agree to these Terms and Conditions (“Terms”). Please review them carefully.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">2. Eligibility</h3>
                <p>Participants must be at least 18 years old or have explicit parental/guardian consent to enroll. By registering, you confirm that all provided information is accurate and current.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">3. Program Content & Use</h3>
                <p>All Program materials, live sessions, recordings, and resources are the intellectual property of Gogrowth Labs Pvt. Ltd.</p>
                <p>Content is strictly for personal educational use. Sharing, reproducing, or distributing any materials without our written consent is prohibited and may lead to legal action.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">4. Code of Conduct</h3>
                <p>Participants must conduct themselves professionally and respectfully towards instructors and fellow members at all times.</p>
                <p>Harassment, abusive language, spamming, or any disruptive behavior will result in immediate removal from the Program with no refund.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">5. Attendance & Participation</h3>
                <p>We strongly encourage active participation for the best experience.</p>
                <p>You are responsible for attending sessions and making the most of the content provided. Missed sessions will not be refunded or rescheduled individually.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">6. Payment Terms</h3>
                <p>Full payment is required before the Program start date, unless agreed otherwise in writing.</p>
                <p>All fees are displayed on <a href="https://yapcapitalist.com" className="underline !text-white" target="_blank" rel="noopener noreferrer">yapcapitalist.com</a> and may be subject to change; confirmed enrollments will not be affected by subsequent price changes.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">7. Refund Policy</h3>
                <p><strong>7-Day Refund Guarantee:</strong> If you’re not satisfied with Yapcapitalist for any reason, you may request a full refund within 7 days from the cohort start date.</p>
                <p>To request a refund, email <a href="mailto:info@yapcapitalist.com" className="underline !text-white">info@yapcapitalist.com</a> with your registration details and reason for your request.</p>
                <p>We shall process the refunds regardless of your reason</p>
                <p>Refunds will be processed to your original payment method within 7–10 business days.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">8. Program Changes & Cancellations</h3>
                <p>Gogrowth Labs Pvt. Ltd. reserves the right to modify, reschedule, or cancel any session or the entire Program as needed.</p>
                <p>If we cancel the entire Program, you will receive a full refund.</p>
                <p>If a session is rescheduled, you will be notified in advance; no individual compensation is provided for missed rescheduled sessions.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">9. Limitation of Liability</h3>
                <p>Participation in Yapcapitalist is voluntary. Gogrowth Labs Pvt. Ltd. is not responsible for any loss, damage, or injury resulting from participation in the Program.</p>
                <p>The skills, strategies, and information shared are for educational purposes only and should be applied at your own discretion.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">10. Privacy & Data Protection</h3>
                <p>We collect and process your personal data according to our <a href="https://yapcapitalist.com/privacy" className="underline !text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
                <p>Your data will never be sold or shared with third parties except as necessary to deliver the Program or as required by law.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">11. Intellectual Property</h3>
                <p>All materials, content, logos, and trademarks associated with Yapcapitalist are owned by Gogrowth Labs Pvt. Ltd.</p>
                <p>Any unauthorized use, copying, or distribution is strictly prohibited.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">12. Governing Law</h3>
                <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>

                <h3 className="font-semibold mt-6 mb-2 !text-white">13. Contact Us</h3>
                <p>For questions about these Terms, please email <a href="mailto:info@yapcapitalist.com" className="underline !text-white">info@yapcapitalist.com</a>.</p>
            </div>
        </section>


    )
}

export default TermsandCondition