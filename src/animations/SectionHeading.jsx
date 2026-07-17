import FadeIn from "./FadeIn";

export default function SectionHeading({
    title,
    subtitle,
}) {
    return (
        <div className="text-center mb-20">

            <FadeIn>

                <h2 className="text-6xl md:text-8xl font-black uppercase bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">

                    {title}

                </h2>

            </FadeIn>

            <FadeIn delay={0.2}>

                <p className="mt-6 max-w-3xl mx-auto text-gray-400">

                    {subtitle}

                </p>

            </FadeIn>

        </div>
    );
}