import React from 'react'
import maleImage from '@/assets/images/male-2.png'
import qoutesIcon from '@/assets/icons/quotes.svg'
const SplashTwo = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-end text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 absolute"></div>
                <img
                    src={maleImage}
                    alt="Fitness motivation"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full p-8">
                {/* Quote Icon */}
                <div className="mb-8">
                    <div className="p-4 bg-orange-500 rounded-2xl text-center flex items-center ">
                        <img src={qoutesIcon} alt="Quotes Icon" className="w-8 h-8" />
                    </div>
                </div>

                {/* Quote Text */}
                <div className="text-center space-y-8 max-w-sm">
                    <blockquote className="text-xl font-medium leading-relaxed">
                        "Remember, physical fitness can neither be acquired by wishful thinking nor by outright purchase."
                    </blockquote>

                    <div className="pt-4">
                        <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
                            — JOSEPH PILATES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashTwo