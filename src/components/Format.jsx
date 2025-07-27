import React, { useState, useEffect } from 'react';

const StackingCards = ({ 
  title = "ROADMAP TO BECOME A PRO CREATOR",
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
    { top: '6vh', zIndex: 2 },
    { top: '9vh', zIndex: 3 },
    { top: '12vh', zIndex: 4 }
  ];

  return (
    <div className="min-h-screen pb-[158px]">
      <div className="max-w-6xl mx-auto px-5 ">
        <h2 className="text-center mb-12">
          {title}
        </h2>
        
        <div className="relative" style={{ height: '200vh' }}>
          <div className="relative" style={{ height: '200vh' }}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`stacking-card sticky w-full flex border border-[4px] border-[#4A4A00] items-center  rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
                  stackedCards.has(index) ? 'transform scale-98' : ''
                }`}
                style={{
                  height: '20vh',
                  backgroundColor: 'rgb(26, 26, 26)',
                  marginBottom: '5vh',
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
                <div className=" text-white px-6 max-w-2xl">
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
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg">Follow these steps to become a successful creator</p>
          </div>
        </div>
        
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-lg">Continue scrolling to explore more content and tools</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!hasScrolled && (
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base z-50 animate-bounce"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          ↓ Scroll to see the roadmap
        </div>
      )}

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