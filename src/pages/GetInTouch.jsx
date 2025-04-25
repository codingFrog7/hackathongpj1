import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <div className="w-full max-w-xl">
        <form className="bg-zinc-900 p-6 rounded-lg shadow-lg space-y-6">
          <Input
            type="text"
            placeholder="Your Name"
            required
            className="bg-zinc-950 text-white border-white focus:ring-2 focus:ring-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            required
            className="bg-zinc-950 text-white border-white focus:ring-2 focus:ring-white"
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            required
            className="bg-zinc-950 text-white border-white focus:ring-2 focus:ring-white"
          />
          <Button type="submit" className="w-full bg-zinc-950 border-white text-white hover:bg-white hover:text-black ">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
