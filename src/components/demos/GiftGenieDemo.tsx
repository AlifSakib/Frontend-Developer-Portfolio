import React, { useState } from "react";
import {
  Gift,
  Sparkles,
  Heart,
  ExternalLink,
  ShoppingBag,
  Check,
  RefreshCw,
  SlidersHorizontal,
  DollarSign,
} from "lucide-react";

interface MockGift {
  id: string;
  title: string;
  category: string;
  priceBDT: number;
  priceUSD: number;
  badge: string;
  matchScore: number;
  whyItsPerfect: string;
  stores: { name: string; icon: string; url: string }[];
}

export const GiftGenieDemo: React.FC = () => {
  const [occasion, setOccasion] = useState<
    "birthday" | "wedding" | "eid" | "anniversary"
  >("wedding");
  const [currency, setCurrency] = useState<"BDT" | "USD">("BDT");
  const [budgetLimit, setBudgetLimit] = useState<number>(3500);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "tech",
    "art",
  ]);
  const [savedIds, setSavedIds] = useState<string[]>(["g1"]);
  const [isSimulatingAi, setIsSimulatingAi] = useState(false);

  const mockCatalog: Record<string, MockGift[]> = {
    wedding: [
      {
        id: "g1",
        title: "Artisanal Ceramic Dinner Set & Reed Diffuser",
        category: "Home & Living",
        priceBDT: 3200,
        priceUSD: 28,
        badge: "Luxury Wedding",
        matchScore: 98,
        whyItsPerfect:
          "Elegant aesthetic upgrade for the newly married couple’s home.",
        stores: [
          { name: "Aarong Living", icon: "🪡", url: "https://aarong.com" },
          { name: "Daraz Mall", icon: "🟠", url: "https://daraz.com.bd" },
        ],
      },
      {
        id: "g2",
        title: "Xiaomi Smart Air Fryer 3.5L",
        category: "Kitchenware",
        priceBDT: 6500,
        priceUSD: 56,
        badge: "Best Value",
        matchScore: 94,
        whyItsPerfect:
          "High-utility kitchen essential for effortless healthy cooking.",
        stores: [
          { name: "Star Tech", icon: "⚡", url: "https://startech.com.bd" },
          { name: "Pickaboo", icon: "🛍️", url: "https://pickaboo.com" },
        ],
      },
    ],
    birthday: [
      {
        id: "g3",
        title: "Anker Soundcore Wireless TWS Earbuds",
        category: "Gadgets",
        priceBDT: 2450,
        priceUSD: 22,
        badge: "Popular",
        matchScore: 99,
        whyItsPerfect:
          "Universally loved with 32h playtime and water resistance.",
        stores: [
          { name: "Pickaboo BD", icon: "⚡", url: "https://pickaboo.com" },
          { name: "Daraz", icon: "🟠", url: "https://daraz.com.bd" },
        ],
      },
      {
        id: "g4",
        title: "Rokomari Hardcover Best-Seller Trio + Custom Bookmark",
        category: "Books & Literature",
        priceBDT: 1250,
        priceUSD: 11,
        badge: "Budget Pick",
        matchScore: 92,
        whyItsPerfect:
          "Thoughtful intellectual keepsake with personalized inscription.",
        stores: [
          { name: "Rokomari.com", icon: "📚", url: "https://rokomari.com" },
        ],
      },
    ],
    eid: [
      {
        id: "g5",
        title: "Noor-e-Eid Velvet Attar & Ajwa Dates Hamper",
        category: "Traditional & Heritage",
        priceBDT: 2850,
        priceUSD: 25,
        badge: "Festive Pick",
        matchScore: 97,
        whyItsPerfect:
          "Non-alcoholic French & Arabian oils with premium Madinah dates.",
        stores: [
          { name: "GiftGenie Box", icon: "🎁", url: "#" },
          { name: "Daraz BD", icon: "🟠", url: "https://daraz.com.bd" },
        ],
      },
    ],
    anniversary: [
      {
        id: "g6",
        title: "Customized Engraved Minimalist Leather Wallet",
        category: "Fashion & Keepsakes",
        priceBDT: 1650,
        priceUSD: 15,
        badge: "Personalized",
        matchScore: 96,
        whyItsPerfect:
          "Full-grain cowhide leather personalized with custom initials.",
        stores: [
          { name: "Leatherina BD", icon: "💼", url: "#" },
          { name: "Daraz", icon: "🟠", url: "https://daraz.com.bd" },
        ],
      },
    ],
  };

  const handleTriggerAiSearch = () => {
    setIsSimulatingAi(true);
    setTimeout(() => {
      setIsSimulatingAi(false);
    }, 600);
  };

  const toggleInterest = (tag: string) => {
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const currentGifts = mockCatalog[occasion] || [];
  const symbol = currency === "BDT" ? "৳" : "$";

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-md">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white flex items-center gap-2">
              GiftGenie AI Engine Sandbox
              <span className="text-[10px] bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 font-bold px-2 py-0.5 rounded-full">
                Interactive
              </span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Personalized occasion matching, localized pricing & direct store
              routing
            </p>
          </div>
        </div>

        {/* Currency Switcher & AI Run Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <button
              onClick={() => setCurrency("BDT")}
              className={`px-2.5 py-1 rounded-md transition ${
                currency === "BDT"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              ৳ BDT
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2.5 py-1 rounded-md transition ${
                currency === "USD"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              $ USD
            </button>
          </div>

          <button
            onClick={handleTriggerAiSearch}
            disabled={isSimulatingAi}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white text-xs font-bold rounded-lg transition"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${isSimulatingAi ? "animate-spin" : ""}`}
            />
            <span>{isSimulatingAi ? "Matching..." : "Re-Run AI"}</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/70 dark:border-slate-800">
        {/* Occasion Selection */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
            1. Occasion
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: "wedding", label: "💍 Wedding" },
              { id: "birthday", label: "🎂 Birthday" },
              { id: "eid", label: "🌙 Eid" },
              { id: "anniversary", label: "🥂 Anniversary" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setOccasion(item.id as any)}
                className={`px-2 py-1.5 text-xs font-semibold rounded-lg border text-left transition ${
                  occasion === item.id
                    ? "bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-700 dark:text-rose-300 font-bold"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Limit Slider */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            <span>2. Max Budget Limit</span>
            <span className="text-rose-600 dark:text-rose-400 font-bold">
              {symbol}
              {currency === "BDT"
                ? budgetLimit.toLocaleString()
                : Math.round(budgetLimit / 115)}
            </span>
          </div>
          <input
            type="range"
            min={currency === "BDT" ? 1000 : 10}
            max={currency === "BDT" ? 10000 : 100}
            step={currency === "BDT" ? 250 : 5}
            value={
              currency === "BDT" ? budgetLimit : Math.round(budgetLimit / 115)
            }
            onChange={(e) =>
              setBudgetLimit(
                currency === "BDT"
                  ? Number(e.target.value)
                  : Number(e.target.value) * 115,
              )
            }
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>
              {symbol}
              {currency === "BDT" ? "1,000" : "10"}
            </span>
            <span>
              {symbol}
              {currency === "BDT" ? "5,000" : "50"}
            </span>
            <span>
              {symbol}
              {currency === "BDT" ? "10,000+" : "100+"}
            </span>
          </div>
        </div>

        {/* Interest Tags */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
            3. Recipient Interests
          </label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "tech", label: "⚡ Gadgets" },
              { id: "art", label: "🎨 Decor" },
              { id: "coffee", label: "☕ Gourmet" },
              { id: "fashion", label: "✨ Style" },
            ].map((tag) => {
              const active = selectedInterests.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => toggleInterest(tag.id)}
                  className={`px-2 py-1 text-xs rounded-md border transition ${
                    active
                      ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 text-indigo-700 dark:text-indigo-300 font-semibold"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Simulated Live Results Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span className="font-semibold">
            {currentGifts.length} AI Matching Results
          </span>
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Affiliate Ready
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentGifts.map((gift) => {
            const isSaved = savedIds.includes(gift.id);
            const price =
              currency === "BDT"
                ? `৳${gift.priceBDT.toLocaleString()}`
                : `$${gift.priceUSD}`;

            return (
              <div
                key={gift.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-rose-300 dark:hover:border-rose-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                        {gift.category}
                      </span>
                      <span className="text-[10px] font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded">
                        {gift.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleSave(gift.id)}
                      className={`p-1.5 rounded-full transition ${
                        isSaved
                          ? "text-rose-600 bg-rose-50 dark:bg-rose-950/50"
                          : "text-slate-400 hover:text-rose-600"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isSaved ? "fill-rose-600" : ""}`}
                      />
                    </button>
                  </div>

                  <h5 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {gift.title}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {gift.whyItsPerfect}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      Estimated Price
                    </span>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      {price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {gift.stores.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 bg-slate-50 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-slate-700 rounded-md text-[11px] font-medium text-slate-700 dark:text-slate-200 transition"
                      >
                        <span>{s.icon}</span>
                        <span>{s.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
