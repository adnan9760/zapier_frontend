"use client";

import { IconPlayerPlay, IconClock, IconRotateClockwise } from "@tabler/icons-react";
import axios from "axios";
import { param } from "motion/react-client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
interface TopbarProps {
  selectedTrigger?: {
    id: string;
    name: string;
  };
  selectedAction: {
    index: number;
    availableActionId: string;
    availableActionName: string;
    metadata: any;
  }[];
}

 


const Topbar: React.FC<TopbarProps> = ({ selectedTrigger, selectedAction }) => {
    const [decoded, setDecoded] = useState<any>(null);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const decode: any = jwtDecode(token)
        console.log("Decoded:", decode)
        setDecoded(decode)
      }
    }, []);
  async function handlepublish(){
 try {
    const response = await axios.post("http://localhost:3002/api/v1/zap/createzap",{
        "AvailableTrigger":selectedTrigger?.id,
    "metadata":{},
    "actions":selectedAction.map(a=>({
      "AvailableAction":a.availableActionId,
      "metadata":a.metadata
    }))
    },
    {
      params:{id:decoded.id}
    }
  )

    console.log("responce",response.data);

    if(response.data.success){
      
    }
 } catch (error) {
  console.log("something went worng")
 }
}
  return (
    <header className="h-12 bg-[#3b2f2f] flex justify-between items-center px-4 text-neutral-100">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold flex items-center gap-1">
          ⚡ Zaps
        </h1>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <button className="flex items-center gap-1 hover:bg-[#4a3b3b] px-3 py-1 rounded-md">
          <IconRotateClockwise size={16} /> Undo
        </button>
        <button className="flex items-center gap-1 hover:bg-[#4a3b3b] px-3 py-1 rounded-md">
          <IconClock size={16} /> Test run
        </button>
        <button onClick={handlepublish} className="bg-[#f6c344] text-black font-semibold px-3 py-1 rounded-md hover:bg-[#e5b939]">
          Publish
        </button>
        <div className="bg-[#5b4646] px-3 py-1 rounded-md">A</div>
      </div>
    </header>
  );
}

export default Topbar;