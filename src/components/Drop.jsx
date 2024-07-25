import React, { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div 
      onDrop={handleDrop} 
      onDragOver={(e) => e.preventDefault()}
      style={{
        border: '2px dashed #ccc',
        height : '200px',
        width : '400px',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '20px',
        
      }}
    >
      <label 
        htmlFor="fileInput"
        style={{
          cursor: 'pointer',
          display: 'inline-block',
          padding: '10px 20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#E49B0F',
          color: '#333'
        }}
      >
        <strong>Browse</strong> 
      </label>
      <input
        type="file"
        id="fileInput"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      <br />
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
