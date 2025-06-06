import React, { useState } from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import {
  Eye,
  Code as CodeIcon,
  RefreshCw,
  Copy as CopyIcon,
} from "lucide-react";

/**
 * CodeCanvas
 *
 * Props:
 *  - initialCode (string): code that will be rendered & edited by the user
 *
 * This component replicates the behaviour of ChatGPT / Claude code canvases.
 * It gives the user a live‑editable code editor with a Preview tab.
 * External dependencies are resolved by Sandpack (esbuild‑powered bundler in an iframe),
 * which means you can import any package available on npm (e.g. 'recharts') without CORS or ESM issues.
 */
export default function CodeCanvas({ initialCode }: { initialCode: string }) {
  const [activeTab, setActiveTab] = useState("code"); // "code" | "preview"
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey((k) => k + 1);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(initialCode);
    } catch (_) {
      /* clipboard API might be unavailable */
    }
  };

  return (
    <div className="rounded border shadow bg-white flex flex-col h-full w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-2 py-1 border-b bg-gray-50 text-gray-700 text-sm select-none">
        <div className="flex gap-1">
          <button
            className={`p-1 rounded hover:bg-gray-200 ${
              activeTab === "preview" ? "text-blue-600" : ""
            }`}
            onClick={() => setActiveTab("preview")}
            title="Preview"
          >
            <Eye size={16} />
          </button>
          <button
            className={`p-1 rounded hover:bg-gray-200 ${
              activeTab === "code" ? "text-blue-600" : ""
            }`}
            onClick={() => setActiveTab("code")}
            title="Code"
          >
            <CodeIcon size={16} />
          </button>
        </div>
        <div className="flex gap-1">
          <button
            className="p-1 rounded hover:bg-gray-200"
            onClick={handleRefresh}
            title="Refresh sandbox"
          >
            <RefreshCw size={16} />
          </button>
          <button
            className="p-1 rounded hover:bg-gray-200"
            onClick={handleCopy}
            title="Copy code to clipboard"
          >
            <CopyIcon size={16} />
          </button>
        </div>
      </div>

      {/* Sandpack environment */}
      <SandpackProvider
        key={refreshKey}
        template="react"
        options={{
          externalResources: [
            // Tailwind CDN styling for preview iframe (optional)
            "https://cdn.jsdelivr.net/npm/tailwindcss@^2/dist/tailwind.min.css",
          ],
        }}
        customSetup={{
          entry: "/App.js",
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "recharts": "latest",
          },
        }}
        files={{
          "/App.js": initialCode,
        }}
      >
        {activeTab === "code" ? (
          <SandpackCodeEditor
            className="h-full flex-1"
            showTabs={false}
            showLineNumbers={true}
            wrapContent={true}
          />
        ) : (
          <SandpackPreview className="h-full flex-1 bg-white" />
        )}
      </SandpackProvider>
    </div>
  );
}
