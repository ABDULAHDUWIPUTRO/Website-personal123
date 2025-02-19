import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pesky Infatuated Grasshopper</title>
        <meta property="og:title" content="Pesky Infatuated Grasshopper" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">About</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Portfolio</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text114">
              layanan domain dan hosting yang murah
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text115">Penyedia domain </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text116">
              menyediakan layanan pembuatan biography online sesuai kemauan
              pelanggan dengan maksimal 3 revisi
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text117">Menyediakan check error</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text118">
              harga sesuai bahasa yang digunakan dan kerumitan nya
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Pembuatan cv online</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text120"> [ABDULLAH DUWIPUTRO]</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text121">
              Discover the journey and be inspired
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text122">Explore Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Insight into personal interests and hobbies
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text124">
              Brief overview of childhood and upbringing
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text125">Career</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text126">Early Life</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text127">
              Summary of professional journey and achievements
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text128">Personal Life</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text129">$30</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text130">Buy Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text131">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text132">Buy Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text133">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text134">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text135">Feature 2</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text136">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text137">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text139">Feature 2</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text142">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text143">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text144">Buy Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text145">Feature 1</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text146">Feature 3</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text147">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text148">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text151">Feature 2</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text152">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text153">Feature 1</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text154">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text156">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text157">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text158">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text160">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text161">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text162">$20</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text163">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text166">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text167">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text168">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text170">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text172">Feature 3</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text173">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text174">Feature 1</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text175">Feature 3</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text176">
              HARGA TERBILANG RELATIVE SAAT ADA KEMAUAN
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text177">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text178">$10</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text179">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text180">
              Brief overview of the person&apos;s childhood and upbringing.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text181">
              Highlights of the person&apos;s professional journey and
              significant career milestones.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text182">Education</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text183">
              Summary of the individual&apos;s educational background and any
              notable achievements.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text184">Early Life</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text185">Career</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text186">
              Insight into the personal interests, hobbies, and family life of
              the individual.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Personal Life</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text188">Marketing Manager, XYZ Corp.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text189">CEO, ABC Inc.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text190">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text191">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text192">
              Working with Jane has been a pleasure. She is creative, dedicated,
              and always delivers exceptional results.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text193">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text194">HR Manager, PQR Company</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text195">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text197">Founder, LMN Startup</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text198">
              John is an amazing person with great leadership skills. He has
              helped our company grow exponentially.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text200">
              David&apos;s innovative ideas have been instrumental in the
              success of our startup. He is truly a visionary leader.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text201">
              Sarah&apos;s professionalism and interpersonal skills make her an
              invaluable asset to our team. She goes above and beyond in
              everything she does.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text202">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text203">
              Feel free to reach out to me via email for any inquiries or
              collaborations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text204">Contact Me</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text205">
              You can also contact me via phone for urgent matters or quick
              communication.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text206">
              Email: abdullahduwiputro69@gmail.com
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text207">Phone: +6282284136873</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text208">Blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text209">Portfolio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text210">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text211">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text212">About</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text213">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text214">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text215">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
