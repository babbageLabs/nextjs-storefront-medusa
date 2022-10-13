import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import {STORE_NAME} from "@lib/config";

const Hero = () => {
    return (
        <div className="h-[90vh] w-full relative">
            <div
                className="text-fuchsia-600 absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
                <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
                    Grab you very own premium jewelery
                </h1>
                <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
                    {`Plunge into the magical world of ${STORE_NAME} and discover the Maison's signature collections, unique
                    pieces, and one-of-a-kind creations.`}
                </p>
                <UnderlineLink href="/store">Explore our products</UnderlineLink>
            </div>
            <Image
                src="/hero1.jpg"
                layout="fill"
                loading="eager"
                priority={true}
                quality={90}
                objectFit="cover"
                alt="hero"
                className="absolute inset-0"
                draggable="false"
            />
        </div>
    )
}

export default Hero
