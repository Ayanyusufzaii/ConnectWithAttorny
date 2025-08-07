import React from "react";
import bgImg from "../../assets/Rectangle05.png";
import dpImg from "../../assets/2bg 1.png";

const cards = [
  {
    number: <span className="text-[#EDC14A]">01</span>,
    text: <>
    Educate the public<span className = "text-[#757575]"> about ongoing lawsuits and legal rights</span>
    </>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: <>
    <span className = "text-[#757575]">Provide </span>free, no-obligation<span className = "text-[#757575]"> case evaluations</span>
    </>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: <span className="text-[#EDC14A]">03</span>,
    text: <>
    Connect qualified individuals<span className = "text-[#757575]"> with experienced attorneys</span>
    </>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "04",
    text: <>
        <span className = "text-[#757575]">Offer a </span>safe, private process<span className = "text-[#757575]"> to start your legal journey</span>
    </>,
    bg: "bg-[#FFFFFF]",
  },
  
];
 
const AboutThree = () => {
  const [is1024, setIs1024] = React.useState(false);
 
  React.useEffect(() => {
    const checkWidth = () => {
      setIs1024(window.innerWidth === 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
 
  return (
    <section
      className={`w-full font-[Quicksand] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/*  Desktop + Tablet Layout (≥768px) */}
      <div className="hidden md:block w-full  bg-[#162766]">
        <div className="w-full max-w-[1440px] mx-auto px-[80px] py-[60px]">
          {/* Main Heading - Dual Color */}
          <h2 className="mb-6">
            <span className="text-[#ffffff] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              What{" "}
            </span>
            <span className="text-[#EDC14A] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              We Do
            </span>
          </h2>
 
          
 
        
{/* Cards Container */}
          <div className="grid grid-cols-4 gap-8">
            {cards.map((card) => (
              <article
                key={card.number}
                className={`p-4 h-[100px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden flex flex-col justify-center `}
              >
                <span className="text-[#162766] font-[Quicksand] not-italic font-semibold leading-none text-[24px] mb-2">
                  {card.number}
                </span>
                <p className="text-[#162766] text-[11px] font-medium leading-none tracking-[-0.32px] text-left">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
 
 
        </div>
      </div>
 
      {/*  Mobile Layout (<768px) */}
      <div className="md:hidden flex flex-col w-full gap-6 px-4 py-10  bg-[#162766]">
        {/* Mobile Main Heading */}
        <h2 className="text-left  text-[34px] font-semibold leading-[1.2] capitalize">
          <span className="text-[#ffffff]">
            What{" "}
          </span>
 
          <span className="text-[#EDC14A]">
            We Do
          </span>
        </h2>
 
        {/* Mobile Cards */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="w-full bg-white rounded-[12px] border border-white p-4 shadow-sm text-left"
            >
              <span className="text-[#162766] text-[24px] font-semibold leading-normal mb-2 block">
                {card.number}
              </span>
              <p className="text-[#162766] text-[16px] font-medium leading-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
 
export default AboutThree;
 
 