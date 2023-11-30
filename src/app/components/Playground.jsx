"use client"

import { Button } from './ui/button'
import { useStore } from '../useStore.js';
import CodeBlock from './CodeBlock.jsx';
import { Pyodide } from "../../lib/pyodide";


import { JetBrains_Mono } from 'next/font/google';
import { Play, Plus, Minus } from 'lucide-react';

import Convert from 'ansi-to-html'

const convert = new Convert()

const jbmono = JetBrains_Mono({ subsets: ['latin'] })

const Playground = () => {
    const { cells, addCell, removeCell, updateCellText, updateCellOutput, selectCell, setActiveCell,
        activeContainer, clearCellOutput
    } = useStore((state) => ({
        cells: state.cells,
        addCell: state.addCell,
        removeCell: state.removeCell,
        updateCellText: state.updateCellText,
        updateCellOutput: state.updateCellOutput,
        selectCell: state.selectCell,
        setActiveCell: state.setActiveCell,
        activeContainer: state.activeContainer,
        clearCellOutput: state.clearCellOutput
    }));

    const pyodide = Pyodide.getInstance();

    const handleCode = (index, newVal) => {
        updateCellText(index, newVal);
    };

    const handleSelectCell = (index) => {
        selectCell(index);
        setActiveCell(index); setActiveCell
    };

    const handleRunCode = async (index, code) => {
        clearCellOutput(index)

        pyodide.setOutput((text) => {
            updateCellOutput(index, text);
        });
        pyodide.run(code);
    }

    return (
        <div className='cells space-y-2 '>
            {cells.map((cell, index) => (
                <div key={cell.id} className='code-block w-fit relative'>
                    <div className={`cell ${jbmono.className}`}>
                        <div
                            className={`cell-marker ${cell.isSelected ? "bg-bigblue" : "bg-biggrey"}`}>
                        </div>
                        <div className='cell-input'
                            onClick={(e) => handleSelectCell(index)}
                        >
                            <CodeBlock
                                index={index}
                                value={cell.text}
                                onChange={(newVal) => handleCode(index, newVal)}
                            />
                        </div>
                        <pre>
                            <div className={`cell-output ${jbmono.className}`}
                                dangerouslySetInnerHTML={{ __html: cell.output }}
                            >
                            </div>
                        </pre>
                        <div className="time-taken text-gray-200"></div>
                        <div className="run-btn">
                            <Button
                                onClick={() => { handleRunCode(index, cell.text) }}
                                className="rounded-full px-3 py-1 absolute -right-12 top-3">
                                <Play size={16} />
                            </Button>
                        </div>
                    </div>
                    <div className='cell-tools'>
                        <button className='cell-tool' onClick={(e) => addCell(index)}>
                            <Plus size={14} />&ensp;Code
                        </button>
                        <button className='cell-tool' onClick={(e) => removeCell(index)}>
                            <Minus size={14} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Playground;