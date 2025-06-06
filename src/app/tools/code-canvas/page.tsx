'use client'

import { useEffect, useRef, useState } from 'react'

const defaultCode = `function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Hello Code Canvas!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}
`

export default function CodeCanvasPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [code, setCode] = useState(defaultCode)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
${code}
    const rootElement = document.getElementById('root');
    ReactDOM.createRoot(rootElement).render(<App />);
  </script>
</body>
</html>`
    iframe.srcdoc = html
  }, [code])

  return (
    <main className="prose w-full max-w-3xl my-8 space-y-4 px-8 sm:px-8 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold font-heading tracking-tight">Code Canvas</h1>
        <p className="text-muted-foreground">Execute códigos React em tempo real</p>
      </div>
      <textarea
        className="font-mono border rounded p-2 w-full h-48"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <iframe
        ref={iframeRef}
        className="w-full h-96 border rounded bg-white"
        sandbox="allow-scripts"
        title="code-canvas"
      />
    </main>
  )
}
