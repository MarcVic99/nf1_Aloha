import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file0:null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file0).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file0:e.target.files[0]})
    }
    fileUpload(file0){
        const url = 'http://127.0.0.1:80/api/property/upload';
        const formData = new FormData();
        formData.append('file0',file0);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return  post(url, formData,config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>Añade fotos a tu anuncio</h1>
                <input type="file0" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}



export default SimpleReactFileUpload;