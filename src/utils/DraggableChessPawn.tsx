import { useEffect, useRef, useState } from 'react';

type viewport = {
      x: number; // percentage of parent width
      y: number; // percentage of parent height
};

type DraggableChessPawnProps = {
      pawn: string;
      size: string; // e.g. "16" -> h-16
      position: viewport; // {x: 50, y: 50} means center (50%, 50%)
      mirror?: boolean;
};

const DraggableChessPawn = ({ pawn, size, position, mirror }: DraggableChessPawnProps) => {
      const block = useRef<HTMLDivElement>(null);
      const lastX = useRef(0);
      const lastY = useRef(0);
      const dragX = useRef(position.x);
      const dragY = useRef(position.y);
      const [isDragging, setIsDragging] = useState(false);
      const frameID = useRef(0);

      useEffect(() => {
            document.body.classList.add('overflow-hidden');

            if (block.current) {
                  block.current.style.left = `${position.x}%`;
                  block.current.style.top = `${position.y}%`;
            }
      }, [position]);

      useEffect(() => {
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                  document.removeEventListener('mouseup', handleMouseUp);
                  document.removeEventListener('mousemove', handleMouseMove);
            };
      }, [isDragging]);

      const handleMouseDown = (e: MouseEvent | any) => {
            lastX.current = e.clientX;
            lastY.current = e.clientY;
            setIsDragging(true);
      };

      const handleMouseUp = () => {
            setIsDragging(false);
      };

      const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !block.current || !block.current.parentElement) return;

            const parent = block.current.parentElement;
            const parentWidth = parent.clientWidth;
            const parentHeight = parent.clientHeight;

            const deltaX = e.clientX - lastX.current;
            const deltaY = e.clientY - lastY.current;

            lastX.current = e.clientX;
            lastY.current = e.clientY;

            // convert delta to %
            dragX.current += (deltaX / parentWidth) * 100;
            dragY.current += (deltaY / parentHeight) * 100;

            cancelAnimationFrame(frameID.current);
            frameID.current = requestAnimationFrame(() => {
                  block.current!.style.left = `${dragX.current}%`;
                  block.current!.style.top = `${dragY.current}%`;
            });
      };

      return (
            <div
                  ref={block}
                  className={`invisible absolute z-100 h-${size} w-${size} select-none 2xl:visible`}
                  style={{
                        transform: 'translate(-50%, -50%)',
                  }}
                  unselectable={'on'}
            >
                  <img alt='flying-pawn' src={`/assets/flyingpawns/${pawn}.svg`} className={`${mirror ? 'rotate-y-180' : ''} h-full w-full`} unselectable={'on'} draggable={'false'} />
                  <div className={'pawn absolute inset-0 h-full cursor-pointer'} onMouseDown={handleMouseDown} />
            </div>
      );
};

export default DraggableChessPawn;
