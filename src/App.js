
import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
//import { PDFViewer } from '@react-pdf/renderer';
import PdfDownload from './components/PdfDownload';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  return (
     <div className="App">
    <PDFDownloadLink document={<PdfDownload />} fileName="PDFFile-28-11-2023">
      {({loading}) =>(loading ? <button>Loading Document...</button> : <button>Download</button>)}
    </PDFDownloadLink>
  <PdfDownload />
    </div>
  );
};

export default App;
