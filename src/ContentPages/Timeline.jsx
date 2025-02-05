import React from "react";

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      title: "REGISTRATION ENDS",
      completed: true,
      align: "right",
      Date: "28th Feb. 2025 ",
      dateAlign: "left",
    },
    {
      id: 2,
      title: "MENTORING - ROUND 1",
      completed: true,
      align: "left",
      Date: "2 Mar 2025 6:00PM-IST ",
      dateAlign: "right",
    },
    {
      id: 3,
      title: "RESULTS - ROUND 1",
      completed: true,
      align: "right",
      Date: "4 Mar 2025",
      dateAlign: "left",
    },
    {
      id: 4,
      title: "MENTORING - ROUND 2",
      completed: true,
      align: "left",
      Date: "9 Mar 2025 6:00PM-IST",
      dateAlign: "right",
    },
    {
      id: 5,
      title: "RESULTS - ROUND 2",
      completed: true,
      align: "right",
      Date: "11 Mar 2025",
      dateAlign: "left",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen mt-0 sm:mt-28 ml-0 sm:ml-11">
      <div className="relative w-[360px] sm:w-[500px]">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#b6dd48] h-full">
          <div className="absolute w-full h-[60%] bg-[#b6dd48]" />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-32 relative">
          {timelineItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center relative">
              {/* Outer Circle */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 sm:w-14 h-8 sm:h-14 rounded-full 
                ${item.completed ? "bg-[#333333]" : "bg-[#333333]"}`}
              >
                {/* Inner Circle */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-3 sm:w-5 h-3 sm:h-5 rounded-full ${
                    item.completed ? "bg-[#b6dd48]" : "bg-white"
                  }`}
                />
              </div>

              {/* Title */}
              <div
                className={`absolute ${
                  item.align === "left" && item.dateAlign === `right`
                    ? "text-right right-[55%] pr-4 sm:right-[calc(50%+3rem)]"
                    : "text-left left-[55%] pl-4 sm:left-[calc(50%+3rem)]"
                } w-[45%] sm:w-auto`}
              >
                <h3 className="font-['Bebas_Neue'] text-sm sm:text-2xl tracking-wider text-white whitespace-nowrap">
                  {item.title}
                </h3>
                <h4 className="font-['Bebas_Neue'] text-sm sm:text-xl tracking-wider text-white whitespace-nowrap">
                  {item.Date}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
