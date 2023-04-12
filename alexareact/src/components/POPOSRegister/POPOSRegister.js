import React, { useState } from 'react';
import './POPOSRegister.css';

function POPOSRegister() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        postalCode: '',
        uses: {
            meeting: false,
            hangout: false,
            workspace: false,
            date: false,
            tourist: false,
            business: false,
            quiet: false,
            outdoor: false,
            art: false,
            scenic: false
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            uses: {
                ...prevState.uses,
                [name]: checked
            }
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
    };

    return (
        <div className="container">
            <div className="POPOSRegister">
                <h2>Register Here for the SFPOPOS Newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Postal Code:
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
                    </label>
                    <h3>How do you plan to use SFPOPOS (select all that apply):</h3>
                    <div className="checkbox-grid">
                        <div className="checklist-one">
                            <label>
                                <input type="checkbox" name="meeting" checked={formData.uses.meeting} onChange={handleCheckboxChange} />
                                Meeting space
                            </label>
                            <label>
                                <input type="checkbox" name="hangout" checked={formData.uses.hangout} onChange={handleCheckboxChange} />
                                Hangout spot
                            </label>
                            <label>
                                <input type="checkbox" name="workspace" checked={formData.uses.workspace} onChange={handleCheckboxChange} />
                                Workspace
                            </label>
                            <label>
                                <input type="checkbox" name="date" checked={formData.uses.date} onChange={handleCheckboxChange} />
                                Date spot
                            </label>
                            <label>
                                <input type="checkbox" name="tourist" checked={formData.uses.tourist} onChange={handleCheckboxChange} />
                                Tourist attraction
                            </label>
                        </div>
                        <div className="checklist-two">
                            <label>
                                <input type="checkbox" name="business" checked={formData.uses.business} onChange={handleCheckboxChange} />
                                Business destination
                            </label>
                            <label>
                                <input type="checkbox" name="quiet" checked={formData.uses.quiet} onChange={handleCheckboxChange} />
                                Quiet place to read/study
                            </label>
                            <label>
                                <input type="checkbox" name="outdoor" checked={formData.uses.outdoor} onChange={handleCheckboxChange} />
                                Outdoor spaces
                            </label>
                            <label>
                                <input type="checkbox" name="art" checked={formData.uses.art} onChange={handleCheckboxChange} />
                                Art installations
                            </label>
                            <label>
                                <input type="checkbox" name="scenic" checked={formData.uses.scenic} onChange={handleCheckboxChange} />
                                Scenic Views
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="rounded-button">Submit</button>
                </form>
            </div>
            <div>
                <img class="image" alt="newsletter" src="https://www.springfieldbucks.org/wp-content/uploads/2022/06/Newsletter.jpg" />
            </div>
        </div>
    )
}

export default POPOSRegister