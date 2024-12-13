import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [indexName, setIndexName] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 50 * 1024 * 1024) { // Limit file size to 50MB
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setUploadMessage("");
      } else {
        setUploadMessage("Only PDF files are allowed.");
      }
    } else {
      setUploadMessage("File size exceeds 50MB limit.");
    }
  };

  const handleUpload = async () => {
    if (!file || !indexName) {
      setUploadMessage("Please select a file and provide an index name.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("indexName", indexName);

    try {
      const response = await axios.post(
        "http://your-server-address/upload", // Replace with your backend endpoint
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setUploadMessage(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("Failed to upload file.");
    }
  };

  return (
    <div className="file-upload">
      <h3>Upload PDF to Elasticsearch</h3>
      <input
        type="text"
        placeholder="Enter index name"
        value={indexName}
        onChange={(e) => setIndexName(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default FileUpload;
