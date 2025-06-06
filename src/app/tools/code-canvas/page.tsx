'use client';

import React, { useState, useEffect, useRef } from 'react';

const initialChartCode = `import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const data = [
  { jogo: "GTA V", vendas: 215 },
  { jogo: "GTA: San Andreas", vendas: 27.5 },
  { jogo: "GTA IV", vendas: 25 },
  { jogo: "GTA: Vice City", vendas: 17.5 },
  { jogo: "GTA III", vendas: 14.5 },
];

export default function App() {
  return (
    <div style={{ width: "100%", height: "400px", background: "#fff", padding: "16px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Vendas dos Jogos Mais Vendidos da Franquia GTA
      </h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="jogo" angle={-30} textAnchor="end" height={60} />
          <YAxis label={{ value: "Vendas (milhões)", angle: -90, position: "insideLeft", dy: 60 }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="vendas" name="Vendas (mi)" fill="#8884d8" barSize={40} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
`;

function processCodeForIframe(rawCode: string): { processedCode: string; componentNameForDebug: string } {
  let componentName = 'App'; // Default component name
  let code = rawCode;

  // Remove React import as it's global via CDN
  code = code.replace(/^import React[^;]*;\s*$/gm, '');
  // Remove Recharts import as its components will be made global via CDN + script
  code = code.replace(/^import \{[^}]*\}\s+from\s+['"]recharts['"];\s*$/gm, '');
  // Remove any other general top-level imports as they won't be resolved by this simple setup
  code = code.replace(/^import .*from\s+['"].*['"];\s*$/gm, '');

  // Try to find the component name from 'export default function ComponentName' or 'export default ComponentName'
  const exportDefaultFnMatch = code.match(/export\s+default\s+function\s+(\w+)/);
  if (exportDefaultFnMatch) {
    componentName = exportDefaultFnMatch[1];
    code = code.replace(exportDefaultFnMatch[0], `function ${componentName}`);
  } else {
    const exportDefaultIdentifierMatch = code.match(/export\s+default\s+(\w+);?/);
    if (exportDefaultIdentifierMatch) {
      componentName = exportDefaultIdentifierMatch[1];
      code = code.replace(exportDefaultIdentifierMatch[0], ''); // Remove the export default line
    }
  }
  // If no export default is found, it assumes a component named 'App' or the last function/class.
  // This part might need more robust logic for complex cases but works for typical examples.

  // Append the line to assign the identified component to a global variable for rendering
  code += `\n\nwindow.__USER_COMPONENT_TO_RENDER__ = typeof ${componentName} !== 'undefined' ? ${componentName} : undefined;`;

  return { processedCode: code, componentNameForDebug: componentName };
}

export default function CodeCanvasPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentCode, setCurrentCode] = useState(initialChartCode);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const { processedCode, componentNameForDebug } = processCodeForIframe(currentCode);

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Code Preview</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js" onload="console.log('IFRAME SCRIPT: React loaded successfully.')" onerror="console.error('IFRAME SCRIPT: ERROR loading React.')"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" onload="console.log('IFRAME SCRIPT: ReactDOM loaded successfully.')" onerror="console.error('IFRAME SCRIPT: ERROR loading ReactDOM.')"></script>
  <script src="https://unpkg.com/prop-types@15.8.1/prop-types.min.js" onload="console.log('IFRAME SCRIPT: prop-types loaded successfully.')" onerror="console.error('IFRAME SCRIPT: ERROR loading prop-types.')"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/recharts/2.12.0/Recharts.min.js" onload="console.log('IFRAME SCRIPT: Recharts loaded successfully. window.Recharts should now be available.'); window.dispatchEvent(new Event('rechartsloaded'));" onerror="console.error('IFRAME SCRIPT: ERROR loading Recharts.')"></script>
  <script>
    // Ensure Recharts and its components are globally available
    // This script runs after Recharts.min.js is loaded
    (function() {
      console.log('SCRIPT: Setting up Recharts globals. Current window.Recharts:', window.Recharts);
      if (window.Recharts) {
        const Recharts = window.Recharts;
        console.log('SCRIPT: window.Recharts found. Properties (sample):', Object.keys(Recharts).slice(0, 10));

        // Explicitly assign all known components
        const componentsToExpose = [
          'ResponsiveContainer', 'BarChart', 'Bar', 'XAxis', 'YAxis',
          'CartesianGrid', 'Tooltip', 'Legend', 'LineChart', 'Line',
          'AreaChart', 'Area', 'PieChart', 'Pie', 'Cell', 'Label',
          'LabelList', 'ReferenceLine', 'ReferenceDot', 'ReferenceArea',
          // Add any other specific components you expect to use
        ];

        componentsToExpose.forEach(compName => {
          if (Recharts[compName]) {
            window[compName] = Recharts[compName];
            // console.log('SCRIPT: Globalized a Recharts component');
          } else {
            // console.warn('SCRIPT: A Recharts component was not found on Recharts object.');
          }
        });
        console.log('SCRIPT: Finished setting Recharts globals. Check window.ResponsiveContainer:', window.ResponsiveContainer);
      } else {
        console.error('SCRIPT: Recharts library (window.Recharts) not found when trying to set up globals.');
      }
    })();
  </script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" data-presets="react">
(function() {
  const POLLING_INTERVAL = 100; // ms
  const MAX_ATTEMPTS = 50; // Total wait time = POLLING_INTERVAL * MAX_ATTEMPTS (e.g., 100ms * 50 = 5 seconds)
  let attempts = 0;

  console.log('BABEL SCRIPT: Initiating dependency check...');

  function dependenciesReady() {
    const ready = window.React && 
                  window.ReactDOM && 
                  window.Recharts && 
                  window.Recharts.ResponsiveContainer; // Check for a key Recharts component
    if (ready) {
        console.log('BABEL SCRIPT: All dependencies (React, ReactDOM, Recharts with ResponsiveContainer) are ready.');
    } else {
        if (!window.React) console.log('BABEL SCRIPT: Waiting for React...');
        if (!window.ReactDOM) console.log('BABEL SCRIPT: Waiting for ReactDOM...');
        if (!window.Recharts) console.log('BABEL SCRIPT: Waiting for Recharts...');
        else if (!window.Recharts.ResponsiveContainer) console.log('BABEL SCRIPT: Waiting for Recharts.ResponsiveContainer...');
    }
    return ready;
  }

  function initializeAndRender() {
    console.log('BABEL SCRIPT: Initializing and rendering user code.');
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    const RechartsGlobal = window.Recharts;

    const ResponsiveContainer = RechartsGlobal.ResponsiveContainer;
    const BarChart = RechartsGlobal.BarChart;
    const Bar = RechartsGlobal.Bar;
    const XAxis = RechartsGlobal.XAxis;
    const YAxis = RechartsGlobal.YAxis;
    const CartesianGrid = RechartsGlobal.CartesianGrid;
    const Tooltip = RechartsGlobal.Tooltip;
    const Legend = RechartsGlobal.Legend;

    console.log('BABEL SCRIPT: Local Recharts components defined. ResponsiveContainer available:', !!ResponsiveContainer);
    if (!ResponsiveContainer) {
        console.error('BABEL SCRIPT: CRITICAL - ResponsiveContainer is still undefined even after RechartsGlobal.ResponsiveContainer was supposedly ready.');
        document.getElementById('root').innerHTML = '<p style="color:red;">Fatal Error: Recharts components (e.g., ResponsiveContainer) failed to load correctly.</p>';
        return;
    }

    try {
      console.log('BABEL SCRIPT: Evaluating processed user code...');
      ${processedCode}
      console.log('BABEL SCRIPT: User code evaluation complete.');

      const rootElement = document.getElementById('root');
      const UserComponent = window.__USER_COMPONENT_TO_RENDER__;
      console.log('BABEL SCRIPT: UserComponent from window.__USER_COMPONENT_TO_RENDER__ is:', UserComponent);

      if (UserComponent) {
        console.log('BABEL SCRIPT: Rendering UserComponent.');
        ReactDOM.createRoot(rootElement).render(React.createElement(UserComponent));
        console.log('BABEL SCRIPT: UserComponent rendering initiated.');
      } else {
        // IMPORTANT: ${componentNameForDebug} is injected by the outer template literal in page.tsx
        let errorMsg = 'Error: Main application component (window.__USER_COMPONENT_TO_RENDER__) was not defined after evaluating the code. ';
        errorMsg += 'This means the component (expected: ' + '${componentNameForDebug}' + ') was not correctly assigned to window.__USER_COMPONENT_TO_RENDER__. ';
        rootElement.innerHTML = '<p style="color:red;">' + errorMsg + '</p>';
        console.error('BABEL SCRIPT: Render Error - UserComponent not found.', errorMsg);
      }
    } catch (e) {
      const rootElement = document.getElementById('root');
      rootElement.innerHTML = '<p style="color:red;">Runtime Error in user code: ' + e.message + '<br><pre>' + e.stack + '</pre></p>';
      console.error('BABEL SCRIPT: Runtime Error during user code execution or rendering:', e);
    }
  }

  function checkAndRun() {
    if (dependenciesReady()) {
      initializeAndRender();
    } else {
      attempts++;
      if (attempts < MAX_ATTEMPTS) {
        // Use string concatenation for these logs to avoid issues with backticks
        console.log('BABEL SCRIPT: Dependencies not ready, attempt ' + attempts + '/' + MAX_ATTEMPTS + '. Retrying in ' + POLLING_INTERVAL + 'ms...');
        setTimeout(checkAndRun, POLLING_INTERVAL);
      } else {
        console.error('BABEL SCRIPT: Failed to load dependencies after ' + MAX_ATTEMPTS + ' attempts.');
        document.getElementById('root').innerHTML = 
          '<p style="color:red;">Error: Timed out waiting for essential libraries (React, ReactDOM, Recharts) to load. Please check CDN links and network connection.</p>';
      }
    }
  }

  // Listen for Recharts successful load before starting the checkAndRun polling
    // This provides an event-driven way to start, falling back to polling if the event doesn't fire.
    let rechartsLoadTimeout = setTimeout(() => {
      console.log('BABEL SCRIPT: Timeout waiting for rechartsloaded event, starting polling anyway.');
      checkAndRun();
    }, 2000); // Wait 2 seconds for the event

    window.addEventListener('rechartsloaded', () => {
      console.log('BABEL SCRIPT: rechartsloaded event received.');
      clearTimeout(rechartsLoadTimeout);
      checkAndRun();
    }, { once: true });

    // Initial short delay for other scripts, then rely on event or polling timeout
    // setTimeout(checkAndRun, 50); // Original line, replaced by event listener + timeout 
})();
  </script>
</body>
</html>`;
    iframe.srcdoc = html;
  }, [currentCode]);

  return (
    <main className="w-full max-w-4xl mx-auto my-8 space-y-6 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Direct Iframe Code Runner
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Edit React code (with Recharts) and see it run directly in an iframe using Babel Standalone.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <label htmlFor="code-editor-textarea" className="block text-sm font-medium text-gray-700 mb-1">
          Editable Code (React with Recharts Example):
        </label>
        <textarea
          id="code-editor-textarea"
          className="font-mono border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md p-3 h-64 shadow-sm"
          value={currentCode}
          onChange={(e) => setCurrentCode(e.target.value)}
          spellCheck="false"
          aria-label="Code Editor Textarea"
        />
      </div>

      <div 
        className="w-full h-[700px] border border-gray-300 rounded-lg shadow-xl overflow-hidden bg-white"
        aria-label="Live Code Preview Pane"
      >
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          sandbox="allow-scripts"
          title="Code Preview Iframe"
        />
      </div>
    </main>
  );
}
