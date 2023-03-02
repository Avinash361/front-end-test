import React, { useState } from 'react'
import '../../Styles/login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/action/auth';
import { updateSpineer } from '../../redux/action/Spineer';
import Spineer from '../../components/Spineer';
import Dialogs from '../../components/Dialogs';
import Navbar from './Navbar';
import RecipeReviewCard from '../../components/Card';
import CustomizedDialogs from './CustomizedDialogs';
import LoginCard from './LoginCard';


function Login() {

    const state = useSelector((state) => state);
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        navigate('/');
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };


    return (
        <>
            {state.spineer.value && <div className="login-spineer-box"><Spineer /> </div>}
            {state.error.flag && <div className="error-box"><Dialogs type={state.error.type} message={state.error.message} /></div>}
            <CustomizedDialogs open={open} setOpen={setOpen}>
                <LoginCard />
            </CustomizedDialogs>
            <Navbar open={open} setOpen={setOpen} />

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="./image/dietician1.jpg" alt="First slide" height="500px" style={{ opacity: 0.3 }} />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error corporis sit repellendus, exercitationem voluptas magnam quod nihil totam delectus molestias minus nescm.</h1>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="./image/food1.jpg" alt="Second slide" height="500px" style={{ opacity: 0.3 }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./image/food3.jpg" alt="Third slide" height="500px" style={{ opacity: 0.3 }} />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="bg-primary">
                <div className="container py-5 ">
                    <div className="row">
                        <div className="col py-3">
                            <RecipeReviewCard img={"./image/food1.jpg"} />
                        </div>
                        <div className="col py-3">
                            <RecipeReviewCard img={"./image/food2.jpg"} />
                        </div>
                        <div className="col py-3">
                            <RecipeReviewCard img={"./image/food3.jpg"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login