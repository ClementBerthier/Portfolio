import { useState } from "react";
import "../../styles/Contact.scss";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    console.log("2");
    const emailValidation = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return regex.test(email);
    };

    // TODO: Mettre en place le captcha une fois le site en ligne (recatpcha google)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailValidation(formState.email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        try {
            const response = await fetch(
                "https://formsubmit.co/berthierclementdev@gmail.com",
                {
                    method: "POST",
                    body: JSON.stringify(...formState),
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                console.log(response);
            } else {
                console.log("not ok");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <section className="contact" id="contact">
            <h1 className="title">Contactez moi</h1>
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="name-container">
                        <label className="label-name" htmlFor="name">
                            Nom
                        </label>
                        <input
                            className="input-name"
                            placeholder="Votre nom"
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="email-container">
                        <label className="label-email" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="input-email"
                            placeholder="Votre email"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="message-container">
                        <label className="label-email" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="input-message"
                            placeholder="Votre message"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            maxLength={10000}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button className="submit" type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
};
