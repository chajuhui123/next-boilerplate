import { useEffect, useRef } from "react";

type TCallback = (
  ref: React.RefObject<HTMLDivElement>,
  deltaY: number, // 음수: 위 방향, 양수: 아래 방향
  scrollTop: number // section top 높이 값
) => void;

/** 마우스 휠을 감지하여 콜백 함수를 처리하는 ref 객체 반환 커스텀 훅 useWheel */
export const useWheel = (
  callback: TCallback
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseWheel = (event: WheelEvent) => {
    event.preventDefault();
    callback(ref, event.deltaY, ref.current?.scrollTop); // 입력받은 콜백함수
  };

  useEffect(() => {
    const currentRef = ref.current;
    currentRef.addEventListener("wheel", handleMouseWheel);

    return () => {
      currentRef.removeEventListener("wheel", handleMouseWheel); // for 메모리 누수 방지
    };
  }, [ref, callback]);

  return ref;
};
