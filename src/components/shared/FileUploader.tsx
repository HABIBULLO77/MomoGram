import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop}) 
  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer'/>
      {
        fileUrl ? (
          <div>

          </div>
        ) : (
          <div className='file_uploader-box'>
            <img src="/assets/icons/file-upload.svg" width={96} height={77} alt="file-uploader" />
          </div>
        )
      }
    </div>
  )
}

export default FileUploader 