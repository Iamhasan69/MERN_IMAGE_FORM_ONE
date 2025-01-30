import { useState } from "react";
import axios from "axios";
function Formtest(){
    const [name, setName] = useState('');
        const [date, setDate] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState(null);
        const [imageType, setImageType] = useState('');

        function convertoBase64(e){
            console.log(e.target.files[0]);
            setImageType(e.target.files[0].type);
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
                setImage(reader.result);
            }
            reader.onerror = error => {
                console.log("Error: ", error);
            };
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            // const formData = new FormData();
            // formData.append('name', name);
            // formData.append('date', date);
            // formData.append('description', description);
            // formData.append('image', image);
            // formData.append('imageType', imageType);
      
            try {
                const response = await axios.post('http://localhost:5000/cource/test/form', {
                    name:name,
                    date:date,
                    description:description,
                    image:image,
                    imageType:imageType
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error uploading the item:', error);
            }
        };
       
    return (
        <div>
      <h1>Upload Item</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
          <input type="date" onChange={(e) => setDate(e.target.value)} required />
          <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
          <input type="file" onChange={convertoBase64} required />
          <button type="submit">Submit</button>
      </form>
      {imageType && <p>Uploaded Image Type: {imageType}</p>} {<img src={image} width="100px" height="100px"/>}
  </div>
    );
}

export default Formtest;