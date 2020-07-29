import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form';
import {DevTool} from 'react-hook-form-devtools';
import {Menu} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));


export default function GuestForm(props) {

    const classes = useStyles();

    const {
        register,
        handleSubmit,
        control,
        errors,
        watch,
        formState: {
            isSubmitting
        }
    } = useForm();

    const [item, setItem] = React.useState({
        appetizers: false,
        entrees: false,
        dessert: false,
        utensils: false,
     
    });
    

    const [potluck, setPotluck] = useState([]);
    const [updatedPotluckList, setUpdatedPotluckList] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(()=>{
      axios
      .get("https://backend-bw.herokuapp.com/potlucks")
      .then(res=>{
        // console.log('this is res', res);
        const potlucks = res.data.filter(potluck=>
          potluck.name.toLowerCase().includes(query.toLowerCase())
          );
          // console.log('potlucks', res)
          setPotluck(potlucks);
      });
    }, [query])
    

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.checked
        });
    };

    const handleInputChange = event => {
      setQuery(event.target.value);
    };



    const potluckAttending = watch("potluckAttending");


    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline/>
            <div className={
                classes.paper
            }>
                
              
                
                
                
                <Typography component="h1" variant="h5">
                    Which potluck are you attending?
                </Typography>
                <form className={
                        classes.form
                    }
                    onSubmit={
                        handleSubmit((data) => alert(JSON.stringify(data)))
                }>

                    <TextField variant="outlined" margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        id="search"
                        type='text'
                        label="Search by event name"
                        name="name"
                        className="prompt search-name"
                        onChange={handleInputChange}
                        value={query}
                        name="name"
                        tabIndex="0"
                        autoFocus/>

     
                    <div className="potluck">
                            {potluck.map(data => {
                              return (
                                <Card className={classes.root}>
                                <CardActionArea>
                                  <CardMedia
                                    className={classes.media}
                                    title="Potluck Card"
                                    
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      {data.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Date: {data.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Time: {data.time}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                                <CardActions>
                                </CardActions>
                              </Card>
        
                              );
                            })}
                          </div>


                          <TextField variant="outlined" margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        id="name"
                        type='text'
                        label="name"
                        name="name"
                        className="name"
                        name="name"
                        tabIndex="0"
                        autoFocus/>
               
                        <FormControl 
                            inputRef={register}
                            required
                            component="fieldset"
                            className={
                                classes.formControl
                        }>
                            <label>What are you bringing?</label>
                          <Controller
                            as={
                              <RadioGroup aria-label="item">
                                <FormControlLabel
                                  value="appetizers"
                                  control={<Radio />}
                                  label="Appetizers"
                                />
                                <FormControlLabel
                                  value="entrees"
                                  control={<Radio />}
                                  label="Entrees"
                                />
                                  <FormControlLabel
                                  value="desserts"
                                  control={<Radio />}
                                  label="Desserts"
                                />
                                  <FormControlLabel
                                  value="utensils"
                                  control={<Radio />}
                                  label="Utensils"
                                />
                              </RadioGroup>
                            }
                            name="itemBringing"
                            control={control}
                          />
                        </FormControl>
                 


                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={
                            classes.submit
                    }>
                        Submit
                    </Button>


                </form>
            </div>
        </Container>
    )
}
