import React from 'react'

const SplashThree = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col items-center justify-center text-white relative overflow-hidden">

            {/* Loading Animation */}
            <div className="flex flex-col items-center space-y-12 animate-fade-in">
                {/* Progress Bar Container */}
                <div className="w-64 space-y-8">

                    {/* Progress Bar */}
                    <div className="w-full flex flex-col items-center">
                        <div className="w-1 h-96 bg-white rounded-full border-none overflow-hidden">
                            <div className="h-1/2 bg-black/40 rounded-full border-none"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-8">Loading...</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SplashThree