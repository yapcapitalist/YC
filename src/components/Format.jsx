import React, { useState, useEffect } from 'react';
import dot from "../assets/Dot Background.svg";


const StackingCards = ({ 
  title = "Format & Structure",
  cards = [
    {
      id: 1,
      number: "01",
      title: "12 Weeks",
      description: "12 Weeks | 1 Live Session Weekly | Assignments & Drills."
    },
    {
      id: 2,
      number: "02", 
      title: "Practical",
      description: "Access to India’s most practical cohort"
    },
    {
      id: 3,
      number: "03",
      title: "Community", 
      description: "Lifetime alumni community of leaders."
    },
    {
      id: 4,
      number: "04",
      title: "Certificate",
      description: "Completion Certificate with Final Showcase Review"
    }
  ]
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [stackedCards, setStackedCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }

      const cards = document.querySelectorAll('.stacking-card');
      const scrollTop = window.pageYOffset;
      const newStackedCards = new Set();
      
      cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollTop > cardTop - windowHeight + 100) {
          newStackedCards.add(index);
        }
      });
      
      setStackedCards(newStackedCards);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const cardStyles = [
    { top: '3vh', zIndex: 1 },
    { top: '18vh', zIndex: 2 },
    { top: '32vh', zIndex: 3 },
    { top: '38vh', zIndex: 4 }
  ];

  return (
    <div className="relative min-h-screen pb-[158px]">
      <div className="absolute grid-svg  top-[-268px] left-[-320px] !z-0">
                      <img src={dot} alt="" width="" height="" />
                  </div>
      
                  <div className="absolute bottom-216 right-20">
                      <svg width="356" height="380" viewBox="0 0 356 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.6">
                              <path opacity="0.5" d="M152.425 109.357V108.357H151.425V109.357H152.425ZM147.091 374.492C147.091 377.437 149.479 379.825 152.425 379.825C155.37 379.825 157.758 377.437 157.758 374.492C157.758 371.546 155.37 369.158 152.425 369.158C149.479 369.158 147.091 371.546 147.091 374.492ZM355.991 109.357V108.357H152.425V109.357V110.357H355.991V109.357ZM152.425 109.357H151.425V374.492H152.425H153.425V109.357H152.425Z" fill="url(#paint0_linear_313_3598)" />
                              <path opacity="0.5" d="M0.666667 191.744C0.666667 194.689 3.05448 197.077 6 197.077C8.94552 197.077 11.3333 194.689 11.3333 191.744C11.3333 188.798 8.94552 186.411 6 186.411C3.05448 186.411 0.666667 188.798 0.666667 191.744ZM355.991 191.744V190.744H191.71V191.744V192.744H355.991V191.744ZM191.71 191.744V190.744H6V191.744V192.744H191.71V191.744Z" fill="url(#paint1_linear_313_3598)" />
                              <path opacity="0.5" d="M193.498 281.62C193.498 284.565 195.886 286.953 198.831 286.953C201.777 286.953 204.164 284.565 204.164 281.62C204.164 278.674 201.777 276.287 198.831 276.287C195.886 276.287 193.498 278.674 193.498 281.62ZM356.011 281.62V280.62H282.232V281.62V282.62H356.011V281.62ZM282.232 281.62V280.62H198.831V281.62V282.62H282.232V281.62Z" fill="url(#paint2_linear_313_3598)" />
                              <path opacity="0.5" d="M109.569 157.291V156.291H108.569V157.291H109.569ZM104.236 293.603C104.236 296.549 106.624 298.937 109.569 298.937C112.515 298.937 114.903 296.549 114.903 293.603C114.903 290.658 112.515 288.27 109.569 288.27C106.624 288.27 104.236 290.658 104.236 293.603ZM355.992 157.291V156.291H109.569V157.291V158.291H355.992V157.291ZM109.569 157.291H108.569V293.603H109.569H110.569V157.291H109.569Z" fill="url(#paint3_linear_313_3598)" />
                              <path opacity="0.5" d="M191.71 142.312V143.312H190.71V142.312H191.71ZM186.377 6C186.377 3.05447 188.764 0.666672 191.71 0.666672C194.655 0.666672 197.043 3.05447 197.043 6C197.043 8.94551 194.655 11.3333 191.71 11.3333C188.764 11.3333 186.377 8.94551 186.377 6ZM355.992 142.312V143.312H191.71V142.312V141.312H355.992V142.312ZM191.71 142.312H190.71V6H191.71H192.71V142.312H191.71Z" fill="url(#paint4_linear_313_3598)" />
                              <path opacity="0.5" d="M64.9268 224.698V225.698H63.9268V224.698H64.9268ZM59.5934 88.3864C59.5934 85.4408 61.9812 83.053 64.9268 83.053C67.8723 83.053 70.2601 85.4408 70.2601 88.3864C70.2601 91.3319 67.8723 93.7197 64.9268 93.7197C61.9812 93.7197 59.5934 91.3319 59.5934 88.3864ZM355.991 224.698V225.698H64.9268V224.698V223.698H355.991V224.698ZM64.9268 224.698H63.9268V88.3864H64.9268H65.9268V224.698H64.9268Z" fill="url(#paint5_linear_313_3598)" />
                          </g>
                          <defs>
                              <linearGradient id="paint0_linear_313_3598" x1="355.991" y1="109.357" x2="199.114" y2="399.717" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#000100" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_313_3598" x1="371.17" y1="191.744" x2="6" y2="191.744" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#3E3E00" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                              <linearGradient id="paint2_linear_313_3598" x1="355.991" y1="281.62" x2="198.852" y2="281.62" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#000100" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                              <linearGradient id="paint3_linear_313_3598" x1="364.027" y1="152.049" x2="138.567" y2="330.284" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#000100" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                              <linearGradient id="paint4_linear_313_3598" x1="355.992" y1="142.312" x2="220.023" y2="-18.0122" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#000100" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                              <linearGradient id="paint5_linear_313_3598" x1="355.991" y1="224.698" x2="91.4004" y2="48.6076" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#000100" />
                                  <stop offset="1" stop-color="#FEFE00" />
                              </linearGradient>
                          </defs>
                      </svg>
      
                  </div>
      <div className="relative z-1 max-w-6xl mx-auto px-5 ">
        <h2 className="text-center mb-12">
          {title}
        </h2>
        
        <div className="relative" >
          <div className="relative" >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`stacking-card sticky w-full flex border border-[4px] border-[#4A4A00] items-center  rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
                  stackedCards.has(index) ? 'transform scale-98' : ''
                }`}
                style={{
                  // height: '20vh',
                  backgroundColor: 'rgb(26, 26, 26)',
                  // marginBottom: '5vh',
                  marginTop: '3vh',
                  top: cardStyles[index]?.top || '0vh',
                  zIndex: cardStyles[index]?.zIndex || 1
                }}
              >
                <div 
                  className="absolute top-4 right-5 text-6xl font-bold text-white opacity-10"
                  style={{ fontSize: '4rem' }}
                >
                  {card.number}
                </div>
                <div className=" text-white px-6 max-w-2xl pt-6 pb-12">
                  <h2 className="text-2xl font-bold mb-2 !text-[#fefe00]">
                    {card.title}
                  </h2>
                  <p className="text-base opacity-90 drop-shadow-sm !text-[#ababab]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional content sections */}
        
      </div>

      {/* Scroll indicator */}
 

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        .scale-98 {
          transform: scale(0.98);
        }
        
        @media (max-width: 768px) {
          .stacking-card h2 {
            font-size: 1.5rem;
          }
          
          .stacking-card p {
            font-size: 0.9rem;
          }
          
          .stacking-card .absolute {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StackingCards;