import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React, {useEffect, useState} from "react"
import {useRouter} from "next/router";

const Layout: React.FC = ({children}) => {
    const {pathname} = useRouter()
    const [isHome, setIsHome] = useState(false)

    useEffect(() => {
        pathname === "/" ? setIsHome(true) : setIsHome(false)
    }, [pathname])

    return (
        <div>
            <Nav isHome={isHome}/>
            <main className="relative">{children}</main>
            <Footer withoutCta={!isHome}/>
        </div>
    )
}

export default Layout
