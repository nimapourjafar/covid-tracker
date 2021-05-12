import React from 'react'
import {Card,CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

export default function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {
    if (!confirmed){
        return "Loading..."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Infected
                        </Typography>
                        <Typography variant ="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={5}
                            seperator=","/>                         
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant ="body2"> 
                        Number of Active Cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Recovered
                        </Typography>
                        <Typography variant ="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={5}
                            seperator=","/> 
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant ="body2"> 
                        Number of Recovered Cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterButtom>
                            Deaths
                        </Typography>
                        <Typography variant ="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={5}
                                seperator=","/> 
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant ="body2"> 
                        Number of Deaths from  COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
