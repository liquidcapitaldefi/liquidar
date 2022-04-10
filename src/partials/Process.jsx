import React from 'react';

function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Made For The Passive Investor</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">LAR gives investors holding $LQD (Liquid Token) positive rebases that automatically
compound within their wallets without the need to lock or stake them. $LQD holders
gain the following benefits:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">1</span>. Investment Safety</h4>
              <p className="text-lg text-gray-400 text-center">Liquid Token always remains in your wallet,
 not staked in a protocol owned contract, and always under your control.
</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2" strokeWidth="2" strokeLinecap="square" />
                  <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
                </g>
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">2</span>. Automated Payments</h4>
              <p className="text-lg text-gray-400 text-center">There is no need to re-stake your reward
 tokens. Interest is compounded and paid automatically in your own wallet,
 ensuring that you never miss a payment.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">3</span>. Sustainable Fixed APY</h4>
              <p className="text-lg text-gray-400 text-center">Liquid AR pays out
 147,805% APY, 2.0197% Daily ROI (.041667% per rebase every 30 mins)</p>
            </div>
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">4</span>. Rapid Interest Payments</h4>
              <p className="text-lg text-gray-400 text-center">Liquid AR pays interest to all $LQD holders every
 30 minutes, or 48 times per day.</p>
            </div>
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">5</span>. Token Buy Backs</h4>
              <p className="text-lg text-gray-400 text-center">Our protocol will employ two main strategies to manage
 1) To buy back and add liquidity
 2) buy back and send tokens to a wallet dedicated for future
 developments, such as funding our future NFT APY boosts.
 Liquid Capital will make unannounced buy backs with its
 own Treasury Funds.</p>
            </div>

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2"><span className="text-gray-400">6</span>. Auto Liquidity</h4>
              <p className="text-lg text-gray-400 text-center">At least 5% of trading will be allocated to liquidity on a DEX.
 Each trade increases the ability of the protocol to absorb sell pressure
 with minimal to no price impact.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Process;
