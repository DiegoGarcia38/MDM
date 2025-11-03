import React, { useState } from "react";

export default function Quiz({ setCurrentScreen, setUserProgress }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answer) => {
    setSelected(answer);
    if (answer === "c") {
      setFeedback("✅ Correcto: los metadatos describen otros datos para facilitar su búsqueda.");
    } else {
      setFeedback("❌ Incorrecto. Recuerda que los metadatos no son el contenido, sino su descripción.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Actividad Interactiva</h2>
        <p className="text-gray-700 mb-8">
          ¿Cuál de las siguientes afirmaciones describe mejor el propósito de los metadatos?
        </p>

        <div className="space-y-4 text-left">
          <button
            onClick={() => handleAnswer("a")}
            className={`block w-full px-6 py-3 rounded-xl border ${
              selected === "a" ? "bg-blue-100 border-blue-500" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            a) Son datos que reemplazan a los archivos originales.
          </button>

          <button
            onClick={() => handleAnswer("b")}
            className={`block w-full px-6 py-3 rounded-xl border ${
              selected === "b" ? "bg-blue-100 border-blue-500" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            b) Son etiquetas visuales en el contenido multimedia.
          </button>

          <button
            onClick={() => handleAnswer("c")}
            className={`block w-full px-6 py-3 rounded-xl border ${
              selected === "c" ? "bg-blue-100 border-blue-500" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            c) Son datos que describen otros datos.
          </button>
        </div>

        {feedback && <p className="mt-6 text-lg font-medium">{feedback}</p>}

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrentScreen("applications")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold"
          >
            Anterior
          </button>
          <button
            onClick={() => {
              setCurrentScreen("evaluation");
              setUserProgress(6);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
