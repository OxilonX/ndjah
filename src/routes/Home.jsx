import heroImg from "../assets/images/girl_student_laptop.svg";
import { DraftingCompass, HatGlasses, Goal } from "lucide-react";
//Local Components imports
import { ModuleCard } from "@/components/localComponents/ModuleCard";
export default function Home() {
  return (
    <>
      <section
        id="hero-page"
        className="grid grid-cols-2 items-center container mx-auto px-8 mt-[-40px] min-h-screen"
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl text-foreground font-black uppercase leading-16">
            Your First Step to be the Major of Your Promotion
          </h1>
          <p className="w-5/6 text-sm text-muted-foreground  font-medium leading-6.5">
            Stop guessing your grades and start tracking your success. Get a
            precise breakdown of your modules and see exactly what you need to
            reach the top of your class
          </p>
        </div>
        <div className="justify-self-end w-full max-w-[600px]">
          <img className="w-full h-auto " src={heroImg} alt="Hero" />
        </div>
      </section>
      <section
        id="features-page"
        className=" container mx-auto px-8  py-20 bg-foreground"
      >
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 bg-primary rounded-full">
              <DraftingCompass />
            </div>
            <h3 className="text-xl text-background font-bold">
              Precise Calculation
            </h3>
            <p className="text-background opacity-70  text-sm">
              Tailored for the Algerian LMD system with updated coefficients for
              S3 and S4.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 bg-primary rounded-full">
              <HatGlasses />
            </div>
            <h3 className="text-xl text-background font-bold">Privacy First</h3>
            <p className="text-background opacity-70  text-sm">
              Your marks are stored locally. No one sees your academic data but
              you.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="p-3 bg-primary rounded-full">
              <Goal />
            </div>
            <h3 className="text-xl text-background font-bold">Target Goals</h3>
            <p className="text-background opacity-70  text-sm">
              Calculate exactly what you need in your exams to become the Major
              of your promo.
            </p>
          </div>
        </div>
      </section>
      <section id="modules-page" className="  min-h-screen">
        <div className="container mx-auto px-8 flex flex-col ">
          <h1 className="text-4xl font-bold text-foreground text-center capitalize py-space-1">
            master your modules
          </h1>
          <div className="grid grid-cols-4 gap-10">
            <ModuleCard
              channel={"Mohammed Chinawi"}
              image={
                "https://i.ytimg.com/vi/dWoR6-toOCY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAz9_HJi7Lvxvzup1nVskvJf6bV_A"
              }
              youtubeUrl={
                "https://www.youtube.com/watch?v=dWoR6-toOCY&list=PL2aehqZh72LvM6VRvik9Pb-oCngTsB800"
              }
              title={"Logique booléenne (Algèbre de Boole) - Introduction"}
            ></ModuleCard>
            <ModuleCard
              image="https://i.ytimg.com/an_webp/M4rEGwqJZc0/mqdefault_6s.webp?du=3000&sqp=COSHvMsG&rs=AOn4CLAdG8khCxZLhqGcC9HKoX6wDf8wGA"
              youtubeUrl="https://www.youtube.com/watch?v=UD9vf06mPyE"
              title="Simplification des expressions : Algèbre de Boole"
              description="Master the core concepts of logic gates and Boolean simplification, essential for your Architecture 1 module."
              channel={"Mzabi Jbanta"}
            ></ModuleCard>

            <ModuleCard
              image="https://i.ytimg.com/an_webp/C4yvadVl8ho/mqdefault_6s.webp?du=3000&sqp=CMKvvMsG&rs=AOn4CLAnNdZfXOw9itvvD-_l5WEEXDEzdQ"
              youtubeUrl="https://www.youtube.com/watch?v=ZhuFkvgi-ZA"
              title="Logique combinatoire et Logigrammes"
              description="Understanding how hardware and software communicate through logic circuits—a key pillar for OS and Architecture."
              channel={"Phobia Isaac"}
            ></ModuleCard>

            <ModuleCard
              image="https://i.ytimg.com/an_webp/-yYB0mkx4jY/mqdefault_6s.webp?du=3000&sqp=CIiLvMsG&rs=AOn4CLCOgQlREyQP4PsuO6olGWGN9IKZHQ"
              youtubeUrl="https://www.youtube.com/watch?v=C5z_EWnMjOI"
              title="Math Appliquée : Conversion Numérique"
              description="Learn binary, hex, and decimal conversions used in low-level programming and data representation."
              channel={"Trap King"}
            ></ModuleCard>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}
