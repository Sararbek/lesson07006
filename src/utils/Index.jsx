import { Suspense } from "react";

import loadingGif from "@/assets/loading_gif.gif"

const Loading = () => {
    return (
        <div className=" w-full h-screen fixed top-0 left-0 z-50 bg-primary-purple 
        flex items-center justify-center ">
            <img src={loadingGif} alt="" />
        </div>
    )
}

const SuspenseContainer = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}

export default SuspenseContainer