/// <reference lib="deno.unstable" />
import { signal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import EventManager from "../islands/EventManager.tsx";
import type { LifeEvent } from "../islands/EventManager.tsx";
import { ulid } from "@std/ulid"

export default async function Home() {
  const kv = await Deno.openKv(":memory:");
  const count = signal(0);
  const events = signal<LifeEvent[]>([]);
  const title = "Life Tracker - 記錄生活中的大小事";

  return (
    <div className="bg-gray-50 max-w-screen-sm mx-auto min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        {/* <Search className="w-5 h-5 text-gray-600" /> */}
        <h1 className="text-lg font-medium text-gray-900">{title}</h1>
        {/* <Menu className="w-5 h-5 text-gray-600" /> */}
      </div>

      {/* Date Selector */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-600 mr-2">114年 09月 01日</span>
          {/* <ChevronDown className="w-4 h-4 text-gray-600" /> */}
        </div>
      </div>

      {/* <Counter count={count} />
      <EventManager kv={kv} events={events} /> */}

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center py-2">
            <Home className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">首頁</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">行情</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Wallet className="w-5 h-5 text-green-500" />
            <span className="text-xs text-green-500 mt-1">投資</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">帳戶</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">更多</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
