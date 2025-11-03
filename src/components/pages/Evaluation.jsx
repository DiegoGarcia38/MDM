import React from "react";

export default function Evaluation({ setCurrentScreen }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full bg-gray-50 rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Evaluación Final</h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Crea un pequeño conjunto de metadatos en formato <strong>XML</strong> para describir un recurso digital (imagen, documento o video).
          Incluye los siguientes elementos:
        </p>

        <ul className="list-disc text-left text-gray-700 mb-8 pl-10">
          <li>Título del recurso</li>
          <li>Autor o creador</li>
          <li>Fecha de creación</li>
          <li>Tipo o formato</li>
          <li>Palabras clave</li>
        </ul>

        <pre className="bg-gray-900 text-gray-100 text-left text-xs rounded-lg p-4 overflow-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<resource>
  <title>Fotografía de la playa</title>
  <creator>Juan García</creator>
  <date>2025-10-21</date>
  <format>image/jpeg</format>
  <keywords>mar, vacaciones, sol</keywords>
</resource>`}
        </pre>

        <p className="text-gray-700 mt-6">
          Guarda el archivo con extensión <code>.xml</code> y compáralo con ejemplos del curso.
        </p>

        <button
          onClick={() => setCurrentScreen("home")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
        >
          Finalizar y volver al inicio
        </button>
      </div>
    </div>
  );
}
