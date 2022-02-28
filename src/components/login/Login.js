import React from 'react';

// import { useNavigate } from "react-router-dom";

function Login(props) {
// .....................................................................................
// let navigate = useNavigate();
//     let [login, SetLogin] = useState([]);
//     const [formValues, setFormValues] = useState({ username: "", password: "" });


//     // Manage Field Change
//     const handleChange = (event) => {
//          console.log(event.target);
//         const { name, value } = event.target; //destructuring
//         setFormValues({ ...formValues, [name]: value });
//          console.log(formValues);
//     }

//     useEffect(() => {
//         loginData();
//     }, []);
// ..............................................................
    // function loginData() {
    //     axios.get("http://localhost:3005/api/login")
    //         .then((response) => {
    //             console.log("in logindata",response.data);
    //             SetLogin(login = response.data);
    //         }
    //         )
    // }
    // ...........................................
    // function authenticate() {
    //     console.log("in authenticate")
    //     let flag1=0
    //     let flag2=0
    //     let admin=0
    // login.map((x, key) => (
    //     (x.username===formValues.username && x.password===formValues.password)?flag1=1:flag2=0
    // ))
    // login.map((x, key) => (
    //     ("Admin"===formValues.username && "12345"===formValues.password)?admin=1:flag2=0
    // ))
    // if (admin===1)
    // {navigate("../", { replace: true })
    //     props.setlogin(2)
    // }
    // else if (flag1===1)
    // {
    //     navigate("../", { replace: true })
    //     props.setlogin(1)
    // }
    
    // else
    // alert("Invalid Username or Password")
    // }
// ....................................................................................
    // const clicked = (event) => {
    //     navigate("../signup", { replace: true })
    // }




// ....................................................................................




// .......................................................................................
    return (
        <div>
 <section id="contact" className="section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Login </h2>
      <p>Admin/Associate</p>
    </div>
    <div className="row contact-info">
      <div className="col-md-4">
        <div className="contact-address">
          {/* <i className="bi bi-geo-alt" /> */}
          {/* <h3>Address</h3> */}
       
          {/* <address>A108 Adam Street, NY 535022, USA</address> */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-phone">
          {/* <i className="bi bi-phone" /> */}
          {/* <h3>Phone Number</h3> */}
          <img src="assets/img/logo ict.png"  alt title />
          {/* <p><a href="tel:+155895548855">+1 5589 55488 55</a></p> */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-email">
          {/* <i className="bi bi-envelope" /> */}
          {/* <h3>Email</h3> */}
          {/* <p><a href="mailto:info@example.com">info@example.com</a></p> */}
        </div>
      </div>
    </div>
    <div className="form">
      <form action="forms/contact.php" method="post" role="form" className="php-email-form" >
        
        <div className="form-group mt-3">
            <h6> Username</h6>
          <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username" required />
        </div>


        <div className="form-group mt-3">
        <h6> Password</h6>
          <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password" required />
        </div>
        
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit" >Login</button></div>
      </form>
    </div>
  </div>
</section>

        </div>
    );
}

export default Login;
