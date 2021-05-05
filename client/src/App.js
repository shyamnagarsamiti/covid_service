import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Grid, Paper, Typography, Card, CardMedia, CardContent, makeStyles, Button } from "@material-ui/core";

import BookingForm from "./components/BookingForm";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function App() {
    const classes = useStyles();
    const [form, setForm] = useState(false);

    function handleClick() {
        setForm(!form);
    }

    return (
        <>
        {form ? <BookingForm click={handleClick} /> : <>
            <div style={{alignItems:"center", flexDirection:"column", alignContent:"space-between", backgroundColor: "darkBlue", height: "50vh", display:"flex", justifyContent:"center", width: "100vw"}}>
                <h1 style={{color:"white", fontSize:"2em", textAlign:"center"}}>
                    SHYAM NAGAR VIKAS SAMITI COVID HELP SERVICES
                </h1>
                <Button variant="contained" onClick={handleClick} >BOOK NOW</Button>                    
            </div>
            <div style={{paddingLeft: "2em"}}>
                <h3>Services offered like:</h3>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardMedia
                            className={classes.media}
                            image="https://images.cnbctv18.com/wp-content/uploads/2021/02/COVID19test_swab-768x432.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    RT-PCR TEST
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardMedia
                            className={classes.media}
                            image="https://wwwassets.rand.org/content/rand/blog/2020/08/its-going-to-be-the-vaccination-stupid/jcr:content/par/blogpost.aspectcrop.868x455.lt.jpg/x1598055738172.jpg.pagespeed.ic.WPm0htSOxE.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    VACCINATION
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardMedia
                            className={classes.media}
                            image="https://www.sheppardhealthlaw.com/wp-content/uploads/sites/25/2020/11/Global-Trade-Blog-Image_Covid-2-660x283-1.png"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    OTHERS
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            </>}
        </>
    )
}

export default App
