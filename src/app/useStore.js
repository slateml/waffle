import { create } from 'zustand'

export const useStore = create((set) => ({
  activeContainer: null,
  activeSession: null,
  updateContainer: (containerId) => set(() => ({ activeContainer: containerId })),
  updateSession: (sessionId) => set(() => ({ activeSession: sessionId })),
  cells: [],
  addCell: (index) => set((state) => {
    const newCells = [...state.cells];
    newCells.splice(index + 1, 0, { text: '', isSelected: false, id: Date.now(), output: "" });
    return { cells: newCells };
  }),
  selectCell: (index) => set((state) => {
    let newCells = [...state.cells];
    newCells[index].isSelected = !newCells[index].isSelected;
    return { cells: newCells };
  }),
  deselectAll: () => set((state) => {
    state.cells.forEach(cell => cell.isSelected = false);
  }),
  removeCell: (index) => set((state) => ({
    cells: state.cells.filter((_, i) => i !== index)
  })),
  updateCellText: (index, newText) => set((state) => {
    let newCells = [...state.cells];
    newCells[index].text = newText;
    return { cells: newCells };
  }),
  updateCellOutput: (index, newOutput) => set((state) => {
    let newCells = [...state.cells];
    newCells[index].output += newOutput + '\n';
    return { cells: newCells }
  }),
  clearCellOutput: (index) => set((state) => {
    let newCells = [...state.cells];
    newCells[index].output = '';
    return { cells: newCells }
  }),
  activeCellIndex: null,
  setActiveCell: (index) => set(() => ({ activeCellIndex: index })),
  selectedCellIndex: null,
  setSelectedCell: (index) => set(() => ({ selectedCellIndex: index })),
  clearSelectedCell: () => set(() => ({ selectedCellIndex: null })),
  isFileExplorerVisible: false,
  isChatWindowVisible: false,
  toggleFileExplorer: () => set((state) => ({ isFileExplorerVisible: !state.isFileExplorerVisible })),
  toggleChatWindow: () => set((state) => ({ isChatWindowVisible: !state.isChatWindowVisible })),
}))