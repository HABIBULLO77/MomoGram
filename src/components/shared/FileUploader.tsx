import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
const FileUploader = () => {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader