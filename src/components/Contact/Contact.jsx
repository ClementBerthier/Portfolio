import { useState } from "react";
import "../../styles/Contact.scss";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

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
                "https://formsubmit.co/ajax/berthierclementdev@gmail.com",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: formState.name,
                        email: formState.email,
                        message: formState.message,
                    }),

                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            if (response.ok) {
                setFormState({
                    name: "",
                    email: "",
                    message: "",
                });
                setIsSent(true);
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
                            value={formState.name}
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
                            value={formState.email}
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
                            value={formState.message}
                            id="message"
                            cols="30"
                            rows="10"
                            maxLength={10000}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    {isSent ? (
                        <p className="isSend">
                            Merci, votre message a bien été envoyé. J'y
                            repondrai dans les plus brefs delais
                        </p>
                    ) : null}
                    <button className="submit" type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
};
