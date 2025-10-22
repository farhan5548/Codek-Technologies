import React from 'react'

function MediaCard({username = "New Card", pic}) {
    // console.log("props", props);
    return (
        <>
            <div className="relative h-[400px] w-[300px] my-4">
                <img
                    src={pic || "/src/assets/red-goku.png"}
                    alt="AirMax Pro"
                    className="2-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{username}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis? I
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        View Profile →
                    </button>
                </div>
            </div>
        </>
    )
}

export default MediaCard