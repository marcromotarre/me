import { useEffect, useMemo, useState } from "react";
import Modal from "../common/modal/Modal";

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const UsingMemoExample = ({ count }: { count: number }) => {
  const [left, setLeft] = useState(0);

  const value = useMemo(() => fibonacci(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);
  return (
    <div className="grid grid-cols-1 gap-y-3">
      <div></div>
      <div
        style={{
          position: "relative",
          height: "50px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            borderRadius: "30px",
            left: `${Math.sin(left * 0.05) * 100 + 100}px`,
          }}
          className="ball"
        ></div>
      </div>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
};

const WithoutUsingMemoExample = ({ count }: { count: number }) => {
  const [left, setLeft] = useState(0);

  const value = fibonacci(count);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);
  return (
    <div className="grid grid-cols-1 gap-y-3">
      <div></div>
      <div
        style={{
          position: "relative",
          height: "50px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            borderRadius: "30px",
            left: `${Math.sin(left * 0.05) * 100 + 100}px`,
          }}
          className="ball"
        ></div>
      </div>

      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
};

const UseMemoModal = ({ onClose = () => {} }: { onClose?: VoidFunction }) => {
  const [useMemoState, setUseMemoState] = useState(true);
  const [count, setCount] = useState(35);
  return (
    <Modal onClose={onClose}>
      <Modal.Header title="useMemo" />
      <Modal.Body>
        <div className="grid grid-cols-1 gap-y-3">
          {useMemoState ? (
            <UsingMemoExample count={count} />
          ) : (
            <WithoutUsingMemoExample count={count} />
          )}
          <button
            onClick={() => setUseMemoState(!useMemoState)}
            className="grid w-max grid-cols-[auto_auto] items-center gap-x-3 rounded-md bg-[#F05033] p-3"
          >
            <p className="text-white">
              {useMemoState ? "Stop using useMemo" : "useMemo"}
            </p>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UseMemoModal;
