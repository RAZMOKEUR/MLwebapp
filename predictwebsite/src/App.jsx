import './App.css'
import 'axios'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [prediction, setPrediction] = useState()
  const [formValue, setFormValue] = useState({
    bedrooms: '',
    sqft_living: '',
    sqft_lot: '',
    floors: '',
    condition: '',
    grade: '',
    sqft_above: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    postReq()

  }

  const postReq = () => {
    let data = JSON.stringify({
      bedrooms: formValue.bedrooms,
      sqft_living: formValue.sqft_living,
      sqft_lot: formValue.sqft_lot,
      floors: formValue.floors,
      condition: formValue.condition,
      grade: formValue.grade,
      sqft_above: formValue.sqft_above,
    });
    axios.post('http://127.0.0.1:8000/predict', data).then((res) => {
      console.log(res.data);
      console.log(res.status);
      setPrediction(res.data[0])
    }).catch((err) => {
      console.log(err);
      console.log(data);
    })

  };



  return (
    <div className="App">
      <h1> Price prediction Website</h1>



      <div className='form_block'>


        <form action="" method='post' onSubmit={handleSubmit}>
          <h3>Features</h3>
          <label htmlFor="bedrooms">bedrooms</label>
          <input type="number" name="bedrooms" id="bedrooms" onChange={(e) => setFormValue({ ...formValue, bedrooms: e.target.value })} />
          <label htmlFor="sqft_living">sqft_living</label>
          <input type="number" name="sqft_living" id="sqft_living" onChange={(e) => setFormValue({ ...formValue, sqft_living: e.target.value })} />
          <label htmlFor="sqft_lot">sqft_lot</label>
          <input type="number" name="sqft_lot" id="sqft_lot" onChange={(e) => setFormValue({ ...formValue, sqft_lot: e.target.value })} />
          <label htmlFor="floors">floors</label>
          <input type="number" name="floors" id="floors" onChange={(e) => setFormValue({ ...formValue, floors: e.target.value })} />
          <label htmlFor="condition">condition</label>
          <input type="number" name="condition" id="condition" onChange={(e) => setFormValue({ ...formValue, condition: e.target.value })} />
          <label htmlFor="grade">grade</label>
          <input type="number" name="grade" id="grade" onChange={(e) => setFormValue({ ...formValue, grade: e.target.value })} />
          <label htmlFor="sqft_above">sqft_above</label>
          <input type="number" name="sqft_above" id="sqft_above" onChange={(e) => setFormValue({ ...formValue, sqft_above: e.target.value })} />

          <h4><button>Submit</button></h4>

        </form>

        <div>

          <h3>Predicition</h3>

          <h1>{prediction}</h1>
        </div>

      </div>


    </div>
  )
}

export default App
