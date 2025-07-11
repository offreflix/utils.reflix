'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  ChevronRight,
  X,
  Minus,
  Square,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Script from 'next/script'
import type { CliViewProps } from './cli.types'
import { Skeleton } from '@/components/ui/skeleton'
import { jsonLd } from './cli.metadata'

export function CliView({
  history,
  currentCommand,
  isProcessing,
  terminalTheme,
  operatingSystem,
  onCommandSubmit,
  onCommandChange,
}: CliViewProps) {
  const { theme: appTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const [localOS, setLocalOS] = useState(operatingSystem)

  useEffect(() => {
    setLocalOS(operatingSystem)
  }, [operatingSystem])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus()
    }
  }, [isProcessing])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onCommandSubmit(currentCommand)
    }
  }

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getTerminalTheme = () => {
    if (!mounted) return 'dark'
    if (terminalTheme === 'system') {
      return appTheme === 'dark' ? 'dark' : 'light'
    }
    return terminalTheme
  }

  const isDarkTerminal = getTerminalTheme() === 'dark'

  const renderControlButtons = () => {
    if (!mounted) {
      return (
        <div className="flex space-x-1">
          <div className="w-4 h-4 rounded-full transition-colors text-neutral-100">
            <Minus className="w-3 h-3" />
          </div>
          <div className="w-4 h-4 rounded-full transition-colors text-neutral-100">
            <Square className="w-3 h-3" />
          </div>
          <div className="w-4 h-4 rounded-full transition-colors text-neutral-100">
            <X className="w-3 h-3" />
          </div>
        </div>
      )
    }

    switch (localOS) {
      case 'mac':
        return (
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors">
              <X className="w-2 h-2 text-red-600" />
            </div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition-colors">
              <Minus className="w-2 h-2 text-yellow-600" />
            </div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
          </div>
        )
      case 'linux':
        return (
          <div className="flex space-x-1">
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <ChevronUp className="w-3 h-3" />
            </div>
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <ChevronDown className="w-3 h-3" />
            </div>
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <X className="w-3 h-3" />
            </div>
          </div>
        )
      default:
        return (
          <div className="flex space-x-1">
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <Minus className="w-3 h-3" />
            </div>
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <Square className="w-3 h-3" />
            </div>
            <div
              className={`w-4 h-4 rounded-full transition-colors ${
                isDarkTerminal ? 'text-neutral-100' : 'text-neutral-900'
              }`}
            >
              <X className="w-3 h-3" />
            </div>
          </div>
        )
    }
  }

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-green-600 dark:text-green-400 rounded-lg border overflow-hidden">
          <div className="bg-neutral-100 dark:bg-neutral-900 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-medium">CLI Simulator</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-4 h-4 rounded-full transition-colors text-neutral-900 dark:text-neutral-100">
                <Skeleton className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100" />
              </div>
              <div className="w-4 h-4 rounded-full transition-colors text-neutral-900 dark:text-neutral-100">
                <Skeleton className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100" />
              </div>
              <div className="w-4 h-4 rounded-full transition-colors text-neutral-900 dark:text-neutral-100">
                <Skeleton className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100" />
              </div>
            </div>
          </div>
          <div className="h-96 overflow-y-auto p-4 font-mono text-sm">
            <div className="text-green-400 dark:text-green-600 mb-2">
              Carregando...
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script
        id="cli-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-4xl mx-auto">
        <div
          className={`${
            isDarkTerminal
              ? 'bg-neutral-900 text-green-400 border-neutral-700'
              : 'bg-white text-green-600 border-neutral-300'
          } rounded-lg border overflow-hidden`}
        >
          {/* Header */}
          <div
            className={`${
              isDarkTerminal ? 'bg-neutral-800' : 'bg-neutral-100'
            } px-4 py-2 flex items-center justify-between`}
          >
            {localOS === 'mac' ? (
              <>
                {renderControlButtons()}
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm font-medium">CLI Simulator</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4" />
                  <span className="text-sm font-medium">CLI Simulator</span>
                </div>
                {renderControlButtons()}
              </>
            )}
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="h-96 overflow-y-auto p-4 font-mono text-sm"
          >
            {/* Welcome Message */}
            {history.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <div
                  className={`${
                    isDarkTerminal ? 'text-green-400' : 'text-green-600'
                  } mb-2`}
                >
                  Bem-vindo ao CLI Simulator!
                </div>
                <div
                  className={`${
                    isDarkTerminal ? 'text-neutral-400' : 'text-neutral-600'
                  } text-xs mb-4`}
                >
                  Digite &quot;help&quot; para ver os comandos disponíveis.
                </div>
              </motion.div>
            )}

            {/* Command History */}
            {history.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                {/* Command Input */}
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`${
                      isDarkTerminal ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    visitante@cli-simulator
                  </span>
                  <span
                    className={`${
                      isDarkTerminal ? 'text-neutral-500' : 'text-neutral-600'
                    }`}
                  >
                    :
                  </span>
                  <span
                    className={`${
                      isDarkTerminal ? 'text-green-400' : 'text-green-600'
                    }`}
                  >
                    ~
                  </span>
                  <span
                    className={`${
                      isDarkTerminal ? 'text-neutral-500' : 'text-neutral-600'
                    }`}
                  >
                    $
                  </span>
                  <span
                    className={`${
                      isDarkTerminal ? 'text-white' : 'text-black'
                    } ml-2`}
                  >
                    {entry.command}
                  </span>
                </div>

                {/* Command Output */}
                {entry.output && (
                  <div className="ml-4 mb-2">
                    <pre
                      className={`whitespace-pre-wrap ${
                        isDarkTerminal ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      {entry.output}
                    </pre>
                  </div>
                )}

                {/* Timestamp */}
                <div
                  className={`text-xs ${
                    isDarkTerminal ? 'text-neutral-600' : 'text-neutral-500'
                  } ml-4`}
                >
                  [{formatTimestamp(entry.timestamp)}]
                </div>
              </motion.div>
            ))}

            {/* Current Command Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <span
                className={`${
                  isDarkTerminal ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                visitante@cli-simulator
              </span>
              <span
                className={`${
                  isDarkTerminal ? 'text-neutral-500' : 'text-neutral-600'
                }`}
              >
                :
              </span>
              <span
                className={`${
                  isDarkTerminal ? 'text-green-400' : 'text-green-600'
                }`}
              >
                ~
              </span>
              <span
                className={`${
                  isDarkTerminal ? 'text-neutral-500' : 'text-neutral-600'
                }`}
              >
                $
              </span>
              <div className="flex items-center ml-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => onCommandChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isProcessing}
                  className={`bg-transparent outline-none flex-1 min-w-0 ${
                    isDarkTerminal ? 'text-white' : 'text-black'
                  }`}
                  placeholder={
                    isProcessing ? 'Processando...' : 'Digite um comando...'
                  }
                />
                {isProcessing && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <ChevronRight
                      className={`h-4 w-4 ${
                        isDarkTerminal ? 'text-green-400' : 'text-green-600'
                      }`}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Comandos rápidos:
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'help',
              'date',
              'whoami',
              'joke',
              'quote',
              'weather',
              'theme light',
              'theme dark',
              'terminal light',
              'terminal dark',
              'os windows',
              'os mac',
              'os linux',
              'reset',
            ].map((cmd) => (
              <button
                key={cmd}
                onClick={() => onCommandSubmit(cmd)}
                disabled={isProcessing}
                className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors disabled:opacity-50"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
