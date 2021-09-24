import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import Axios from "../../axios/axios";
import './khoj.css'

export default function Khoj() {
    const [values, setValues] = useState('');
    const [searchValue, setSearchValue] = useState("");
    const [found, setFound] = useState(false);
    const [clicked, setClicked] = useState(false);


    const { user } = useContext(Context);
    const id = user.user_id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = values.split(",").map(Number).sort((a, b) => b - a);///spliting the string by , and make the string an array then sorting the array
        const got = input.some(item => item === (+searchValue));
        setFound(got);
        const inputString = input.join(","); /// convert the array back to string

        try {
            const res = await Axios.post("/save/", {
                id,
                inputString                             ///saving data in Post model based on postSchema
            });
            console.log(res.data)
        }
        catch (err) {
            console.log(err)
        }


        setClicked(true);
        console.log(inputString);
    }
    return (
        <div className="khoj">
            <span className="khojTitle">Khoj the Search</span>
            <form className="khojForm" onSubmit={handleSubmit}>
                <label>Input Values</label>
                <input type="text"
                    className="khojInput"
                    placeholder="Enter Values"
                    onChange={e => setValues(e.target.value)}
                    value={values}

                />
                <label>Search Value</label>
                <input type="text"
                    className="khojInput"
                    placeholder="Enter Search Value"
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <button className="khojButton" type="submit">
                    Khoj
                </button>
            </form>

            <div className="result" >
                <label className="resultLabel">Result:</label>
                {clicked && <span className="resultSpan" style={found ? { color: '#12440d' } : { color: 'red' }}>{found ? 'True' : 'False'}</span>}
            </div>

        </div>
    )
}
