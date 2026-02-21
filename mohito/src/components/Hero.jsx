import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        document.fonts.ready.then(() => {
            const heroSplit = new SplitText("#hero .title", { type: "chars, words" })
            const paragraphSplit = new SplitText("#hero .subtitle", { type: "lines" })

            heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

            gsap.from(heroSplit.chars, { yPercent: 100, stagger: 0.03, ease: "expo.out", duration: 1.5 })
            gsap.from(paragraphSplit.lines, { yPercent: 50, opacity: 0, stagger: 0.1, ease: "power3.out", duration: 1.2, delay: 0.6 })

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            })
                .to(".right-leaf", { y: 150, rotate: 15, }, 0)
                .to(".left-leaf", { y: -150, rotate: -15, }, 0)
        })

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, { currentTime: videoRef.current.duration })
        }

    }, [])
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>

                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses.</p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"></video>
            </div>
        </>
    )
}

export default Hero