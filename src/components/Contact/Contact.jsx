import { useState } from "react";
import "../../styles/Contact.scss";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: faire le code d'envoie des donné a mon adresse email
        console.log(
            "Nom:",
            formState.email,
            "Email:",
            formState.email,
            "Message:",
            formState.message
        );
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <section className="contact" id="contact">
            <h1>Contactez moi</h1>
            <p></p>
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
};
