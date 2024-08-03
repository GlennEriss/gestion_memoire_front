'use client';
import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const memoireData = {
  sujet: "L’impact des technologies de l’information sur la gestion des entreprises",
  domaine: "Informatique de gestion",
  niveau: "Master",
  verdict: "Très bien",
  jury: [
    { nom: "Dupont", prenom: "Jean", profession: "Professeur" },
    { nom: "Martin", prenom: "Marie", profession: "Chercheuse" },
    { nom: "Durand", prenom: "Paul", profession: "Ingénieur" }
  ],
  anneeAcademique: "2023-2024",
  auteur: { nom: "Doe", prenom: "John" },
  pdfMemoire: "/assets/test.pdf"
};

export default function DetailsThese() {
  const [showPdf, setShowPdf] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Détails du Mémoire</h1>
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-2">Sujet</h2>
        <p className="mb-4">{memoireData.sujet}</p>

        <h2 className="text-xl font-semibold mb-2">Domaine</h2>
        <p className="mb-4">{memoireData.domaine}</p>

        <h2 className="text-xl font-semibold mb-2">Niveau</h2>
        <p className="mb-4">{memoireData.niveau}</p>

        <h2 className="text-xl font-semibold mb-2">Verdict</h2>
        <p className="mb-4">{memoireData.verdict}</p>

        <h2 className="text-xl font-semibold mb-2">Jury</h2>
        <ul className="list-disc pl-6 mb-4">
          {memoireData.jury.map((member, index) => (
            <li key={index}>
              {member.nom} {member.prenom} - {member.profession}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Année Académique</h2>
        <p className="mb-4">{memoireData.anneeAcademique}</p>

        <h2 className="text-xl font-semibold mb-2">Auteur</h2>
        <p className="mb-4">
          {memoireData.auteur.nom} {memoireData.auteur.prenom}
        </p>

        <h2 className="text-xl font-semibold mb-2">PDF du Mémoire</h2>
        <button 
          onClick={() => setShowPdf(!showPdf)} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {showPdf ? "Masquer le PDF" : "Afficher le PDF"}
        </button>
        {showPdf && (
          <div className="mt-4">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
              <Viewer fileUrl={memoireData.pdfMemoire} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        )}
      </div>
    </div>
  );
}