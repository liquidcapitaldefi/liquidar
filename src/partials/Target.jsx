import React from 'react';

import TargetImage from '../images/circle.png';

function Target() {
  return (
    <section>
    
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-purple-600">
        
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">Liquid Capital consists of several key elements that combine to provide the new standard in DeFi</h2>
          </div>
        
          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
          
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <img className="relative inset-0 transform hover:scale-105 transition duration-700 ease-out" src={TargetImage} width="100%" height="600" alt="Circle of trust" /> 
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" >Circle of Trusted Partners (CTP)</h4>
                    <p className="text-lg text-gray-400">Liquid Capital will serve as a focal point for a Circle of Trusted Partners who are doxxed to LC and have their projects vetted by LC. The CTP will provide reciprocal co-marketing, co-development of use cases, and additional support for other CTP members. This, in turn, ensures greater safety and security for DeFi investors.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" >DeFi as a Service (DaaS)</h4>
                    <p className="text-lg text-gray-400">Liquid Capital, leveraging experience, expertise and knowledge, will offer consultant and professional services in our true DaaS offerings. From community building to complex protocol development, LC offers a full range of products and services to assist DeFi projects and help them succeed. </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" >DeFi Educational Platform (DEP)</h4>
                    <p className="text-lg text-gray-400">Liquid Capital is committed to demystifying Web 3.0 and making DeFi accessible to everyone. The DEP will constantly evolve to keep new and experienced DeFi investors up to date with the latest technology, risks and rewards of DeFi.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" >Liquid Capital Launchpad (LCL)</h4>
                    <p className="text-lg text-gray-400">The Liquid Capital Launchpad provides a vital service to the CTP, DaaS and the DEP. It will set a new standard in safe, fair and effective DeFi project launches and ensure new projects get off to the right start.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" > Liquid Auto Rebasing (LAR)</h4>
                    <p className="text-lg text-gray-400">Liquid Capital’s first protocol, Liquid AR, exemplifies what Liquid Capital stands for. LAR's unique tokenomics prioritise long term sustainability and growth over short term hype. At the core is a highly sustainable, variable daily percentage yield that updates based on the health of the project.</p><br></br><p className="text-lg text-gray-400"> Furthermore, the multichain launch, with all of the Circle of Trusted Partner’s protocols, incentivizes participation and cooperation among all the communities involved. LAR will be the first protocol to demonstrate the full potential of having a DeFi Circle of Trust, where a multitude of partners can come together to share ideas, strategies, technologies and marketing resources for maximum mutual benefit. It will mark a new era in DeFi. </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-purple-600" >Whale Strategies</h4>
                    <p className="text-lg text-gray-400">DeFi is about freedom, ownership and equal opportunity. Within the proper structure, whales can become cherished pillars of the DeFi community rather than bad actors to be feared. Liquid Capital will actively work to make DeFi equally attractive for both whales and everyday fish through strong tokenomics, well-rounded education, and open dialogue.</p>
                  </div>
                </div>
              </div>

      

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Target;
