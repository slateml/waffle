"use client"

import { useStore } from './useStore.js';

import { FileExplorer } from "./components/FileExplorer.jsx"
import { ChatWindow } from "./components/ChatWindow.jsx"
import Playground from "./components/Playground.jsx"
import Header from "./components/Header.jsx"

export default function Home() {
  const {
    isFileExplorerVisible,
    isChatWindowVisible,
  } = useStore((state) => ({
    isFileExplorerVisible: state.isFileExplorerVisible,
    isChatWindowVisible: state.isChatWindowVisible,
  }));

  return (
    <main className="flex h-screen">
      {isFileExplorerVisible && <FileExplorer className='file-explorer' />}

      <div className={`dashboard 
        ${!isFileExplorerVisible ? 'ml-6' : 'ml-[250px]'} ${!isChatWindowVisible ? 'mr-6' : 'mr-[510px]'}
      `}>
        <Header />
        <Playground />
      </div>

      {isChatWindowVisible && <ChatWindow className='chat-window' />}
    </main>
  )
}