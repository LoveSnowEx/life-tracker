import { useSignal } from "@preact/signals";
import IconPlus from 'https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/plus.tsx';
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  const title = "Life Tracker - 記錄生活中的大小事";

  const stockData = [
    { symbol: "永", name: "永豐NASDAQ", price: "$45" },
    { symbol: "富", name: "富邦台灣", price: "$140" },
    { symbol: "永", name: "永豐台灣", price: "$564" },
    { symbol: "富", name: "富邦", price: "$29" },
    { symbol: "永", name: "永豐台灣", price: "$278" },
    { symbol: "永", name: "永豐台灣", price: "$589" },
    { symbol: "永", name: "永豐NASDAQ", price: "$65" },
    { symbol: "元", name: "元大台灣", price: "$503" },
    { symbol: "國", name: "國泰台灣5G", price: "$190" },
    { symbol: "永", name: "永豐台灣", price: "$140" },
    { symbol: "中", name: "中信", price: "$249" },
    { symbol: "國", name: "國泰台灣高股息低波動ETF投資信託基金", price: "$140" },
    { symbol: "永", name: "永豐NASDAQ", price: "$65" },
    { symbol: "富", name: "富邦台灣", price: "$140" },
    { symbol: "國", name: "NVIDIA", price: "$149" },
    { symbol: "永", name: "永豐台灣", price: "$1,564" },
    { symbol: "永", name: "永豐台灣", price: "$207" },
    { symbol: "富", name: "富邦台灣核心", price: "$280" },
    { symbol: "P", name: "PChome 24h購物", price: "$3,950" },
    { symbol: "永", name: "永豐台灣", price: "$173" },
    { symbol: "永", name: "永豐台灣", price: "$168" },
    { symbol: "永", name: "永豐台灣", price: "$90" },
    { symbol: "國", name: "國泰台灣高股息低波動ETF", price: "$65" },
    { symbol: "永", name: "永豐NASDAQ", price: "$0" },
    { symbol: "富", name: "富邦台灣核心半導體科技基金", price: "$754" },
    { symbol: "永", name: "永豐台灣", price: "$279" },
    { symbol: "國", name: "NVIDIA", price: "$149" },
    { symbol: "永", name: "永豐台灣", price: "$768" },
    { symbol: "中", name: "中國電信股份有限公司H股證券投資信託基金", price: "$205" },
    { symbol: "富", name: "富邦台灣", price: "$140" },
    { symbol: "永", name: "永豐台灣", price: "$420" },
    { symbol: "富", name: "富邦", price: "$65" },
    { symbol: "永", name: "永豐台灣", price: "$458" },
    { symbol: "永", name: "永豐台灣", price: "$742" },
    { symbol: "永", name: "永豐台灣", price: "$450" },
    { symbol: "永", name: "永豐台灣", price: "$461" },
    { symbol: "永", name: "永豐台灣", price: "$2,014" },
    { symbol: "富", name: "富邦台灣", price: "$140" },
    { symbol: "國", name: "NVIDIA", price: "$149" },
    { symbol: "永", name: "永豐台灣", price: "$26" },
    { symbol: "永", name: "永豐台灣", price: "$299" },
    { symbol: "永", name: "永豐台灣", price: "$912" },
    { symbol: "永", name: "永豐台灣", price: "$472" },
    { symbol: "永", name: "永豐台灣", price: "$62" },
    { symbol: "中", name: "中華電信股份有限公司H股證券投資信託基金", price: "$902" },
    { symbol: "永", name: "永豐台灣", price: "$660" },
    { symbol: "富", name: "富邦台灣", price: "$209" }
  ]
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

      {/* Event List */}
      <div className="flex-1 overflow-y-auto pb-20">
        {stockData.map((stock, index) => (
          <div key={index} className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-medium">{stock.symbol}</span>
              </div>
              <div>
                <div className="text-gray-900 text-sm font-medium">{stock.name}</div>
                <div className="text-gray-500 text-xs">股票代號</div>
              </div>
            </div>
            <div className="text-gray-900 text-sm font-medium">{stock.price}</div>
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-3">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
          立即下單
        </button> */}
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <IconPlus color="white" size={32} />
          {/* <Plus className="w-6 h-6 text-white" /> */}
        </button>
      </div>

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
