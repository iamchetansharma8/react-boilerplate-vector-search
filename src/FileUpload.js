import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ onBack }) => {
  const [file, setFile] = useState(null);
  const [indexName, setIndexName] = useState('');
  const [message, setMessage] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file || !indexName) {
      setMessage('Please select a file and specify an index name.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('index', indexName);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="file-upload-page">
      <header className="app-header">
        <h1>ELSER Search Application</h1>
      </header>
      <div className="upload-container">
        <h2>Upload File to Elasticsearch</h2>
        <form className="upload-form" onSubmit={handleFileUpload}>
          <div className="form-group">
            <label>File:</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="form-group">
            <label>Index Name:</label>
            <input
              type="text"
              placeholder="Enter index name"
              value={indexName}
              onChange={(e) => setIndexName(e.target.value)}
            />
          </div>
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <button className="back-button" onClick={onBack}>
          Back to Search
        </button>
      </div>
      <footer className="app-footer">
        <p>&copy; 2024 ELSER Search Application</p>
      </footer>
    </div>
  );
};

export default FileUpload;
