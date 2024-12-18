import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [indexName, setIndexName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus('');
    setError('');
  };

  const handleIndexChange = (e) => {
    setIndexName(e.target.value);
    setUploadStatus('');
    setError('');
  };

  const handleUpload = async () => {
    if (!selectedFile || !indexName) {
      setError('Please select a file and specify an index name.');
      return;
    }

    if (selectedFile.size > 50 * 1024 * 1024) {
      setError('File size exceeds the 50MB limit.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('index', indexName);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'ApiKey your_api_key_here', // Replace with actual API key
        },
      });
      setUploadStatus(response.data.message || 'File uploaded successfully!');
    } catch (err) {
      console.error(err);
      setError('File upload failed. Please try again.');
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload a File</h2>
      <div className="upload-form">
        <input
          type="file"
          accept=".pdf, .docx, .txt, .csv, .xlsx, .html, .md"
          className="file-input"
          onChange={handleFileChange}
        />
        <input
          type="text"
          placeholder="Enter index name"
          value={indexName}
          className="index-input"
          onChange={handleIndexChange}
        />
        <button className="upload-button" onClick={handleUpload}>
          Upload
        </button>
      </div>
      {uploadStatus && <div className="success-message">{uploadStatus}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FileUpload;

