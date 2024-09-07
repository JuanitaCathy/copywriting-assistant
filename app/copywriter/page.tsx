"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const SidebarItem = ({ label, icon }: { label: string; icon: JSX.Element }) => (
  <div className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#00b4d8] to-[#9b5de5] text-white rounded-md cursor-pointer transition-all duration-300 whitespace-nowrap z-10">
    {icon}
    <span className="text-sm font-medium ml-2">{label}</span>
  </div>
);

const Copywriter: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [tone, setTone] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const router = useRouter();

  const sendUserInput = () => {
    // This is where you'd handle sending userInput and tone to your AI.
    setAiResponse("This is a mock response from the AI.");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Effects */}
      <StarsBackground className="absolute inset-0 z-1" />
      <ShootingStars className="absolute inset-0 z-1" />

      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1a1a2e] p-4 shadow-lg z-20">
          <div className="flex items-center mb-5">
            <Image
              src="/NovaCopy_white.png"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3 mt-5 text-white">
              <h2 className="text-xl font-semibold">NovaCopy AI</h2>
              <button className="text-[#00b4d8] hover mt-4">
                Upgrade your plan
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <SidebarItem label="Create Custom Copy" icon={<svg />} />
            <SidebarItem label="Templates" icon={<svg />} />
            <SidebarItem label="Option 1" icon={<svg />} />
            <SidebarItem label="Settings" icon={<svg />} />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8 flex space-x-8 text-white z-20">
          {/* User Input Section */}
          <section className="w-1/2 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">Prompt</h2>
            <textarea
              className="w-full h-32 p-4 border border-[#00b4d8] bg-[#16213e] text-white rounded-md"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>

            <h2 className="text-2xl font-semibold">Tone</h2>
            <textarea
              className="w-full h-24 p-4 border border-[#00b4d8] bg-[#16213e] text-white rounded-md"
              placeholder="Specify the tone (e.g., Formal, Friendly, etc.)"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            ></textarea>

            <button
              className="self-start px-6 py-2 mt-4 bg-gradient-to-r from-[#00b4d8] to-[#9b5de5] text-white rounded-md hover:bg-[#0489b1] transition-all duration-300"
              onClick={sendUserInput}
            >
              Generate
            </button>
          </section>

          {/* AI Response Section */}
          <section className="w-1/2 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">AI Response</h2>
            <div className="w-full h-64 p-4 border border-[#00b4d8] bg-[#16213e] text-white rounded-md">
              {aiResponse || "The AI response will be displayed here."}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Copywriter;
