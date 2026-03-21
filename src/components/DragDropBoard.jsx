import { useState, memo } from 'react';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import Tile from './Tile';

const DroppableSlot = ({ id, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`relative w-full h-full rounded-xl transition-all ${
        isOver ? 'ring-[3px] ring-white scale-105 z-10 opacity-90 brightness-110' : ''
      }`}
    >
      {children}
    </div>
  );
};

const DraggablePiece = ({ id, value, gridSize, imageSrc, isDraggingSelf }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });
  
  const opacity = isDraggingSelf || isDragging ? 0.2 : 1;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      style={{ opacity }}
    >
      
      <Tile
        value={value}
        index={id}
        gridSize={gridSize}
        imageSrc={imageSrc}
        isEmpty={false}
        showNumber={false}
        onClick={() => {}}
      />
    </div>
  );
};

const DragDropBoard = ({ tiles, gridSize, imageSrc, onSwap }) => {
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50,
        tolerance: 5,
      },
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      onSwap(active.id, over.id);
    }
    setActiveId(null);
  };
  
  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activeValue = activeId !== null ? tiles[activeId] : null;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="w-full p-1" style={{ aspectRatio: '1 / 1' }}>
        <div
          className="w-full h-full"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            gap: '3px',
          }}
        >
          {tiles.map((value, index) => (
            <DroppableSlot key={`slot-${index}`} id={index}>
              <DraggablePiece
                id={index}
                value={value}
                gridSize={gridSize}
                imageSrc={imageSrc}
                isDraggingSelf={activeId === index}
              />
            </DroppableSlot>
          ))}
        </div>
      </div>

      <DragOverlay dropAnimation={{ duration: 200, easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)' }}>
        {activeId !== null && (
          <div className="w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-[1.1] rounded-xl overflow-hidden pointer-events-none opacity-95">
            <Tile
              value={activeValue}
              index={activeId}
              gridSize={gridSize}
              imageSrc={imageSrc}
              isEmpty={false}
              showNumber={false}
              onClick={() => {}}
            />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default memo(DragDropBoard);
