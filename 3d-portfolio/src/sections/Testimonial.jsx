import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="What People Say About Me" sub="Client Feedback Highlights" />
            <div className="lg:columns-3 md:columns-3 columns-1 mt-16">
                {testimonials.map((testimonial) => (
                    <GlowCard key={testimonial.name} card={testimonial}>
                        <div className="flex items-center gap-3">
                            <img src={testimonial.imgPath} alt={testimonial.name} />
                        </div>
                        <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-white-50">{testimonial.mentions}</p>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonial