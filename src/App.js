import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {fetchData} from './Api/index'

class App extends React.Component {

    state = {
        data:{}
    }

    async componentDidMount() {
        const fetchdata = await fetchData()

        this.setState({data:fetchdata})

        console.log(fetchdata)

    }
    render() {
        const {data} = this.state
        
        return (
            <div className={styles.container}>
                <Cards data = {data}></Cards>
                <Chart></Chart>
                <CountryPicker></CountryPicker>
            </div>
        )
    }
}

export default App