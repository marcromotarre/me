export const math_operation = "`${Math.sin(left * 0.05) * 100 + 100}px`";

export const useMemoExample = `
import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div
        style={{ left: ${math_operation} }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
`;

export const expensiveMathOperationUsingMemo = `const value = useMemo(() => expensiveMathOperation(count), [count]);`;

export const expensiveMathOperationWithoutUsingMemo = `const value = expensiveMathOperation(count);`;

export const expensiveMathOperationCode = `
const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};
export default fibonacci;
`;
