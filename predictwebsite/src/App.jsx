import './App.css'
import 'axios'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [prediction, setPrediction] = useState()
  const [bedrooms, setBedrooms] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();
    postReq()
  }

  const postReq = () => {
    axios.post('http://127.0.0.1:8000/predict', JSON.stringify({
      bedrooms: bedrooms,
    }
    )).then((res) => {
      console.log(res.data);
      console.log(res.status);
    }).catch((err) => {
      console.log(err);
    })
  };

  const getReq = () => {
    axios.get('http://127.0.0.1:8000/').then((res) => {
      console.log(res.data);
      console.log(res.status);
    })
  }



  return (
    <div className="App">
      <h1> Price prediction Website</h1>

      <button onClick={getReq}>get test</button>

      <div className='form_block'>


        <form action="" method='post' onSubmit={handleSubmit}>
          <h3>Features</h3>
          <label htmlFor="bedrooms">bedrooms</label>
          <input type="number" name="bedrooms" id="bedrooms" onChange={(e) => setBedrooms(e.target.value)} />
          {/* <label htmlFor="sqft_living">sqft_living</label>
          <input type="number" name="sqft_living" id="sqft_living" />
          <label htmlFor="sqft_lot">sqft_lot</label>
          <input type="number" name="sqft_lot" id="sqft_lot" />
          <label htmlFor="floors">floors</label>
          <input type="number" name="floors" id="floors" />
          <label htmlFor="condition">condition</label>
          <input type="number" name="condition" id="condition" />
          <label htmlFor="grade">grade</label>
          <input type="number" name="grade" id="grade" />
          <label htmlFor="sqft_above">sqft_above</label>
          <input type="number" name="sqft_above" id="sqft_above" /> */}

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
