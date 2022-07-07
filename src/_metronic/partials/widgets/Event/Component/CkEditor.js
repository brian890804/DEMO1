import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AppSetting = process.env.REACT_APP_URL;
export default function CkEditor({ setfontData, editorRef, TamplatesDataContent }) {
  return (
    <div className="App " >
      <CKEditor
        ref={editorRef}
        editor={ClassicEditor}
        config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }}
        data={TamplatesDataContent}
        onChange={(event, editor) => {
          const data = editor.getData();
          setfontData(data)
        }}
      />
    </div>
  );
}
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        const data = new FormData();
        data.append('file', file);
        const headers = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        axios.post(AppSetting + '/file/image/upload', data, headers).then((response) => resolve({ default: response.data.data,}))
      }));
  }
}
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}
