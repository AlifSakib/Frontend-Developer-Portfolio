import React, { useState, useRef } from "react";
import {
  FileText,
  Highlighter,
  PenTool,
  Square,
  Type,
  CheckSquare,
  FileSignature,
  Download,
  Trash2,
  Undo,
  RotateCcw,
  Sparkles,
  Layers,
  ZoomIn,
  ZoomOut,
  MousePointer,
} from "lucide-react";

interface MockAnnotation {
  id: string;
  type: "highlight" | "draw" | "rect" | "text" | "stamp";
  x: number;
  y: number;
  width?: number;
  height?: number;
  points?: { x: number; y: number }[];
  color: string;
  text?: string;
}

export const DocuCanvasDemo: React.FC = () => {
  const [activeTool, setActiveTool] = useState<
    "select" | "highlight" | "pen" | "rect" | "text" | "stamp"
  >("select");
  const [activeColor, setActiveColor] = useState<string>("#4f46e5");
  const [zoom, setZoom] = useState<number>(100);
  const [mode, setMode] = useState<"edit" | "fill">("edit");
  const [formData, setFormData] = useState({
    clientName: "Acme Global Inc.",
    date: "2026-08-16",
    agreed: true,
  });
  const [annotations, setAnnotations] = useState<MockAnnotation[]>([
    {
      id: "1",
      type: "highlight",
      x: 28,
      y: 55,
      width: 220,
      height: 18,
      color: "#fef08a",
    },
    {
      id: "2",
      type: "rect",
      x: 28,
      y: 155,
      width: 340,
      height: 48,
      color: "#4f46e5",
    },
    {
      id: "3",
      type: "stamp",
      x: 240,
      y: 225,
      width: 120,
      height: 36,
      color: "#059669",
      text: "APPROVED",
    },
  ]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<{ x: number; y: number }[]>(
    [],
  );
  const canvasRef = useRef<HTMLDivElement>(null);

  const colors = [
    "#4f46e5",
    "#ef4444",
    "#10b981",
    "#f59e0b",
    "#ec4899",
    "#fef08a",
  ];

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTool === "select" || isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    if (activeTool === "text") {
      setAnnotations((prev) => [
        ...prev,
        {
          id: `ann-${Date.now()}`,
          type: "text",
          x,
          y,
          width: 140,
          height: 28,
          color: activeColor,
          text: "Custom Note",
        },
      ]);
    } else if (activeTool === "rect") {
      setAnnotations((prev) => [
        ...prev,
        {
          id: `ann-${Date.now()}`,
          type: "rect",
          x: x - 40,
          y: y - 20,
          width: 90,
          height: 45,
          color: activeColor,
        },
      ]);
    } else if (activeTool === "stamp") {
      setAnnotations((prev) => [
        ...prev,
        {
          id: `ann-${Date.now()}`,
          type: "stamp",
          x: x - 50,
          y: y - 15,
          width: 110,
          height: 32,
          color: "#059669",
          text: "VERIFIED",
        },
      ]);
    }
  };

  const startFreehand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTool !== "pen" && activeTool !== "highlight") return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setIsDrawing(true);
    setCurrentPath([{ x: e.clientX - rect.left, y: e.clientY - rect.top }]);
  };

  const drawFreehand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCurrentPath((prev) => [
      ...prev,
      { x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
  };

  const endFreehand = () => {
    if (!isDrawing || currentPath.length < 2) {
      setIsDrawing(false);
      setCurrentPath([]);
      return;
    }
    setAnnotations((prev) => [
      ...prev,
      {
        id: `ann-${Date.now()}`,
        type: activeTool === "highlight" ? "highlight" : "draw",
        x: currentPath[0].x,
        y: currentPath[0].y,
        points: currentPath,
        color: activeTool === "highlight" ? "#fef08a" : activeColor,
      },
    ]);
    setIsDrawing(false);
    setCurrentPath([]);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 md:p-6 border border-slate-800 shadow-2xl overflow-hidden font-sans">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-600 rounded-lg text-white shadow-xs">
              <FileText className="w-4 h-4" />
            </span>
            <h4 className="font-bold text-base md:text-lg text-white tracking-tight">
              DocuCanvas Interactive Studio
            </h4>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
              v2.4
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Multi-page vector markup, interactive form fields & live inspection
          </p>
        </div>

        {/* Mode switcher & Zoom */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-800 p-0.5 rounded-lg flex items-center text-xs">
            <button
              onClick={() => setMode("edit")}
              className={`px-3 py-1 font-semibold rounded-md transition ${mode === "edit" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Markup Mode
            </button>
            <button
              onClick={() => setMode("fill")}
              className={`px-3 py-1 font-semibold rounded-md transition ${mode === "fill" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              Fill & Sign
            </button>
          </div>

          <div className="flex items-center bg-slate-800 rounded-lg px-2 py-1 gap-1 text-xs text-slate-300">
            <button
              onClick={() => setZoom((z) => Math.max(75, z - 15))}
              className="hover:text-white p-0.5"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-mono">{zoom}%</span>
            <button
              onClick={() => setZoom((z) => Math.min(130, z + 15))}
              className="hover:text-white p-0.5"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        {/* Left Toolbar */}
        <div className="bg-slate-800/60 border border-slate-800 rounded-xl p-3 flex flex-col justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Annotation Tools
            </span>
            <div className="grid grid-cols-3 gap-1.5 mt-2">
              {[
                { id: "select", label: "Select", icon: MousePointer },
                { id: "pen", label: "Draw", icon: PenTool },
                { id: "highlight", label: "Highlight", icon: Highlighter },
                { id: "rect", label: "Box", icon: Square },
                { id: "text", label: "Text", icon: Type },
                { id: "stamp", label: "Stamp", icon: Sparkles },
              ].map((tool) => {
                const Icon = tool.icon;
                const isActive = activeTool === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id as any)}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg text-[10px] font-medium transition ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    {tool.label}
                  </button>
                );
              })}
            </div>

            {/* Color Palette */}
            <div className="mt-4">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Palette
              </span>
              <div className="flex items-center gap-1.5 mt-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveColor(c)}
                    className={`w-5 h-5 rounded-full transition-transform ${activeColor === c ? "scale-125 ring-2 ring-white" : "hover:scale-110"}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-1.5 pt-3 border-t border-slate-700/60">
            <button
              onClick={() => setAnnotations((prev) => prev.slice(0, -1))}
              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-300"
            >
              <Undo className="w-3.5 h-3.5" /> Undo Last
            </button>
            <button
              onClick={() => setAnnotations([])}
              className="w-full py-1.5 bg-slate-800 hover:bg-rose-950/40 text-rose-300 hover:text-rose-200 border border-slate-700/60 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Canvas
            </button>
          </div>
        </div>

        {/* Center Stage & Mock Document */}
        <div className="lg:col-span-3 bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-center items-center overflow-auto min-h-[360px]">
          <div
            ref={canvasRef}
            onClick={handleCanvasClick}
            onMouseDown={startFreehand}
            onMouseMove={drawFreehand}
            onMouseUp={endFreehand}
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "center center",
            }}
            className="relative w-[380px] h-[340px] bg-white text-slate-900 rounded-lg shadow-xl p-5 select-none transition-transform duration-150 cursor-crosshair overflow-hidden"
          >
            {/* Mock Document Header */}
            <div className="border-b border-slate-200 pb-2 mb-3">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>DOC-CONTRACT-2026</span>
                <span className="text-emerald-700 font-bold">PAGE 1 OF 1</span>
              </div>
              <h5 className="font-bold text-sm text-slate-900 mt-0.5">
                Enterprise Service Level Agreement
              </h5>
            </div>

            {/* Mock Document Body Text */}
            <div className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
              <p>
                This Enterprise Service Agreement is executed by and between{" "}
                <strong>Vendor Systems LLC</strong> and the specified client
                entity.
              </p>
              <p>
                Section 4.1: The uptime guarantee is maintained at{" "}
                <strong>99.95%</strong> across all active cloud clusters with
                instant automated failover.
              </p>
            </div>

            {/* Interactive Form Fields Area */}
            <div className="mt-4 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">
                  Client Authorized Name:
                </span>
                {mode === "fill" ? (
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    className="h-5 px-1 text-xs border border-indigo-400 bg-white rounded text-slate-900 w-32 focus:outline-hidden"
                  />
                ) : (
                  <span className="text-slate-900 font-medium">
                    {formData.clientName}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-[10px] font-bold text-slate-700">
                  Terms Accepted:
                </span>
                <label className="flex items-center gap-1 text-[10px] cursor-pointer text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    disabled={mode !== "fill"}
                  />
                  <span>I agree</span>
                </label>
              </div>
            </div>

            {/* SVG Vectors & Annotations Overlay Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Existing annotations */}
              {annotations.map((ann) => {
                if (
                  ann.type === "highlight" &&
                  ann.points &&
                  ann.points.length > 1
                ) {
                  return (
                    <path
                      key={ann.id}
                      d={`M ${ann.points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
                      stroke={ann.color}
                      strokeWidth={14}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.5}
                      fill="none"
                    />
                  );
                }
                if (
                  ann.type === "draw" &&
                  ann.points &&
                  ann.points.length > 1
                ) {
                  return (
                    <path
                      key={ann.id}
                      d={`M ${ann.points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
                      stroke={ann.color}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  );
                }
                if (ann.type === "highlight") {
                  return (
                    <rect
                      key={ann.id}
                      x={ann.x}
                      y={ann.y}
                      width={ann.width}
                      height={ann.height}
                      fill={ann.color}
                      opacity={0.6}
                      rx={2}
                    />
                  );
                }
                if (ann.type === "rect") {
                  return (
                    <rect
                      key={ann.id}
                      x={ann.x}
                      y={ann.y}
                      width={ann.width}
                      height={ann.height}
                      fill="transparent"
                      stroke={ann.color}
                      strokeWidth={2}
                      strokeDasharray="4 2"
                      rx={4}
                    />
                  );
                }
                return null;
              })}

              {/* Active drawing stroke */}
              {isDrawing && currentPath.length > 1 && (
                <path
                  d={`M ${currentPath.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
                  stroke={activeTool === "highlight" ? "#fef08a" : activeColor}
                  strokeWidth={activeTool === "highlight" ? 14 : 3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={activeTool === "highlight" ? 0.5 : 1}
                  fill="none"
                />
              )}
            </svg>

            {/* DOM Overlay for Text & Stamps */}
            {annotations.map((ann) => {
              if (ann.type === "text") {
                return (
                  <div
                    key={ann.id}
                    className="absolute px-1 py-0.5 rounded font-bold text-xs pointer-events-none bg-indigo-50/90 border border-indigo-300 text-indigo-900 shadow-xs"
                    style={{ left: `${ann.x}px`, top: `${ann.y}px` }}
                  >
                    {ann.text}
                  </div>
                );
              }
              if (ann.type === "stamp") {
                return (
                  <div
                    key={ann.id}
                    className="absolute px-2 py-0.5 rounded font-mono font-black text-xs pointer-events-none uppercase border-2 tracking-widest -rotate-6 shadow-xs"
                    style={{
                      left: `${ann.x}px`,
                      top: `${ann.y}px`,
                      color: ann.color,
                      borderColor: ann.color,
                      backgroundColor: `${ann.color}15`,
                    }}
                  >
                    {ann.text}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* Footer Export & Stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span>
            Active Layers:{" "}
            <strong className="text-white">{annotations.length}</strong>
          </span>
          <span>
            Target Page:{" "}
            <strong className="text-white">US Letter (8.5 × 11 in)</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              alert(
                "DocuCanvas: High-resolution Vector PDF export generated successfully!",
              )
            }
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold flex items-center gap-1.5 transition active:scale-95 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};
