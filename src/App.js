import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*wQDOFKOqx4895lypeoVJ-A@2x.png"
          alt="home"
          className="home_image"
        />
        <div className="navbar-div-span">
          <div className="navbar-flex-div-span">
            <span className="navbar-spans">Features</span>
            <span className="navbar-spans">Staking</span>
            <span className="navbar-spans">Portfolio</span>
            <span className="navbar-spans">FAQs</span>
            <span className="navbar-spans">Contact</span>
          </div>
        </div>
        <div className="right-side">
          <img
            src="https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-free/128/ic_discord_logo-512.png"
            alt="discord"
            className="discord-img"
          />
          <img
            src="https://www.kindpng.com/picc/m/30-300693_computer-icons-transprent-twitter-logo-outline-png-transparent.png"
            alt="twitter"
            className="twitter-img"
          />
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-black-linkedin-in-text-outline-icon-png-31624208622hcamkqiaeh.png"
            alt="linkedin"
            className="linkedin-img"
          />
          <div className="dashboard-button">Dashboard</div>
        </div>
      </div>
      <div className="second-bit">
        <div className="bold-text">
          <div className="first-line">
            <p className="qube">Qube</p>
            <p className="qube-rest">partners with high-</p>
          </div>
          <div className="second-line">
            <p className="qube-second"> potential blockchain</p>
          </div>
          <div className="third-line">
            <p className="qube-third">projects</p>
          </div>
          <p className="text-after-bold">
            Professional investors, blockchain strategists and social-media
            influencers, investing in decentralized future.
          </p>
          <div className="learn-more">Learn more</div>
        </div>
        <div className="empty-space"></div>
      </div>
      <div className="third-bit">
        <div className="image-cube">
          <img
            className="first-cube"
            src="https://miro.medium.com/fit/c/160/160/1*xbOx3HJVs0p65D8jLcCK0Q.png"
            alt="cube"
          />
        </div>
        <div className="work-with-us">
          <div className="bold-text-work">Work with us</div>
          <div className="work-bottom-line">
            Here are some reasons why you will make the best decision by
            choosing us
          </div>
          <div className="work-cards">
            <div className="strategic-partnership">
              <div className="first-position">
                <div className="solid-color-strategic"></div>
                <div className="logo-strategic">
                  <img
                    className="logo-logo-hand"
                    src="https://icon-library.com/images/hand-shake-icon/hand-shake-icon-18.jpg"
                    alt="handshake"
                  />
                </div>
              </div>
              <div className="second-position">Strategic Partnership</div>
              <div className="third-position">
                <div className="third-pos-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </div>
              </div>
            </div>
            <div className="advisory-services">
              <div className="first-position-as">
                <div className="solid-color-advisory"></div>
                <div className="logo-advisory">
                  <img
                    className="logo-logo-advisory"
                    src="https://cdn.iconscout.com/icon/free/png-256/list-message-2367725-1976875.png"
                    alt="messages"
                  />
                </div>
              </div>
              <div className="second-position-as">Advisory Services</div>
              <div className="third-position-as">
                <div className="third-pos-text">
                  Through years of advising, Qube has accured significant
                  expertise in ICO strategy, including: token metrics, token
                  sale mechanism, token distribution, exchange listings, and
                  more.
                </div>
              </div>
            </div>
            <div className="influencer-network">
              <div className="first-position-net"></div>
              <div className="second-position-net">Influencer Network</div>
              <div className="third-position-net">
                <div className="third-pos-text">
                  Qube has an extensive social-media influencer network that it
                  utilizes to build a community for its partner blockchain
                  projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-bit">
        <div>
          <img
            className="fourth-bit-background"
            src="https://fastly.4sqi.net/img/general/600x600/76632784_CUivuHPKVjW3tKVYRWltbum2I7iqh1zKLYB3uOwTCtc.jpg"
            alt="cube"
          />
        </div>
        <div className="stake-with-us">
          <div className="bold-text-work">Stake with us</div>
          <div className="work-bottom-line">
            Earn passive income in crypto by delegating your idle token.
          </div>
          <div className="work-bottom-bottom-line">
            We contribute to secure the following blockchains
          </div>
          <div className="crypto-cards-container">
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/3513.png"
                  alt="fantom"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Fantom (FTM)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://downloads.coindesk.com/arc-hosted-images/dot.png"
                  alt="polkadot"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Polkadot (DOT)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/3794.png"
                  alt="cosmos"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Cosmos (ATOM)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png"
                  alt="terra"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Terra (LUNA)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
          </div>
          <div className="crypto-cards-container">
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/5034.png"
                  alt="kusama"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Kusama (KSM)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://altcoinreviews.org/wp-content/uploads/2021/12/cro-token.png"
                  alt="crypto"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Crypto (CRO)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/5601.png"
                  alt="xdai"
                />
                <div className="single-card-first-left">
                  <div className="token-name">xDai (STAKE)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
            <div className="crypto-card">
              <div className="single-card-first">
                <img
                  className="card-logo"
                  src="https://cryptologos.cc/logos/avalanche-avax-logo.png"
                  alt="avax"
                />
                <div className="single-card-first-left">
                  <div className="token-name">Avalanche (AVAX)</div>
                  <div className="token-percent">15.00%</div>
                </div>
              </div>
              <div className="card-button">Stake</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-bit">
        <div>
          <img
            className="fifth-bg-cube"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397199586/f4919587e5ff1213ebf225e8a8a14a0e.jpg"
            alt="fifth-bit-cube"
          />
        </div>
        <div className="invest-with-us">
          <div className="bold-text-work">Invest with us</div>
          <div className="work-bottom-line">
            Here are some brands that trust us
          </div>
          <div className="work-cards">
            <div className="strategic-partnership">
              <div className="first-position">
                <div>
                  <img
                    className="fifth-logo"
                    src="data:image/png;base64,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"
                    alt="bountyox"
                  />
                </div>
              </div>
              <div className="second-position">Bounty Ox</div>
              <div className="third-position">
                <div className="third-pos-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </div>
              </div>
            </div>
            <div className="strategic-partnership">
              <div className="first-position">
                <div>
                  <img
                    className="fifth-logo"
                    src="https://cdn.hackernoon.com/hn-images/1*USZwa8uwv0e3--TrPzL6Pg.png"
                    alt="bountyox"
                  />
                </div>
              </div>
              <div className="second-position">Electrify Asia</div>
              <div className="third-position">
                <div className="third-pos-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </div>
              </div>
            </div>
            <div className="strategic-partnership">
              <div className="first-position">
                <div>
                  <img
                    className="fifth-logo"
                    src="https://cdn-images-1.medium.com/fit/t/1600/480/1*bWeyQudtm4Tzxi6b1IozRw.png"
                    alt="bountyox"
                  />
                </div>
              </div>
              <div className="second-position">Wabi</div>
              <div className="third-position">
                <div className="third-pos-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </div>
              </div>
            </div>
          </div>
          <div className="fifth-card-button">View more</div>
        </div>
        <div>
          <img
            className="sixth-bit-background"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbQrtr54sf1ADUJquNSo42keoatTLXXi-sA&usqp=CAU"
            alt="cube"
          />
        </div>
      </div>
      <div className="sixth-bit">
        <div className="what-is-staking">
          <div className="bold-text-work">What is Staking?</div>
          <div className="work-bottom-line">
            Here are some brands that trust us
          </div>
          <div className="long-divs-container">
            <div className="long-divs">
              <div className="text-long-div">
                What is proof of stake in blockchain?
              </div>
              <img
                className="right-arrow"
                src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
                alt="arrow"
              />
            </div>
            <div className="long-divs">
              <div className="text-long-div">
                What is proof of stake in blockchain?
              </div>
              <img
                className="right-arrow"
                src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
                alt="arrow"
              />
            </div>
            <div className="long-divs">
              <div className="text-long-div">
                What is proof of stake in blockchain?
              </div>
              <img
                className="right-arrow"
                src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
                alt="arrow"
              />
            </div>
            <div className="long-divs">
              <div className="text-long-div">
                What is proof of stake in blockchain?
              </div>
              <img
                className="right-arrow"
                src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
                alt="arrow"
              />
            </div>
            <div className="long-divs">
              <div className="text-long-div">
                What is proof of stake in blockchain?
              </div>
              <img
                className="right-arrow"
                src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"
                alt="arrow"
              />
            </div>
          </div>
          <div className="fifth-card-button">View more</div>
        </div>
      </div>
      <div className="seventh-bit">
        <div className="get-in-touch">
          <div className="last-first">
            <div className="last-first-left">
              <div className="qube">Got something for us?</div>
              <div className="qube">Get in touch . . .</div>
              <div>
                Our products will transform your business. Feel free to use the
              </div>
              <div>form, or contact us directly via hello@qubevc.com</div>
            </div>
            <div className="last-first-right">
              <div className="form-content">
                <div className="form-text">Name</div>
              </div>
              <div className="form-content">
                <div className="form-text">Name</div>
              </div>
              <div className="form-content-wide">
                <div className="form-text">Name</div>
              </div>
              <div className="seventh-button">Send</div>
            </div>
          </div>
          <div className="last-bottom">
            <div className="last-bottom-first">
              <img
                className="home-image-bottom"
                src="https://cdn-images-1.medium.com/max/1200/1*wQDOFKOqx4895lypeoVJ-A@2x.png"
                alt="home"
              />
              <div className="last-text">
                Professional investors, blockchain
              </div>
              <div className="last-text">strategists and social-media</div>
              <div className="last-text">influencers investing in a</div>
              <div className="last-text">decentralized future.</div>
            </div>
            <div className="last-bottom-second">
              <div className="heading">Navigation</div>
              <div className="list">Home</div>
              <div className="list">Features</div>
              <div className="list">Staking</div>
              <div className="list">Portfolio</div>
              <div className="list">FAQs</div>
            </div>
            <div className="last-bottom-third">
              <div className="heading">Contacts</div>
              <div className="last-text">One Ferry Building, Suite 255</div>
              <div className="last-text">San Francisco, CA 94111</div>
              <div className="last-big-text">+1 (415) 677-5340</div>
            </div>
            <div className="last-bottom-fourth">
              <div className="newsletter">Subscribe to our newsletter</div>
              <div className="email">
                <div className="form-text">hello@quellxcode.com</div>
              </div>
              <div className="subscribe-button">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
