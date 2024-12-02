import { BaseNode } from '@/utils/interfaces/ReactFlow'
import { createContext, useContext, useState } from 'react'

interface DraggingNodeContextProps {
  draggingNodeInfo: BaseNode | null
  setDraggingNodeInfo: (info: BaseNode | null) => void
}

const DraggingNodeContext = createContext<DraggingNodeContextProps | undefined>(
  undefined,
)

export const DraggingNodeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [draggingNodeInfo, setDraggingNodeInfo] =
    useState<BaseNode | null>(null)

  return (
    <DraggingNodeContext.Provider
      value={{ draggingNodeInfo, setDraggingNodeInfo }}
    >
      {children}
    </DraggingNodeContext.Provider>
  )
}

export const useDraggingNodeContext = () => {
  const context = useContext(DraggingNodeContext)
  if (!context) {
    throw new Error(
      'useDraggingNodeContext must be used within a DraggingNodeProvider',
    )
  }
  return context
}
