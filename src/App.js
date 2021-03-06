import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {fetchData} from './Api/index'

class App extends React.Component {

    state = {
        data:{},
        country:''
    }

    async componentDidMount() {
        const fetchdata = await fetchData()

        this.setState({data:fetchdata})

    }

    handleCountryChange = async (country)=>{
        const fetchdata = await fetchData(country)

        this.setState({data:fetchdata, country:country})
    }

    render() {
        const {data, country} = this.state
        
        return (
            <div className={styles.container}>
                <Cards data = {data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data ={data} country ={country}></Chart>                
            </div>
        )
    }
}

export default App