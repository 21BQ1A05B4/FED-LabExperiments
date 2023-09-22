import React, { Component } from 'react'

export default class LabProgram_8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesinfo : [
                {
                name: "India",
                capital: "NewDelhi"
                },
                {
                    name : "China", capital: "Beijing"
                },
                {
                    name : "USA", capital: "WashingtonDC"
                },
                {
                    name : "Japan", capital: "Tokyo"
                }
            ]
        }
    }
    render() {
        const {countriesinfo} = this.state;
        return (  
            <div>
                <h1>LabProgram_8</h1>
                <table border="1" align='center'>
                    <tr>
                        <th>CountryName</th>
                        <th>CountryCapital</th>
                    </tr>
                    {countriesinfo.length > 0 && countriesinfo.map((country) => {
                        return (
                            <tr key={country.name}>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        )
    }
}
