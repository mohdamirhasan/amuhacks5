
const AboutOurStuff = () => {
  return (
    <section id="about-events" className="py-15 md:py-30 px-6 bg-[#F0EAD6] jetbrains-mono">
      <div className="md:max-w-7xl max-w-9/10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Styled Image */}
        

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-[#71d2a1]">
              <div className="h-[1px] w-12 bg-[#7bd8a9]" />
              <span className="text-xl font-black uppercase tracking-[0.3em]">AMUHACKS5.0</span>
            </div>
            <h2 className="text-[#2C4A41] text-6xl md:text-7xl font-light tracking-tighter leading-none">
              About Our <br />
              <span className="text-[#71d2a1] font-black italic">Event</span>
            </h2>
          </div>

          <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-lg font-medium">
            AMUHACKS 5.0 is a flagship tech event organized by the Computer Science Society, featuring multiple exciting activities including national-level hackathons, Capture The Flag (CTF) competitions, university-level contests, and attractive prizes for participants.
          </p>

          <div className="grid grid-cols-2 gap-8 py-4">
            <div>
              <span className="block text-[#71d2a1] text-4xl font-black tracking-tighter">20k</span>
              <span className="text-[#2C4A41]/40 text-xs font-bold uppercase tracking-widest">Prize Pool</span>
            </div>
            <div>
              <span className="block text-[#71d2a1] text-4xl font-black tracking-tighter">4</span>
              <span className="text-[#2C4A41]/40 text-xs font-bold uppercase tracking-widest">Events</span>
            </div>
          </div>

          <button className="w-fit flex items-center space-x-4 bg-[#71d2a1] text-[#2C4A41]/70 px-10 py-4 rounded-full font-bold hover:bg-[#93E9BE] hover:text-[#2C4A41] transition-all hover:shadow-xl hover:shadow-[#93E9BE]/30">
            <span><a href="https://chat.whatsapp.com/EIr56rr5HNV9pwiUQHBMW8" target="_blank">JOIN WHATSAPP COMMUNITY</a></span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#93E9BE]/20 rounded-[2.5rem] transform -rotate-3 transition-transform group-hover:rotate-0" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="/assets/code.jpg" 
              alt="Hackathon event" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -top-6 -right-6 h-28 w-28 bg-[#2C4A41] rounded-2xl flex flex-col items-center justify-center border-4 border-[#93E9BE] shadow-xl rotate-12">
            <span className="text-[#93E9BE] text-2xl font-black">5.0</span>
            <span className="text-[#F0EAD6] text-[10px] font-bold uppercase tracking-widest">Edition</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStuff;