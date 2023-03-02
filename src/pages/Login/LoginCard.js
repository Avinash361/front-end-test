import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function LoginCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
        <Card sx={{ maxWidth: 395, px:4, py:3 }}>
            <div className="py-4">
                <div className="mb-4" >
                    <img src="/image/aatmnirbhar_logo.png" alt="logo" />
                    <p className='text-center mt-2'>Login into your account</p>
                </div>
                <div className="position-relative mt-3 form-input ">

                    <form onSubmit={handleLogin} className='form'>
                        <div className="example" style={{ margin: "auto", maxWidth: "300px" }}>
                            <label htmlFor="user" className='mb-2'>Email address</label>
                            <input type="text" placeholder="Enter your mail id" name="email" value={username} onChange={onChangeUsername} />
                            <button><i className="fa fa-envelope"></i></button>
                        </div>

                        <div className="example" style={{ margin: "auto", maxWidth: "300px" }}>
                            <label htmlFor="password" className='mt-3 mb-2'>Password</label>
                            <input type="password" placeholder="Enter your password" name="password" value={password} onChange={onChangePassword} />
                            <button><i className="fa fa-lock"></i></button>
                        </div>
                        <div className="mt-5 d-flex">
                            <button type='submit' className="btn btn-md" style={{ width: "100%", background: "#7982FE", color: "white" }} >Login Now</button>
                        </div>
                    </form>
                </div>
            </div>
          
        </Card>
    );
}