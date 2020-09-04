import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        // console.log(data);
        this.setState({data: fetchedData});    
    }

    handleCountryChange = async (country) => {
        console.log(country);
        //fetch the data
        // set the state
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.containter}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />
            </div>
        )
    }
}

export default App;