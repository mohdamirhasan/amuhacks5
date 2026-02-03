import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FacultyMember = {
  name: string;
  designation: string;
  imageUrl: string;
};

type LeadTeam = {
  name: string;
  role: string;
  class: string;
  imageUrl: string;
};

type TechTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type GraphicsTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type PRTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

type VolunteerTeam = {
  name: string;
  class: string;
  imageUrl: string;
};

const Team = () => {
  const faculty: FacultyMember[] = [
    {
      name: "Prof. Arman Rasool Faridi",
      designation: "President, CSS",
      imageUrl: "/assets/armansir.jpg",
    },
    {
      name: "Prof. Aasim Zafar",
      designation: "Ex. President, CSS",
      imageUrl: "/assets/aasimsir.jpg",
    },
    {
      name: "Dr. Mohammad Nadeem",
      designation: "Convener, CSS",
      imageUrl: "/assets/nadeemsir.jpg",
    },
    {
      name: "Dr. Faisal Anwar",
      designation: "Mentor, CSS",
      imageUrl: "/assets/faisalsir.jpg",
    },
    {
      name: "Dr. Faraz Masood",
      designation: "Mentor, CSS",
      imageUrl: "/assets/farazsir.jpg",
    },
  ];

  const tech: TechTeam[] = [
    {
      name: "Lalit Kumar",
      class: "MCA II",
      imageUrl: "/assets/lalit.jpg",
    },
    {
      name: "Mohd Amir Hasan",
      class: "B.Sc. II",
      imageUrl: "/assets/amir.jpg",
    },
    {
      name: "Madni Mahmood",
      class: "B.Sc. II",
      imageUrl: "/assets/madni.jpg",
    },
    {
      name: "Khushnuma Khatoon",
      class: "B.Sc. III",
      imageUrl: "/assets/name.jpg",
    },
    {
      name: "Sumaniya",
      class: "MCA I",
      imageUrl: "/assets/sumaniya.jpeg",
    },
    {
      name: "Sadaf Shahid",
      class: "B.Sc. I",
      imageUrl: "/assets/sadaf.jpg",
    },
  ];

  const lead: LeadTeam[] = [
    {
      name: "Tuba Rahman",
      role: "Coordinator",
      class: "B.Sc. (Research) IV",
      imageUrl: "/assets/tuba.jpg",
    },
    {
      name: "Syed Umar Ali",
      role: "Secretary",
      class: "B.Sc. (Research) IV",
      imageUrl: "/assets/umar.jpg",
    },
    {
      name: "Aftab Ansari",
      role: "Student Mentor",
      class: "MCA II",
      imageUrl: "/assets/aftab.jpg",
    },
    {
      name: "Mohd Ali Abbas",
      role: "CyberSecurity Lead",
      class: "M.Sc. II",
      imageUrl: "/assets/ali.jpg",
    },
    {
      name: "Syed Bilal Ahmad",
      role: "AI/ML Lead",
      class: "MCA II",
      imageUrl: "/assets/bilal.jpg",
    },
    {
      name: "Sameer",
      role: "Web Development Lead",
      class: "MCA II",
      imageUrl: "/assets/sameer.jpg",
    },
    {
      name: "Saurav Singh",
      role: "DSA Lead",
      class: "B.Sc. (Research) IV",
      imageUrl: "/assets/saurav.jpg",
    },
  ];

  const graphics: GraphicsTeam[] = [
    {
      name: "Shoaib Ahmad",
      class: "B.Sc. III",
      imageUrl: "/assets/shoib.jpg",
    },
    {
      name: "Homa Mahmood",
      class: "B.Sc. IV",
      imageUrl: "/assets/homa.jpg",
    },
    {
      name: "Sayyada Afifa",
      class: "B.Sc. II",
      imageUrl: "/assets/afifa.jpg",
    },
    {
      name: "Haseen Fatima",
      class: "B.Sc. II",
      imageUrl: "/assets/haseen.jpg",
    },
    {
      name: "Musaib Bin Sameer",
      class: "B.Sc. I",
      imageUrl: "/assets/musaib.jpg",
    },
  ];

  const pr: PRTeam[] = [
    {
      name: "Ahamad Mustafa Khowaja",
      class: "B.Sc. II",
      imageUrl: "/assets/ahmad.jpg",
    },
    {
      name: "Mohammad Areeb",
      class: "B.Sc. II",
      imageUrl: "/assets/areeb.jpg",
    },
    {
      name: "Efa Arif",
      class: "B.Sc. IV",
      imageUrl: "/assets/efa.jpg",
    },
  ];

  const volunteer: VolunteerTeam[] = [
    {
      name: "Maria Ali",
      class: "B.Sc. II",
      imageUrl: "/assets/maria.jpg",
    },
    {
      name: "Nuwaira Noor",
      class: "B.Sc. I",
      imageUrl: "/assets/nuwaira.jpg",
    },
  ];

  return (
    <div id="teams" className="flex flex-col gap-6 items-center justify-center bg-[#F0EAD6] w-full h-full py-8 jetbrains-mono">
      <div className="flex items-center space-x-3 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[15px] font-black uppercase tracking-[0.4em]">Meet the team</span>
          </div>

          <h2 className="text-[#2C4A41] text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]">
            Faculty Members
          </h2>
      <div className="faculty-members grid grid-cols-2 md:flex md:flex-wrap gap-10 justify-center items-center md:px-16 m-4">
        {faculty.map((facultyMember) => (
          <div className="team flex flex-col items-center justify-center gap-2">
        <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
          <img
          className="rounded-full aspect-square object-cover w-full transition-transform duration-700 group-hover:scale-110"
          src={facultyMember.imageUrl}
          alt={facultyMember.name}
          />
        </div>
        <div className="details flex flex-col gap-0 items-center justify-center">
          <div className="text-[#2C4A41] name font-bold text-center text-sm md:text-base">
            {facultyMember.name}
          </div>
          <div className="designation text-center text-gray-500 text-sm md:text-base">
            {facultyMember.designation}
          </div>
        </div>
          </div>
        ))}
      </div>

      <h2 className="text-[#2C4A41] text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-[0.9]">
            Team Members
          </h2>
      <div className="team-members flex flex-wrap gap-12 w-full justify-center items-center py-4 ">
        <Tabs
          defaultValue="lead"
          className="flex flex-col gap-12 justify-center items-center w-full">
          <TabsList className="flex gap-4 bg-[#F0EAD6] flex-wrap justify-center items-center">
            <TabsTrigger
              value="lead"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165] max-w-fit">
              Leads
            </TabsTrigger>
            <TabsTrigger
              value="tech"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165] max-w-fit">
              Tech
            </TabsTrigger>
            <TabsTrigger
              value="graphics"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165] max-w-fit">
              Graphics
            </TabsTrigger>
            <TabsTrigger
              value="pr"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165] max-w-fit">
              PR
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              className="text-white bg-[#4b2903] data-[state=active]:bg-[#c1a165] max-w-fit">
              Volunteer
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-wrap gap-12 justify-center items-center p-10">
            <TabsContent
              value="lead"
              className="w-full gap-12 justify-center items-center grid grid-cols-2 md:flex md:flex-wrap md:px-16">
              {lead.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2">
                  <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
                    <img
                      className="rounded-full aspect-square object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-[800px] font-bold text-center tracking-tighter text-sm md:text-base">
                      {teamMember.name}
                    </div>
                    <div className="text-black name font-bold text-center tracking-tighter text-xs md:text-base">
                      {teamMember.role}
                    </div>
                    <div className="designation text-center text-gray-500 tracking-tighter text-sm md:text-base">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="tech"
              className="w-full justify-center items-center grid grid-cols-2 md:flex md:flex-wrap gap-10 md:px-16">
              {tech.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2">
                  <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
                    <img
                      className="rounded-full aspect-square object-cover w-full transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center tracking-tighter text-sm md:text-base">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500 tracking-tighter text-sm md:text-base">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="graphics"
              className="w-full justify-center items-center grid grid-cols-2 md:flex md:flex-wrap gap-10 md:px-16">
              {graphics.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2">
                  <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
                    <img
                      className="rounded-full aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center tracking-tighter text-sm md:text-base">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500 tracking-tighter text-sm md:text-base">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="pr"
              className="w-full justify-center items-center grid grid-cols-2 md:flex md:flex-wrap gap-10 md:px-16">
              {pr.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2">
                  <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
                    <img
                      className="rounded-full aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center tracking-tighter text-sm md:text-base">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500 text-sm md:text-base tracking-tighter">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="volunteer"
              className="w-full justify-center items-center grid grid-cols-2 md:flex md:flex-wrap gap-10 md:px-16">
              {volunteer.map((teamMember) => (
                <div className="team flex flex-col items-center justify-center gap-2">
                  <div className="relative rounded-full aspect-square overflow-hidden shadow-xs w-32 sm:w-40 md:w-48 lg:w-56">
                    <img
                      className="rounded-full aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="details flex flex-col items-center justify-center">
                    <div className="text-[#2C4A41] name font-bold text-center text-sm md:text-base tracking-tighter">
                      {teamMember.name}
                    </div>
                    <div className="designation text-center text-gray-500 text-sm md:text-base tracking-tighter">
                      {teamMember.class}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Team;
