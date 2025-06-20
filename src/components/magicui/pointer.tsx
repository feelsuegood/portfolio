"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type PointerProps = Omit<HTMLMotionProps<"div">, "ref">;

/**
 * A custom pointer component that displays an animated cursor.
 * Add this as a child to any component to enable a custom pointer when hovering.
 * You can pass custom children to render as the pointer.
 *
 * @component
 * @param {PointerProps} props - The component props
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: PointerProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [hasTouchCapability, setHasTouchCapability] = useState<boolean>(false);
  const [hasMouseMoved, setHasMouseMoved] = useState<boolean>(false);

  // Detect touch devices and add global event listeners
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if device has touch capability
      const checkTouchCapability = () => {
        return (
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-expect-error - msMaxTouchPoints is not a standard property
          navigator.msMaxTouchPoints > 0
        );
      };

      setHasTouchCapability(checkTouchCapability());

      // Global touch event listener to detect touch usage
      const handleTouchStart = () => {
        setIsActive(false);
        setHasMouseMoved(false);
      };

      // Global mouse move listener to detect actual mouse movement
      const handleGlobalMouseMove = (e: MouseEvent) => {
        // Only consider it a real mouse move if the movement is significant
        // This helps filter out synthetic mouse events from touch
        if (e.movementX !== 0 || e.movementY !== 0) {
          setHasMouseMoved(true);
        }
      };

      document.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      document.addEventListener("mousemove", handleGlobalMouseMove, {
        passive: true,
      });

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("mousemove", handleGlobalMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    // if (typeof window !== "undefined" && containerRef.current) {
    //   // Get the parent element directly from the ref
    //   const parentElement = containerRef.current.parentElement;

    //   if (parentElement) {
    //     // Add cursor-none to parent
    //     parentElement.style.cursor = "none";

    //     // Add event listeners to parent
    //     const handleMouseMove = (e: MouseEvent) => {
    //       x.set(e.clientX);
    //       y.set(e.clientY);
    //     };

    //     const handleMouseEnter = () => {
    //       setIsActive(true);
    //     };

    //     const handleMouseLeave = () => {
    //       setIsActive(false);
    //     };

    //     parentElement.addEventListener("mousemove", handleMouseMove);
    //     parentElement.addEventListener("mouseenter", handleMouseEnter);
    //     parentElement.addEventListener("mouseleave", handleMouseLeave);

    //     return () => {
    //       parentElement.style.cursor = "";
    //       parentElement.removeEventListener("mousemove", handleMouseMove);
    //       parentElement.removeEventListener("mouseenter", handleMouseEnter);
    //       parentElement.removeEventListener("mouseleave", handleMouseLeave);
    //     };
    //   }
    // }
    if (typeof window !== "undefined" && containerRef.current) {
      // Get the parent element directly from the ref
      const parentElement = containerRef.current.parentElement;

      if (parentElement) {
        // Only hide cursor if we're confident this is a mouse-capable device
        if (!hasTouchCapability || hasMouseMoved) {
          parentElement.style.cursor = "none";
        }

        // Add event listeners to parent
        const handleMouseMove = (e: MouseEvent) => {
          // Only update position if we've detected actual mouse movement
          if (!hasTouchCapability || hasMouseMoved) {
            x.set(e.clientX);
            y.set(e.clientY);
          }
        };

        const handleMouseEnter = () => {
          // Only activate if this is not a touch device or we've detected mouse movement
          if (!hasTouchCapability || hasMouseMoved) {
            setIsActive(true);
          }
        };

        const handleMouseLeave = () => {
          setIsActive(false);
        };

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.style.cursor = "";
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
    // }, [x, y]);
  }, [x, y, hasTouchCapability, hasMouseMoved]);

  // Don't render pointer on touch devices unless mouse movement is detected
  const shouldShowPointer = !hasTouchCapability || hasMouseMoved;

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && shouldShowPointer && (
          <motion.div
            className="transform-[translate(-50%,-50%)] pointer-events-none fixed z-50"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "rotate-[-70deg] stroke-white text-black",
                  className,
                )}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
