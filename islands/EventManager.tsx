import { FreshContext, RouteContext } from "$fresh/server.ts";
import { signal, Signal} from "@preact/signals";
import { ButtonCreate } from "../components/ButtonCreate.tsx";
import { Button } from "../components/Button.tsx";
import Counter from "./Counter.tsx";

interface LifeEvent {
  symbol: string;
  name: string;
  price: string;
}

interface EventManagerProps {
  kv: Deno.Kv;
  events: Signal<LifeEvent[]>;
}

export type { LifeEvent };

const eventData: LifeEvent[] = [
  { symbol: "永", name: "永豐NASDAQ", price: "$45" },
  { symbol: "富", name: "富邦台灣", price: "$140" },
  // { symbol: "永", name: "永豐台灣", price: "$564" },
  // { symbol: "富", name: "富邦", price: "$29" },
  // { symbol: "永", name: "永豐台灣", price: "$278" },
  // { symbol: "永", name: "永豐台灣", price: "$589" },
  // { symbol: "永", name: "永豐NASDAQ", price: "$65" },
  // { symbol: "元", name: "元大台灣", price: "$503" },
  // { symbol: "國", name: "國泰台灣5G", price: "$190" },
  // { symbol: "永", name: "永豐台灣", price: "$140" },
  // { symbol: "中", name: "中信", price: "$249" },
  // { symbol: "國", name: "國泰台灣高股息低波動ETF投資信託基金", price: "$140" },
  // { symbol: "永", name: "永豐NASDAQ", price: "$65" },
  // { symbol: "富", name: "富邦台灣", price: "$140" },
  // { symbol: "國", name: "NVIDIA", price: "$149" },
  // { symbol: "永", name: "永豐台灣", price: "$1,564" },
  // { symbol: "永", name: "永豐台灣", price: "$207" },
  // { symbol: "富", name: "富邦台灣核心", price: "$280" },
  // { symbol: "P", name: "PChome 24h購物", price: "$3,950" },
  // { symbol: "永", name: "永豐台灣", price: "$173" },
  // { symbol: "永", name: "永豐台灣", price: "$168" },
  // { symbol: "永", name: "永豐台灣", price: "$90" },
  // { symbol: "國", name: "國泰台灣高股息低波動ETF", price: "$65" },
  // { symbol: "永", name: "永豐NASDAQ", price: "$0" },
  // { symbol: "富", name: "富邦台灣核心半導體科技基金", price: "$754" },
  // { symbol: "永", name: "永豐台灣", price: "$279" },
  // { symbol: "國", name: "NVIDIA", price: "$149" },
  // { symbol: "永", name: "永豐台灣", price: "$768" },
  // { symbol: "中", name: "中國電信股份有限公司H股證券投資信託基金", price: "$205" },
  // { symbol: "富", name: "富邦台灣", price: "$140" },
  // { symbol: "永", name: "永豐台灣", price: "$420" },
  // { symbol: "富", name: "富邦", price: "$65" },
  // { symbol: "永", name: "永豐台灣", price: "$458" },
  // { symbol: "永", name: "永豐台灣", price: "$742" },
  // { symbol: "永", name: "永豐台灣", price: "$450" },
  // { symbol: "永", name: "永豐台灣", price: "$461" },
  // { symbol: "永", name: "永豐台灣", price: "$2,014" },
  // { symbol: "富", name: "富邦台灣", price: "$140" },
  // { symbol: "國", name: "NVIDIA", price: "$149" },
  // { symbol: "永", name: "永豐台灣", price: "$26" },
  // { symbol: "永", name: "永豐台灣", price: "$299" },
  // { symbol: "永", name: "永豐台灣", price: "$912" },
  // { symbol: "永", name: "永豐台灣", price: "$472" },
  // { symbol: "永", name: "永豐台灣", price: "$62" },
  // { symbol: "中", name: "中華電信股份有限公司H股證券投資信託基金", price: "$902" },
  // { symbol: "永", name: "永豐台灣", price: "$660" },
  // { symbol: "富", name: "富邦台灣", price: "$209" }
];

export default function EventManager({ kv, events }: EventManagerProps) {
  async function onCreate() {
    alert("Create new event");
    for (const event of eventData) {
      const key = ["events", event.symbol, event.name]
      await kv.set(key, event)
    }
    events.value = [
      { symbol: "元", name: "元大台灣", price: "$503" },
      { symbol: "國", name: "國泰台灣5G", price: "$190" },
    ];
    for await (const event of kv.list({ prefix: ["events"] })) {
      events.value.push(event.value as LifeEvent);
    }
  }

  return (
    <div>
      {/* Event List */}
      <div className="flex-1 overflow-y-auto pb-20">
        {events.value.map((event, index) => (
          <div key={index} className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-medium">{event.symbol}</span>
              </div>
              <div>
                <div className="text-gray-900 text-sm font-medium">{event.name}</div>
                <div className="text-gray-500 text-xs">股票代號</div>
              </div>
            </div>
            {/* <div className="text-gray-900 text-sm font-medium">{event.price}</div> */}
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col gap-3">
        <ButtonCreate onClick={onCreate} />
      </div>
    </div>
  );
}
