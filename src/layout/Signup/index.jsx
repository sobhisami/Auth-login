    import React, { Component } from 'react'
    import "./style.css";
    import Container from '../../Components/Container'
    import Input from '../../Components/Inputs';
    import Logo from "../../Components/Logo";
    import Or from '../../Components/Or';
    import Button from '../../Components/Button';
    import BoxWithBgImg from "../../Components/BoxWithBgImg";
    import TestPass from '../../Components/testPass';
    import { H2, Body } from '../../Components/Typography';



    export default class index extends Component {
        state = {
            strengthLevel: '',
        }




        // password complicaty
        changeStrengthLevel = (password) => {
            if (password != '') {
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasNumber = /\d/.test(password);
                const hasSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);
                const hasConsecutiveChars = /(.)\1\1/.test(password);
                const isLengthValid = password.length >= 8;
                if (hasUpperCase && hasLowerCase && hasNumber && hasSymbol && !hasConsecutiveChars && isLengthValid) {
                    this.setState({ strengthLevel: 'strong' });
                } else if ((hasUpperCase && hasLowerCase && hasNumber && isLengthValid) || (hasUpperCase && hasLowerCase && hasSymbol && isLengthValid) || (hasLowerCase && hasNumber && hasSymbol && isLengthValid)) {
                    this.setState({ strengthLevel: 'medium' });
                } else {
                    this.setState({ strengthLevel: 'weak' });
                }
            }
        };
        // end


        handleDefault = (el) => {
            el.preventDefault();
            let Name = document.getElementById('name');
            let Email = document.getElementById('sign_email');
            let password = document.getElementById('sign_password');
            let password2 = document.getElementById('password2');
            let checkBox = document.getElementById('agree');
            let errorMessage = '';

            // check nullity
            if (Name.value === '') {
                errorMessage += 'Name is required. ';

            }
            if (Email.value === '') {
                errorMessage += 'Email is required. ';

            }
            if (password.value === '') {
                errorMessage += 'Password is required. ';

            }
            if (password2.value === '') {
                errorMessage += 'reWrite password is required. ';

            }
            if (!checkBox.checked) {
                errorMessage += 'agree is required. ';

            }
            if (errorMessage != '') {
                alert(errorMessage);
            }
            // end

            //   check password 1 == password 2 
            if (password.value !== password2.value) {
                alert("password1 is not the same of the password 2 ")
            }
            // end 

            // start email regex
            const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (!emailRegex.test(Email.value)) {
                alert("Invalid email");
            }
            // end
            if (emailRegex.test(Email.value) && errorMessage == '' && password.value == password2.value && this.state.strengthLevel == 'strong' || this.state.strengthLevel == 'medium') {
                alert("passed successfully! , data has send to the api ")
            }

            // finally let ajax or axios send the data for the server or the api 

        }






        render() {
            const { handleSignUpPage } = this.props;
            return (
                <div className="signup_page">

                    <BoxWithBgImg>
                        <Logo className={"logo_sign"} path1={"M36.3693 19.4904C33.9261 24.5722 28.7297 28.08 22.7141 28.08C14.351 28.08 7.57132 21.3004 7.57132 12.9373C7.57132 7.45807 10.4814 2.65854 14.8404 -8.14426e-06C6.3926 1.58395 0 8.99844 0 17.906C0 27.9679 8.15675 36.1246 18.2186 36.1246C27.7467 36.1246 35.5664 28.8104 36.3693 19.4904Z"} path2={"M43.7707 42.0109C39.3658 45.5307 33.1624 46.4385 27.7417 43.8302C20.2056 40.2041 17.036 31.1553 20.6621 23.6192C23.0378 18.6818 27.7412 15.6187 32.8218 15.113C24.5226 12.8775 15.5473 16.787 11.685 24.8137C7.32234 33.8806 11.1358 44.7674 20.2027 49.1301C28.7884 53.2613 39.0061 50.061 43.7707 42.0109Z"} color={"white"} ClassName={"signup_logo"} />
                        <img src="/assets/dotted_group.png" alt="points group" className="points_img" />
                        <p className="quts_mark">“</p>
                        <p className="quts_text">
                            I always observe the people who pass by when I ride an escalator.
                            I'll never see most of them again, so I imagine a lot of things
                            about their lives... about the day ahead of them.
                        </p>
                        <h5 className="author">Hideo Kojima</h5>
                        <div className="corner_container">
                            <img src={"/assets/vector.png"} alt="corner" />
                        </div>
                    </BoxWithBgImg>

                    <div className="content_box">

                        <button onClick={handleSignUpPage} style={{
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "background-color": "transparent",
                            "border": "none",
                            "cursor": "pointer",


                        }}>
                            <img src={"/assets/backarrow.png"} alt="arrow" style={{ "margin": "5px", "cursor": "pointer" }} />  Back
                        </button>
                        <Container>
                            <H2 text="Register Individual Account!" />
                            <Body text="For the purpose of gamers regulation, your details are required." />
                            <hr style={{ border: "1px solid #F5F5F5", margin: "16px 0" }} />
                            <form onSubmit={this.handleDefault}>
                                <Input
                                    label="Name*"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <Input
                                    label="Email address*"
                                    id="sign_email"
                                    type="email"
                                    placeholder="Enter email address"
                                />
                                <Input
                                    label="Create password*"
                                    id="sign_password"
                                    type="password"
                                    placeholder="Password"
                                    t="x"
                                    onChange={(e) => this.changeStrengthLevel(e.target.value)}
                                />
                                <TestPass strength={this.state.strengthLevel} />
                                <Input
                                    label="Repeat password*"
                                    id="password2"
                                    type="password"
                                    placeholder="Repeat password"
                                />
                                <div className="checkbox_container">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                    />
                                    <label htmlFor="agree" className="agree_label">
                                        I agree to terms & conditions
                                    </label>
                                </div>
                                <Button text="Register Account" classes="btn btn-primary" />
                                <Or />
                                <Button onClick={handleSignUpPage} text="login" classes="btn shadow" icon={"/assets/Google.png"} />
                            </form>
                        </Container>
                    </div>
                </div>

            )
        }
    }
