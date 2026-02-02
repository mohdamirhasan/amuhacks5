import React, { useState, useEffect, useCallback } from "react";

// --- Types ---
interface EventCard {
  title: string;
  description: string;
  image: string;
  location: string;
  dateTime: string;
  mode: string;
  platform: string;
  fee: string;
  targetDate: string;
  isMain?: boolean;
  link: string;
  // Added guidelines field for specific instructions
  guidelines?: React.ReactNode; 
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// --- Icons ---
const Icons = {
  Calendar: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
  MapPin: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Monitor: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Ticket: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  Info: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )
};

// --- Timer Component ---
const EventTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculate = useCallback(() => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [calculate]);

  if (!timeLeft) return <span>EVENT LIVE</span>;
  const f = (n: number) => n.toString().padStart(2, "0");
  
  return (
    <span className="text-[#93E9BE] font-black tracking-widest uppercase drop-shadow-sm">
      {f(timeLeft.days)}d : {f(timeLeft.hours)}h : {f(timeLeft.minutes)}m : {f(timeLeft.seconds)}s
    </span>
  );
};

// --- Main Component ---
const EventSchedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventCard | null>(null);

  const events: EventCard[] = [
    {
      title: "Software Hackathon (National)",
      description: "The flagship event of AMUHACKS 5.0. A 30-hour innovation marathon.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      location: "Virtual",
      dateTime: "10-11 Feb 2026",
      mode: "Online",
      platform: "DevFolio",
      fee: "Free",
      targetDate: "2026-02-10T00:00:00",
      isMain: true,
      link: "https://www.amuhacks-5.online/",
      // CHANGE 1: Added specific round details
      guidelines: (
        <div className="space-y-2">
           <p className="font-bold underline">Competition Structure (3 Rounds):</p>
           <ul className="list-disc pl-5 space-y-1">
             <li><span className="font-bold text-[#2C4A41]">Round 1:</span> Idea Submission (Deadline: 7th Feb)</li>
             <li><span className="font-bold text-[#2C4A41]">Round 2:</span> Hackathon (10-11th Feb)</li>
             <li><span className="font-bold text-[#2C4A41]">Round 3:</span> Final Round Presentation</li>
           </ul>
        </div>
      )
    },
    {
      title: "Quiz Competition",
      description: "Test your knowledge across computer science fundamentals.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      location: "Conference Hall, Dept. of Computer Science, AMU",
      dateTime: "11 Feb | 3:00 PM",
      mode: "Offline",
      platform: "On-Campus",
      fee: "₹100 / team",
      targetDate: "2026-02-11T15:00:00",
      link: "https://forms.gle/p3EUuFGb3Vdtf8V96",
      // CHANGE 2: Added seat limit note
      guidelines: (
        <p className="font-bold text-red-600/80 bg-red-50 p-2 rounded-md border border-red-100">
           ⚠️ Important Note: Limited seats available (10 teams only). Register ASAP.
        </p>
      )
    },
    {
      // CHANGE 3: Updated Title
      title: "Coding and Debugging Competition",
      description: "Showcase your algorithmic thinking on HackerRank.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      location: "Conference Hall, Dept. of Computer Science, AMU",
      dateTime: "10 Feb | 3:00 PM",
      mode: "Offline",
      platform: "HackerRank",
      fee: "₹40 / person",
      targetDate: "2026-02-10T15:00:00",
      link: "https://forms.gle/BHogpSLVbo2aYP1V9",
    },
    {
      title: "Capture The Flag (CTF)",
      description: "A cybersecurity battleground focusing on cryptography.",
      image: "https://certify.cybervista.net/wp-content/uploads/2020/05/BLOG_Capture-the-Flag.png",
      location: "Virtual Environment",
      dateTime: "13 Feb | 6:00 PM",
      mode: "Online",
      platform: "TBA",
      fee: "₹50 / person",
      targetDate: "2026-02-13T18:00:00",
      link: "https://unstop.com/p/capture-the-flag-aligarh-muslim-university-amu-aligarh-1630899",
    },
  ];


  return (
    <section id="event-schedule" className="py-10 px-6 md:px-12 lg:px-24 bg-[#F0EAD6] font-sans overflow-hidden jetbrains-mono min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[15px] font-black uppercase tracking-[0.4em]">
              Event Lineup 2026
            </span>
          </div>
          <h2 className="text-[#2C4A41] text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
            AMUHACKS <span className="text-[#93E9BE] jetbrains-mono-italic">Timeline</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-white/40 border border-[#93E9BE]/20 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2">
              
              {/* BIGGER TIMER */}
              <div className="absolute top-8 left-8 z-20 bg-[#2C4A41]/90 backdrop-blur-md text-[#F0EAD6] px-5 py-3 rounded-2xl font-bold text-xs md:text-sm shadow-xl border border-[#93E9BE]/30">
                <EventTimer targetDate={event.targetDate} />
              </div>

              <div className="h-72 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              <div className="p-10 pt-6 text-left flex flex-grow bg-white/20 backdrop-blur-sm flex-col">
                <h3 className="text-[#2C4A41] text-2xl font-black mb-3 tracking-tighter flex items-center justify-between">
                  {event.title}
                  {event.isMain && (
                    <span className="text-[10px] bg-[#93E9BE] text-[#2C4A41] px-3 py-1 rounded-full uppercase tracking-widest font-black">
                      Flagship
                    </span>
                  )}
                </h3>
                <p className="text-[#2C4A41]/70 text-base leading-relaxed mb-6 font-medium line-clamp-3">
                  {event.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#2C4A41]/10">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-[#2C4A41] font-black text-[10px] uppercase tracking-widest flex items-center hover:text-[#93E9BE] transition-colors">
                    View Guidelines
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPACT MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#2C4A41]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedEvent(null)}
          />
          
          <div className="relative bg-[#F0EAD6] w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 ring-4 ring-[#93E9BE]/20 max-h-[90vh] flex flex-col">
            
            {/* 1. Header Section */}
            <div className="bg-[#2C4A41] p-8 md:p-10 relative overflow-hidden flex-shrink-0">
               {/* Decorative elements */}
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[#93E9BE] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-[#93E9BE] rounded-full blur-3xl opacity-10 pointer-events-none"></div>

               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-[#93E9BE] text-[10px] font-black uppercase tracking-[0.3em] border border-[#93E9BE]/30 px-2 py-1 rounded">
                      Official Guidelines
                    </span>
                    <button onClick={() => setSelectedEvent(null)} className="text-[#93E9BE] hover:text-white transition-colors">
                      <Icons.Close />
                    </button>
                 </div>
                 <h3 className="text-[#F0EAD6] text-3xl font-black tracking-tighter leading-none">
                  {selectedEvent.title}
                 </h3>
               </div>
            </div>

            {/* 2. Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
                {/* Cell 1 */}
                <div className="flex flex-col space-y-1">
                   <div className="flex items-center space-x-2 text-[#2C4A41]/50 mb-1">
                      <Icons.Calendar />
                      <span className="text-[10px] font-black uppercase tracking-widest">Schedule</span>
                   </div>
                   <p className="text-[#2C4A41] font-bold text-sm leading-tight">{selectedEvent.dateTime}</p>
                </div>

                {/* Cell 2 */}
                <div className="flex flex-col space-y-1">
                   <div className="flex items-center space-x-2 text-[#2C4A41]/50 mb-1">
                      <Icons.Monitor />
                      <span className="text-[10px] font-black uppercase tracking-widest">Platform</span>
                   </div>
                   <p className="text-[#2C4A41] font-bold text-sm leading-tight">{selectedEvent.mode} on {selectedEvent.platform}</p>
                </div>

                {/* Cell 3 */}
                <div className="flex flex-col space-y-1">
                   <div className="flex items-center space-x-2 text-[#2C4A41]/50 mb-1">
                      <Icons.MapPin />
                      <span className="text-[10px] font-black uppercase tracking-widest">Location</span>
                   </div>
                   <p className="text-[#2C4A41] font-bold text-sm leading-tight">{selectedEvent.location}</p>
                </div>

                {/* Cell 4 */}
                <div className="flex flex-col space-y-1">
                   <div className="flex items-center space-x-2 text-[#2C4A41]/50 mb-1">
                      <Icons.Ticket />
                      <span className="text-[10px] font-black uppercase tracking-widest">Fee</span>
                   </div>
                   <p className="text-[#2C4A41] font-bold text-sm leading-tight">{selectedEvent.fee}</p>
                </div>
              </div>

              {/* NEW SECTION: Specific Guidelines Display */}
              {selectedEvent.guidelines && (
                <div className="mb-8 p-4 bg-white/50 rounded-xl border border-[#2C4A41]/10 text-xs md:text-sm text-[#2C4A41]/80 leading-relaxed">
                   <div className="flex items-center space-x-2 text-[#2C4A41] mb-2 font-black uppercase tracking-widest text-[10px]">
                      <Icons.Info />
                      <span>Special Details</span>
                   </div>
                   {selectedEvent.guidelines}
                </div>
              )}

              {/* 3. Divider & Footer */}
              <div className="border-t-2 border-dashed border-[#2C4A41]/10 pt-6">
                 {selectedEvent.link ? (
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-[#2C4A41]/80 text-xs font-medium italic hidden md:block w-1/2">
                        *Registration required before deadline
                        </p>
                      
                      <a 
                        href={selectedEvent.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="
                          w-full md:w-auto 
                          bg-[#93E9BE] text-[#2C4A41] 
                          px-8 py-4 
                          rounded-xl 
                          font-black uppercase tracking-widest text-sm 
                          hover:scale-105 hover:shadow-xl
                          transition-all duration-300
                          shadow-lg
                          text-center
                          flex-1
                        "
                      >
                        Register Now
                      </a>
                    </div>
                 ) : (
                   <p className="text-center text-[#2C4A41]/50 font-black uppercase text-xs tracking-widest">
                     Registrations Closed or Coming Soon
                   </p>
                 )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default EventSchedule;