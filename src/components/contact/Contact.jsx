import "./contact.css"
import emailjs from "@emailjs/browser";
import {useRef, useState} from "react";
import {motion, useInView} from "motion/react";
import ContactSvg from "./ContactSvg.jsx";

const listVariant = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        }
    }
}

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [forms, setForm] = useState({
        user_username: '',
        user_email: '',
        message: ''
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...forms, [name]: value})
    }

    const ref = useRef();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSuccess(true);
                    setError(false);

                    alert('Your message has been sent successfully!');

                    setForm({
                        user_username: '',
                        user_email: '',
                        message: ''
                    });


                },
                (error) => {
                    setError(true);
                    setSuccess(false);
                    console.log(error);
                    alert('Something went wrong!');
                },
            );
    };

    const isInView = useInView(ref, {margin: "-200px"});

    return (
        <div className="contact" ref={ref} onSubmit={sendEmail}>
            <div className="cSection">
                <motion.form
                    ref={form}
                    variants={listVariant}
                    animate={isInView ? "animate" : "initial"}
                >
                    <motion.h1 variants={listVariant} className="cTitle">Let's keep in touch</motion.h1>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Name</label>
                        <input
                            type="text"
                            name="user_username"
                            value={forms.user_username}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"/>
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Email</label>
                        <input type="email"
                               name="user_email"
                               value={forms.user_email}
                               onChange={handleChange}
                               required
                               placeholder="john@gmail.com"/>
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Message</label>
                        <textarea
                            rows={10}
                            name="message"
                            value={forms.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message">
                        </textarea>
                    </motion.div>
                    <motion.button variants={listVariant} className="formButton">Send</motion.button>
                    {/*{success && <span>Your message has been sent</span>}*/}
                    {/*{error && <span>Something went wrong!</span>}*/}
                </motion.form>
            </div>
            <div className="cSection">
                <ContactSvg />
            </div>
        </div>
    )
}
export default Contact
