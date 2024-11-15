'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const Account = ({ defaultTab = 0, firstTab, secondTab }) => {
  const [currentTab, setCurrentTab] = useState(defaultTab)

  return (
    <div className="flex w-full max-w-[430px] flex-col gap-2">
      <Switch currentTab={currentTab} setTab={setCurrentTab} />
      <div className="overflow-hidden rounded-xl border p-2 shadow-sm bg-black border-neutral-900">
        {currentTab === 0 && firstTab}
        {currentTab === 1 && secondTab}
      </div>
    </div>
  )
}

const Switch = ({ setTab, currentTab }) => (
  <div
    className={`relative flex w-full items-center rounded-lg py-1 bg-neutral-800 text-white font-second`}>
    <motion.div
      transition={{ type: 'keyframes', duration: 0.15, ease: 'easeInOut' }}
      animate={currentTab === 0 ? { x: 4 } : { x: '98%' }}
      initial={currentTab === 0 ? { x: 4 } : { x: '98%' }}
      className={`absolute h-5/6 w-1/2 rounded-md shadow-sm bg-neutral-950`}
    />
    <button
      onClick={() => setTab(0)}
      className="z-10 h-9 w-full rounded-md text-center"
    >
      Sign in
    </button>
    <button
      onClick={() => setTab(1)}
      className="z-10 h-9 w-full rounded-md text-center"
    >
      Sign up
    </button>
  </div>
)
