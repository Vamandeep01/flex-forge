import React from 'react'
import bgImage from '@/assets/images/splash-4-bg.png'

const SplashFour = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Background Image/Pattern */}
            <img src={bgImage} alt="Fitness motivation" className="w-full h-full object-cover opacity-80 absolute" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-8">
                <div className="relative flex items-end">
                    <div className="text-8xl font-bold text-white leading-0">98</div>
                    <div className="text-orange-500 text-6xl font-bold leading-0 ">%</div>
                </div>
            </div>
        </div>
    )
}

export default SplashFour