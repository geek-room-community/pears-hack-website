import React from 'react';
import tshirt from '../assets/prizes/tshirt.png';
import mug from '../assets/prizes/mug.png';
import airpods from '../assets/prizes/airpods.png';
import tablet from '../assets/prizes/tablet.png';
import jetbrains from '../assets/prizes/jetBrains.png';
import amazon from '../assets/prizes/amazon.png';

const Prize = () => {
    const prizeData = [
        {
            id: 1,
            title: "AIRPODS",
            image: [airpods],
            class: "xl:w-40 xl:h-40 md:w-24 md:h-24 w-20 h-20",
            description: "AirPods",
        },
        {
            id: 2,
            title: "CASH PRIZE",
            image: [],
            class: "xl:w-40 xl:h-40 md:w-24 md:h-24 w-20 h-20",
            description: "1,00,000",
        },
        {
            id: 3,
            title: "SAMSUNG TAB",
            image: [tablet],
            class: "xl:w-40 xl:h-40 md:w-24 md:h-24 w-20 h-20",
            description: "Samsung Tab",
        },
        {
            id: 4,
            title: "JETBRAINS ID",
            image: [jetbrains],
            class: "xl:w-32 xl:h-32 md:w-20 md:h-20 w-16 h-12",
            description: "JetBrains ID",
        },
        {
            id: 5,
            title: "FREE AMAZON VOUCHERS",
            image: [amazon],
            class: "xl:w-40 xl:h-24 md:w-20 md:h-20 w-24 h-16",
            description: "Amazon Vouchers",
        },
        {
            id: 6,
            title: "FREE GOODIES AT YOUR DOORSTEP",
            image: [tshirt, mug],
            class: "xl:w-28 xl:h-24 w-16 h-12",
            description: "Free Goodies",
        },
    ];

    return (
        <div className='mb-60 xl:mb-24 2xl:mb-4 h-fit overflow-y-auto scrollbar-hide'>
            <div className='w-full h-full grid grid-cols-2 gap-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6 lg:gap-y-4'>
                {prizeData.map((prize) => (
                    <div key={prize.id} className='w-[170px] h-full lg:w-[215px] lg:h-52 xl:w-[250px] xl:h-64 py-4 lg:py-8 bg-[#1A1A1A] rounded-3xl text-white flex flex-col items-center justify-between '>
                        <div className='flex flex-row items-center justify-center'>
                            {prize.image.length > 0 ? prize.image.map((image) => (
                                <img src={image} alt={prize.title} className={`${prize.class} object-contain`} />
                            )) : <p className='text-white text-2xl md:text-4xl xl:text-6xl font-bold -tracking-[0.06em] pt-6 xl:pt-12'>{prize.description}</p>}
                        </div>
                        <h1 className='text-white text-sm lg:text-lg xl:text-2xl font-medium md:font-bold -tracking-[0.05em] px-6'>{prize.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prize;