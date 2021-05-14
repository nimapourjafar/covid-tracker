import React, {useState,useEffect} from 'react'
import {NativeSelect, FormControl} from'@material-ui/core'

import styles from './CountryPicker.module.css'

import {countries} from '../../Api/index'

export default function CountryPicker() {
    const [countries,setCountries] = useState([])

    useEffect(() =>{
        const fetchCountries = async () => {
            setCountries(await countries)
        }
    })

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}
