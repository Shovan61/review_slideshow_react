import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import people from './people';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        width: '80%',
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className={classes.section}>
                <Carousel
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'rgba(0,0,0, 0.3)',
                            borderRadius: '50%',
                            opacity: 1,
                        },
                    }}
                    stopAutoPlayOnHover={true}
                    fullHeightHover={false}
                    timeout={600}
                    autoPlay={true}
                    NextIcon={<NavigateNextIcon />}
                    PrevIcon={<NavigateBeforeIcon />}>
                    {people.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </section>
        </div>
    );
}

export default App;
