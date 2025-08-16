import React from 'react'
import plusIcon from '@/assets/icons/big-plus.svg'

const SplashOne = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center text-white relative overflow-hidden">

            {/* Main Content */}
            <div className="flex flex-col items-center  animate-fade-in p-8">
                {/* Logo */}
                <div className="relative mb-3">
                    <div className="p-4 text-center flex items-center">
                        <img src={plusIcon} alt="Plus Icon" className="w-20 h-20" />
                    </div>
                </div>

                {/* Brand */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">FlexForge</h1>
                    <p className="text-white/80 text-lg font-medium">
                        Your personal AI fitness coach.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default SplashOne