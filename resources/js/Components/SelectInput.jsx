import { forwardRef, useRef } from "react";

export default forwardRef(function SelectInput(
  { className = "", children, ...props },
  ref
) {
  const input = ref ? ref : useRef();

  return (
    <select
      {...props}
      className={
        "border-gray-300 border-gray-700 bg-gray-900 text-gray-300 focus:border-indigo-500 ocus:border-indigo-600 focus:ring-indigo-500 focus:ring-indigo-600 rounded-md shadow-sm " +
        className
      }
      ref={input}
    >
      {children}
    </select>
  );
});
