import React from 'react';

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center">
      © {new Date().getFullYear()} Shehan Perera
    </footer>
  );
}
