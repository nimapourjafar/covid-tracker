import React, {useState,useEffect} from 'react'
import {NativeSelect, FormControl} from'@material-ui/core'

import styles from './CountryPicker.module.css'

import {countries} from '../../Api/index'

export default function CountryPicker() {
    const [fetchedCountries,setFetchedCountries] = useState([])

    useEffect(() =>{
        const fetchCountries = async () => {
            setFetchedCountries(await countries())
        }

        fetchCountries()
    })

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
