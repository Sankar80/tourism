import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Compont/Styles/Chennai.css"


const Kumbakonam = () => {
  return (
    <section id='kumbakonam'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06.Kumbakonam</h2>
                <div className= "img1">
                <img src={require("../img/Kumbakonam.jpeg")} height="100px" alt="" className='img-fluid' />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>"The Cambridge of India"</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Kumbakonam</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kumbakonam1 (1).jpeg")} class="card-img-top" alt="Sarangapani Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Sarangapani Temple</h5>
                        <p class="card-text">
                            Sarangapani Temple, an ancient temple dedicated to Lord
                            Vishnu, is located in the town of Kumbakonam...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kumbakonam1 (2).jpeg")} class="card-img-top" alt="Nageswaran Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Nageswaran Temple</h5>
                        <p class="card-text">
                            Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/Kumbakonam(3).jpeg")} class="card-img-top" alt="Adi Kumbeshwara Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Adi Kumbeshwara Temple</h5>
                        <p class="card-text">
                            Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kumbakonam1 (4).jpeg")} class="card-img-top" alt="Airavatesvara Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Airavatesvara Temple</h5>
                        <p class="card-text">
                            Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Kumbakonam