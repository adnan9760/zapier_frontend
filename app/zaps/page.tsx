"use client";
import Navbar from "@/component/Navbar";
import { LinkButton } from "@/component/Button/LinkButtom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const HOOKS_URL = "http://localhost:3002";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
      image: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
      image: string;
    };
  };
}

function useZaps(userId?: number) {
  const [loading, setLoading] = useState(true);
  const [zaps, setZaps] = useState<Zap[]>([]);

  useEffect(() => {
    if (!userId) return;
    axios
      .get("http://localhost:3002/api/v1/zap/getzaps", {
        params: { userId },
      })
      .then((res) => {
        setZaps(res.data.zaps);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  return { loading, zaps };
}

export default function MyZapsPage() {
  const [decoded, setDecoded] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwtDecode(token);
      console.log("Decoded:", decode);
      setDecoded(decode);
    }
  }, []);

  const { loading, zaps } = useZaps(decoded?.id);

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <div className="flex justify-center pt-12">
        <div className="max-w-screen-lg w-full px-6">
          <div className="flex justify-between items-center pb-6 border-b border-orange-200">
            <h1 className="text-3xl font-bold text-orange-600">My Zaps</h1>
            <LinkButton
              onClick={() => router.push("/CreateZap")}
              className="bg-orange-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-all"
            >
              + Create
            </LinkButton>
          </div>

          {loading ? (
            <div className="flex justify-center items-center mt-10 text-orange-600 font-semibold">
              Loading Zaps...
            </div>
          ) : (
            <div className="mt-8 bg-white shadow-lg rounded-xl overflow-hidden border border-orange-100">
              <ZapTable zaps={zaps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ZapTable({ zaps }: { zaps: Zap[] }) {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex bg-orange-100 text-orange-700 font-semibold py-3 px-4 border-b border-orange-200">
        <div className="flex-1 text-center">Apps</div>
        <div className="flex-1 text-center">Zap ID</div>
        <div className="flex-1 text-center">Created At</div>
        <div className="flex-1 text-center">Webhook URL</div>
        <div className="flex-1 text-center">Action</div>
      </div>

      {/* Rows */}
      {zaps.length === 0 ? (
        <div className="text-center text-gray-500 py-6">No Zaps Found 😢</div>
      ) : (
        zaps.map((z, i) => (
          <div
            key={z.id}
            className={`flex items-center py-4 px-4 border-b border-orange-100 transition-all duration-300 ${
              i % 2 === 0 ? "bg-white" : "bg-orange-50"
            } hover:bg-orange-100`}
          >
            <div className="flex-1 flex gap-3 justify-center items-center">
              <img
                src={z.trigger.type.image}
                alt="trigger"
                className="w-8 h-8 rounded-md border border-orange-300"
              />
              {z.actions.map((x) => (
                <img
                  key={x.id}
                  src={x.type.image}
                  alt="action"
                  className="w-8 h-8 rounded-md border border-orange-300"
                />
              ))}
            </div>

            <div className="flex-1 text-center text-gray-700 font-medium">
              {z.id}
            </div>

            <div className="flex-1 text-center text-gray-500">
              Nov 13, 2023
            </div>

            <div className="flex-1 text-center text-sm text-orange-700 truncate max-w-[200px] mx-auto">
              <a
                href={`${HOOKS_URL}/hooks/catch/2/${z.id}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {`${HOOKS_URL}/hooks/catch/2/${z.id}`}
              </a>
            </div>

            <div className="flex-1 text-center">
              <button
                onClick={() => router.push("/zap/" + z.id)}
                className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-sm"
              >
                Go →
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
