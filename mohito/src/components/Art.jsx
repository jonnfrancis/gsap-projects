import { useMediaQuery } from "react-responsive"
import { featureLists, goodLists } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const artRef = useRef(null)

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : "top top";
        if (!artRef.current) return;
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: artRef.current,
                start,
                end: "+=150%",
                scrub: 2,
                pin: true,
                anticipatePin: 1
            }
        })

        maskTimeline
        .to('.will-fade', { opacity: 0, y: 20, ease: "sine.inOut", stagger: 0.1 })
        .to('.masked-img', { scale: 1.1, maskPosition: 'center', maskSize: "800%", webkitMaskSize: "800%", duration: 2, ease: "power2.inOut" }, "-=0.2")
        .to('#masked-content', { opacity: 1, y: 0, ease: "back.out(1.2)", duration: 1 }, "-=1")
    } ) 
  return (
    <div id="art" ref={artRef}>
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">The ART</h2>

            <div className="content">
                <ul className="space-y-4 will-fade">
                    {goodLists.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <img src="/images/check.png" alt="check" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
                <div className="cocktail-img">
                    <img src="/images/under-img.jpg" alt="cocktail" className="abs-center masked-img size-full object-contain" />
                </div>
                <ul className="space-y-4 will-fade">
                    {featureLists.map((feature, index) => (
                        <li key={index} className="flex items-center justify-start gap-2">
                            <img src="/images/check.png" alt="check" />
                            <p className="md:w-fit w-60">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="masked-container">
                <h2 className="will-fade">Sip-Worthy Perfection</h2>
                <div id="masked-content">
                    <h3>Made with Craft, Poured with Passion</h3>
                    <p>This isn't just a drink, It's a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art