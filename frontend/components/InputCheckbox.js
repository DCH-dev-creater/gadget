"use client"
import React from 'react';

export default function InputCheckbox ({ label, checked, onChange, disabled = false }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="form-checkbox h-4 w-4 text-blue-600"
      />
      <span className={disabled ? 'text-gray-400' : 'text-gray-800'}>{label}</span>
    </label>
  );
};
