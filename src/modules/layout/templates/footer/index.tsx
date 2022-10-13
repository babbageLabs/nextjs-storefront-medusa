import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface FooterProps {
    withoutCta?: boolean
}

const Footer = ({withoutCta}: FooterProps) => {
    return (
        <footer>
            {
                !withoutCta &&  <FooterCTA/>
            }
            <FooterNav/>
        </footer>
    )
}

export default Footer
