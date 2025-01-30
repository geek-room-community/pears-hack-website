import React from "react";

const Timeline = () => {
  const timelineItems = [
    { id: 1, title: "REGISTRATION ENDS", completed: true, align: "right" },
    { id: 2, title: "MENTORING - ROUND 1", completed: true, align: "left" },
    { id: 3, title: "RESULTS - ROUND 1", completed: true, align: "right" },
    { id: 4, title: "MENTORING - ROUND 2", completed: false, align: "left" },
    { id: 5, title: "RESULTS - ROUND 2", completed: false, align: "right" },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen mt-0 sm:mt-28 ml-0 sm:ml-10">
      <div className="relative w-[360px] sm:w-[500px]">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#98FF98] h-full">
          <div className="absolute w-full h-[60%] bg-[#79be58]" />
          <div className="absolute top-[60%] w-full h-[40%] bg-gray-500" />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-32 relative">
          {timelineItems.map((item) => (
            <div key={item.id} className="flex items-center relative">
              {/* Outer Circle */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 sm:w-14 h-8 sm:h-14 rounded-full 
                ${item.completed ? "bg-[#333333]" : "bg-[#333333]"}`}
              >
                {/* Inner Circle */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-3 sm:w-5 h-3 sm:h-5 rounded-full ${item.completed ? 'bg-[#79be58]' : 'bg-white'}`} />
              </div>

              {/* Text */}
              <div
                className={`absolute ${
                  item.align === "left"
                    ? "text-right right-[55%] pr-4 sm:right-[calc(50%+3rem)]"
                    : item.align === "right" &&
                      "text-center sm:text-left left-[70%] transform -translate-x-1/2 sm:translate-x-0 sm:left-[calc(50%+3rem)]"
                } w-[45%] sm:w-auto`}
              >
                <h3 className="font-['Bebas_Neue'] text-sm sm:text-3xl tracking-wider text-white whitespace-nowrap">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
