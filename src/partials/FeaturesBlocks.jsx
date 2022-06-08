import React from 'react';
import Stats from './Stats';
import one from '../images/Investment-Security-Icon.png';
import two from '../images/Automated-Payments-Icon.png';
import three from '../images/Fixed-APY-Icon.png';
import four from '../images/Rapid-Interest-Payments-icon.png';
import five from '../images/token-buybacks-icon.png';
import six from '../images/Auto-Liquidity-Icon.png';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">


          {/* Section header */}
    
         
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={one} width="64" height="64" alt="safety" />
             
              
              <h4 className="h4 mb-2">Investment Safety</h4>
              <p className="text-lg text-gray-400 text-center">Liquid Token always remains in your wallet,
 not staked in a protocol owned contract, and always under your control.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={two} width="64" height="64" alt="auto pay" />
              <h4 className="h4 mb-2">Automated Payments</h4>
              <p className="text-lg text-gray-400 text-center">There is no need to re-stake your reward
 tokens. Interest is compounded and paid automatically in your own wallet,
 ensuring that you never miss a payment.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={three} width="64" height="64" alt="sustainable apy" />
              <h4 className="h4 mb-2">Sustainable Dynamic APY</h4>
              <p className="text-lg text-gray-400 text-center">Liquid AR implements a sustainable dynamic APY based on volume for ultimate protocol sustainability</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={four} width="64" height="64" alt="rapid interest" />
              <h4 className="h4 mb-2">Rapid Interest Payments</h4>
              <p className="text-lg text-gray-400 text-center">Liquid AR pays interest to all $LQD holders every
 30 minutes, or 48 times per day.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={five} width="64" height="64" alt="buy backs" />
              <h4 className="h4 mb-2">Token Buy Backs</h4>
              <p className="text-lg text-gray-400 text-center">Our protocol will employ two main strategies to manage stability, buy backs to add to liquidity and buy backs to send to reserve for future development use
</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <img className="inset-0 transform hover:scale-105 transition duration-700 ease-out w-16 h-16 mb-4" src={six} width="64" height="64" alt="auto liquidty" />
              <h4 className="h4 mb-2">Auto Liquidity</h4>
              <p className="text-lg text-gray-400 text-center">5% of trading will be allocated to liquidity on a DEX.
 Each trade increases the ability of the protocol to absorb sell pressure
 with minimal to no price impact.</p>
            </div>

          </div>

        </div>
        
    
    </section>
  );
}

export default FeaturesBlocks;
