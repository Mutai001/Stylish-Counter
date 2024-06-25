import { useRef } from "react";

export const UseRef = () => {
    const count = useRef(0);
    const increment = () => count.current++;
    const decrement = () => count.current--;
    return { count, increment, decrement };
}