
import "./product.css";
import home from './home.jpg';
import list from "./list.jpg"
import line from './more.jpg';
import wash from './wash.jpg';
import press from './iron.jpg';
import towel from './towel.jpg';
import pack from './pack.jpg';
export default function ProductList() {
    return (
        <div className="main">
            {/* -------------------------header=-------------------------------------------- */}
            <div className="box1">
                <div className="box11">LAUNDRY</div>
                <div className="box12">
                    <button className="box122">Pricing</button>
                    <button className="box122">Career</button>
                    <button className="box1221">User Name</button>
                </div>
            </div>

            {/* ------------------------------body---------------------------------- */}
            <div className="box2">
                <div className="box21">
                    <button class="btn"><img className="image1" src={home} alt="home"></img></button>
                    <button class="btn2"><img className="image2" src={line} alt="plus"></img></button>
                    <button class="btn"><img className="image1" src={list} alt="line"></img></button>
                </div>
                <div className="box22">
                    <div className="box221">
                        <p> Create Order</p>
                    </div>
                    <div className="box222">
                        <table>
                            <tr>
                                <th>Product Type</th>
                                <th>Quantity</th>
                                <th>Wash-Type</th>
                                <th>Price</th>
                                
                            </tr>
                            <tr>
                                <td>Shirts</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>T-Shirts</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Trousers</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Jean</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Jogger</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Boxers</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>others</td>
                                <td>
                                    <input className="quan" type={Number}></input>
                                </td>
                                <td>
                                    <div className="items">
                                    <button class="check"><img className="item1" src={wash} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={press} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={towel} alt="home"></img></button>
                                    <button class="check"><img className="item1" src={pack} alt="home"></img></button>
                                        
                                    </div>

                                </td>
                                <td></td>
                            </tr>
                        </table>


                    </div>
                    <div className="box223">
                        <button className="create">Create</button>
                        <button className=" create">Proceed</button>
                    </div>

                </div>

            </div>
            {/* ---------------------------------footer------------------------------------- */}

            <div className="box3">
                <p>2021 &copy; laundry</p>
            </div>




        </div>
    )
}