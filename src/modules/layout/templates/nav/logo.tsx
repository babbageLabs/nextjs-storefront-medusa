import React from "react"
import Link from "next/link";
import {STORE_NAME} from "@lib/config";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center h-full">
            <Link href="/">
                <a className="text-xl-semi uppercase">{STORE_NAME}</a>
            </Link>
        </div>
    )
}

export default Logo
