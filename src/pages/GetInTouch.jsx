import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GetInTouch() {
  return (
    <div className="min-h-screen w-full bg-black  text-white flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 font-['Fliege_Mono']">Get in Touch</h1>
        <div className="w-full h-full flex-1 flex items-center justify-center">
          <form className="w-screen md:w-2/4 h-full bg-zinc-900 p-4 md:p-8 rounded-lg shadow-lg space-y-4 md:space-y-6 flex flex-col justify-center ">
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="bg-zinc-950 text-white border-white focus:ring-2 focus:ring-white h-12 md:h-14"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-zinc-950 text-white  border-white focus:ring-2 focus:ring-white h-12 md:h-14"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              required
              className="bg-zinc-950 text-white border-white focus:ring-2 focus:ring-white min-h-[150px] md:min-h-[200px]"
            />
            <Button type="submit" className="w-full font-['Fliege_Mono'] bg-zinc-950 border-white text-white hover:bg-white hover:text-black h-12 md:h-14 text-base md:text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
