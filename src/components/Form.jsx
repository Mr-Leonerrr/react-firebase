import React from "react";
import { firebase } from "../firebase";

const Form = () => {
    const [user, setUser] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        city: "",
        address: "",
        phone: ""
    });
    const countries = ["Colombia", "Argentina", "Brazil", "Canada", "United States", "Mexico"];
    const [users, setUsers] = React.useState([]);

    const handlePropValue = (e, prop) => {
        setUser({
            ...user,
            [prop]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            firstname,
            lastname,
            email,
            country,
            city,
            address,
            phone
        } = user;

        if (!firstname.trim() || !lastname.trim()) {
            alert("Please enter all fields");
            return;
        }

        try {
            const db = firebase.firestore();

            const newUser = {
                firstname,
                lastname,
                email,
                country,
                city,
                address,
                phone
            };

            await db.collection("users").add(newUser)

            setUsers([...users, newUser]);
        } catch (error) {
            console.error("Error adding document: ", error);
        }

        //clear inputs
        alert("User added successfully");
        setUser("");
    };


    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-1 md:gap-6 sm:grid-cols-1">
                    {/** INFO */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Users Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Firstname</dt>
                                    <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dt className="text-sm font-medium text-gray-500">Country</dt>
                                    <dt className="text-sm font-medium text-gray-500">City</dt>
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>

                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Leonardo</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Natera</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">hello@imleoner.xyz</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Colombia</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Malambo</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">Calle 140</dd>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">3102313202</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/** FORM */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Users Registration</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md required:border-red-500 focus:shadow-outline"
                                                onChange={(e) => handlePropValue(e, 'firstname')}
                                                required={true}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => handlePropValue(e, 'lastname')}
                                                required={true}
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autocomplete="email"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => handlePropValue(e, 'email')}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                onChange={(e) => handlePropValue(e, 'country')}
                                            >
                                                <option value="">Choose...</option>
                                                {
                                                    countries.map((country, index) => {
                                                        return (
                                                            <option key={index} value={country}>{country}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => handlePropValue(e, 'city')}
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => handlePropValue(e, 'address')}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone number</label>
                                            <input
                                                type="text"
                                                name="phone-number"
                                                id="phone-number"
                                                autoComplete="phone-number"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={(e) => handlePropValue(e, 'phone')}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </>
    );
}

export default Form;