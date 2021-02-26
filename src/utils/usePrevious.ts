/**
 * Previous state custom hook
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T {
  const ref: React.MutableRefObject<T> = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default usePrevious;
