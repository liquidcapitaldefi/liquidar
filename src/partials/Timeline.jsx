import React from 'react';

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      
        <div className="py-12 md:py-20">
        <div className="py-12 md:py-20 border-t border-purple-600">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Liquid AR Roadmap</h2>
            <p className="text-xl text-gray-400">Liquid AR has an aggressive roadmap in the works and more will come in the
coming months to be added to this section. Below is a sneak peak of what is to come.
Each one of our launches will take advantage of our Mint 2.0 presale strategy.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
           
                <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Phase 1</div>
                  <div className="absolute left-0 h-full px-px bg-purple-600 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Launch</h4>
                </div>
                <li className="text-lg text-gray-400">Fair Launch on DEX</li>
                {/*<li className="text-lg text-gray-400">Liquidity Locked 10 years</li>*/}
                <li className="text-lg text-gray-400">Pre-Launch Marketing</li>
                <li className="text-lg text-gray-400">Audit</li>
                <li className="text-lg text-gray-400">Dashboard Stress Test</li>
                <li className="text-lg text-gray-400">Coingecko Listing</li>
                <li className="text-lg text-gray-400">Coinmarketcap Listing</li>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
        
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Phase 2</div>
                  <div className="absolute left-0 h-full px-px bg-purple-600 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Stabilization</h4>
                </div>
                <li className="text-lg text-gray-400">Multi Community Creation</li>
                <li className="text-lg text-gray-400">Multi Language Website/Docs</li>
                <li className="text-lg text-gray-400">DappRadar Listing</li>
                <li className="text-lg text-gray-400">Coin Trackers Listing</li>
                <li className="text-lg text-gray-400">Social Media Marketing</li>
                <li className="text-lg text-gray-400">Youtube Marketing Campaign</li>      
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
       
                <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Phase 3</div>
                  <div className="absolute left-0 h-full px-px bg-purple-600 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Growth</h4>
                </div>
                <li className="text-lg text-gray-400">PR Marketing</li>
                <li className="text-lg text-gray-400">SEO</li>
                <li className="text-lg text-gray-400">Partnerships</li>
                <li className="text-lg text-gray-400">Cross-Chain Integration</li>
                <li className="text-lg text-gray-400">Merchandising</li>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
        
                <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Phase 4</div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Maturity</h4>
                </div>
                <li className="text-lg text-gray-400">bNFT (Boost NFT) Integration</li>
                <li className="text-lg text-gray-400">No Loss lottery game integration</li>
                <li className="text-lg text-gray-400">Enhanced cross chain functionality</li>
                <li className="text-lg text-gray-400">Increased yield bearing opportunities</li>
                <li className="text-lg text-gray-400">CEX Listings</li>
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;