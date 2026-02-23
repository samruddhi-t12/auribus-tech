import React from "react";
import HeroExperience from "../home/HeroExperience";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";

export default function Home() {

return (

<div
style={{
background: "transparent",
minHeight: "100vh",
width: "100%"
}}
>

<HeroExperience />


{/* METRICS — KEEP HERO GAP SAFE, tighten bottom */}

  <section className="text-white pt-24 pb-14 md:pt-32 md:pb-16 px-6 lg:px-20">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">


<Reveal>

<div className="group">

<div className="text-6xl md:text-7xl font-semibold mb-4 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-r from-[#E6C98A] to-[#00C6FF] bg-clip-text text-transparent">

<CountUp end={5} suffix="+" />

</div>

<div className="text-white/50 uppercase text-sm tracking-widest">
Years operating infrastructure
</div>

</div>

</Reveal>



<Reveal delay={200}>

<div className="group">

<div className="text-6xl md:text-7xl font-semibold mb-4 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-r from-[#E6C98A] to-[#00C6FF] bg-clip-text text-transparent">

<CountUp end={50} suffix="+" />

</div>

<div className="text-white/50 uppercase text-sm tracking-widest">
Systems deployed
</div>

</div>

</Reveal>



<Reveal delay={400}>

<div className="group">

<div className="text-6xl md:text-7xl font-semibold mb-4 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-r from-[#E6C98A] to-[#00C6FF] bg-clip-text text-transparent">

<CountUp end={99} suffix=".9%" />

</div>

<div className="text-white/50 uppercase text-sm tracking-widest">
Production reliability
</div>

</div>

</Reveal>


</div>

</section>



{/* INFRASTRUCTURE SECTION — tightened top gap */}
<section className="text-white pt-10 pb-16 md:pt-12 md:pb-20 px-6 lg:px-20">

<div className="max-w-6xl mx-auto">

<Reveal>


<h2 className="
text-3xl md:text-4xl font-medium mb-12
tracking-tight
text-white/90
">
The foundation behind your product
</h2>

</Reveal>



<div className="grid md:grid-cols-2 gap-10">


<Reveal>

<div className="group p-8 rounded-2xl border border-white/10 hover:border-[#00C6FF]/40 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2">

<h3 className="text-2xl font-semibold mb-4">
Architecture
</h3>

<p className="text-white/60">
Systems designed to remain stable, scalable, and reliable under production conditions.
</p>

</div>

</Reveal>



<Reveal delay={150}>

<div className="group p-8 rounded-2xl border border-white/10 hover:border-[#00C6FF]/40 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2">

<h3 className="text-2xl font-semibold mb-4">
Automation
</h3>

<p className="text-white/60">
Fully automated CI/CD pipelines ensuring safe and consistent deployments.
</p>

</div>

</Reveal>



<Reveal delay={300}>

<div className="group p-8 rounded-2xl border border-white/10 hover:border-[#00C6FF]/40 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2">

<h3 className="text-2xl font-semibold mb-4">
Security & Reliability
</h3>

<p className="text-white/60">
Infrastructure designed with protection and reliability at its core.
</p>

</div>

</Reveal>



<Reveal delay={450}>

<div className="group p-8 rounded-2xl border border-white/10 hover:border-[#00C6FF]/40 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2">

<h3 className="text-2xl font-semibold mb-4">
Application
</h3>

<p className="text-white/60">
Backend and application systems built for long-term scalability.
</p>

</div>

</Reveal>



</div>

</div>

</section>




{/* CTA — tightened top gap */}
<section className="text-white pt-12 pb-16 md:pt-16 md:pb-20 px-6 lg:px-20">

<div className="max-w-4xl mx-auto text-center">


<Reveal>

<h2 className="text-4xl md:text-5xl font-semibold mb-6">
Tell us what you're building.
</h2>

</Reveal>



<Reveal delay={200}>

<p className="text-white/60 mb-10 text-lg">
We’ll design the systems behind it.
</p>

</Reveal>



<Reveal delay={400}>

<a
href="/contact"
className="inline-block px-12 py-5 bg-white text-black rounded-lg font-semibold text-lg hover:scale-105 transition"
>
Start a conversation →
</a>

</Reveal>


</div>

</section>


<Footer />


</div>

);

}