"use client";
import { useState } from 'react';

export default function Page() {
  const [num1, setNum1] = useState<number | ''>('');
  const [num2, setNum2] = useState<number | ''>('');
  const [result, setResult] = useState<number | string>('');

  const handleAdd = () => setResult(Number(num1) + Number(num2));
  const handleSubtract = () => setResult(Number(num1) - Number(num2));
  const handleMultiply = () => setResult(Number(num1) * Number(num2));
  const handleDivide = () => {
    if (num2 === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-5">Simple Calculator</h1>
      <div className="space-y-3">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value ? Number(e.target.value) : '')}
          placeholder="Enter first number"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value ? Number(e.target.value) : '')}
          placeholder="Enter second number"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mt-4 space-x-2">
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
        <button onClick={handleSubtract} className="px-4 py-2 bg-blue-500 text-white rounded">Subtract</button>
        <button onClick={handleMultiply} className="px-4 py-2 bg-blue-500 text-white rounded">Multiply</button>
        <button onClick={handleDivide} className="px-4 py-2 bg-blue-500 text-white rounded">Divide</button>
      </div>
      {result !== '' && (
        <h2 className="mt-5 text-2xl">
          Result: {result}
        </h2>
      )}
    </div>
  );
}
