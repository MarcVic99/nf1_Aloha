import React, {AllHTMLAttributes as e, useState} from 'react'
import axios, { post } from 'axios';
import "./Profilechange.css";

class Uploadfile extends React.Component {


    constructor(props) {
        super(props);
        this.state ={
            file0:null,
            Image:'',
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

        this.setState({file0:e.target.files[0]});

        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);


        reader.onload = () => {
            let fileBase = reader.result;
            this.setState({ Image: fileBase});

        };
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

            <div className="photocellout">
                <div className="photocellin">
                    <div className="profilephoto">
                        <img src={this.state.Image} className="profilephoto" alt="Profile photo" />
                    </div>
                    <div>

                        <form onSubmit={this.onFormSubmit}>
                            <input type="file" id="file0" name="file0" className="input2" onChange={this.onChange} />
                            <button type="submit" className="btn">Subir Imagen</button>
                        </form>
                    </div>

                    <hr />
                    <div style={{ padding: "5px" }}>
                        <p>Número de teléfono</p>
                    </div>

                </div>
            </div>
        )
    }
}



export default Uploadfile;