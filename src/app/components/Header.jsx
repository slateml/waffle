"use client"

import { useStore } from '../useStore.js';
import { Menu, Bot, Play, Plus } from 'lucide-react';

const Header = () => {

    const {
        cells,
        addCell,
        toggleFileExplorer,
        toggleChatWindow,
    } = useStore((state) => ({
        cells: state.cells,
        addCell: state.addCell,
        toggleFileExplorer: state.toggleFileExplorer,
        toggleChatWindow: state.toggleChatWindow,
    }));

    return (
        <div className="header">
            <button className='toggle-btn left-6' onClick={toggleFileExplorer}>
                <Menu />
            </button>
            <button className='toggle-btn right-6' onClick={toggleChatWindow}>
                <Bot />
            </button>

            <div className='toolbar flex'>
                <button className='toolbar-btn flex items-center space-x-2'>
                    <div>Run all</div><Play size={16} />
                </button>
                <button className='toolbar-btn flex items-center'>
                    <div></div><Plus size={16} onClick={() => addCell(cells.length) } />
                </button>
            </div>
        </div>
    )
}

export default Header;