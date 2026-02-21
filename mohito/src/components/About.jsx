import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", { type: "words" })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
            }
        })

        scrollTimeline
            .from(titleSplit.words, { opacity: 0, y: 30, rotationX: -45, duration: 1, stagger: 0.03, ease: "expo.out" })
            .from(".badge, .sub-content", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
        
        const gridItems = gsap.utils.toArray(".grid-item")

        gsap.from(gridItems, {
            opacity: 0,
            scale: 0.9,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".top-grid",
                start: "top 90%"
            }
        })
})
return (
    <div id="about">
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Best Cocktails</p>
                    <h2>Where every detail matters <span className="text-white">-</span> from muddle to garnish</h2>
                </div>
                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with detail, from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                    <div>
                        <p className="md:text-3xl text-xl font-bold">
                            <span>4.5</span>/5
                        </p>
                        <p className="text-sm text-white-100">
                            More than +12000 customers
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="top-grid">
            <div className="md:col-span-3 grid-item">
                <div className="noisy">
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>
            </div>

            <div className="md:col-span-6">
                <div className="noisy">
                    <img src="/images/abt2.png" alt="grid-img-2" />
                </div>
            </div>

            <div className="md:col-span-3 grid-item">
                <div className="noisy">
                    <img src="/images/abt5.png" alt="grid-img-5" />
                </div>
            </div>
        </div>

        <div className="bottom-grid">
            <div className="md:col-span-8 grid-item">
                <div className="noisy">
                    <img src="/images/abt3.png" alt="grid-img-3" />
                </div>
            </div>

            <div className="md:col-span-4 grid-item">
                <div className="noisy">
                    <img src="/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>
        </div>
    </div>
)
}

export default About