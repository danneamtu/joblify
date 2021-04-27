import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import DevicesIcon from '@material-ui/icons/Devices';
import LinkIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  transparent: {
    background: 'transparent',
    boxShadow:'none',
    padding: 0
  },
  smallBadge: {
    color: '#8A8A95',
    background: '#292932',
    borderRadius: 3,
    paddingInline: 5,
    paddingBlock: 2,
    textDecoration: 'none',
  },
  textLight:{
    color: '#8A8A95'
  },
  textWhite:{
    color: '#ffffff'
  },
  whiteCheckbox: {
    position:'relative',
    zIndex: 0,
    '&::before': {
      background: '#fff',
      content: '',
      position: 'absolute',
      margin: 'auto',
      left: 0,
      top: 0,
      height: 30,
      width: 30,
      zIndex: 1
    }
  }
}));

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#1C1C24',
    color: '#8A8A95',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    maxWidth: 130
  },
}))(Tooltip);

function Filter() {
const classes = useStyles();
const [value, setValue] = React.useState(3);
const [days, setDays] = React.useState(1);
const [jobType, setJobType] = React.useState({
    permanent: true,
    contract: true,
    temporary: false,
    parttime: false,
  });

  const handleChange = (event) => {
    React.setState({ ...jobType, [event.target.name]: event.target.checked });
  };

  const { permanent, contract, temporary, parttime } = jobType;
  const error = [permanent, contract, temporary, parttime].filter((v) => v).length !== 2;


  const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        
        
        if(newValue > 25){
            setDays(1)
        }
        if(newValue > 48){
            setDays(2)
        }
        if(newValue > 72){
            setDays(3)
        }
        if(newValue > 96){
            setDays(4)
        }    
    };

   
    
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  
    return (
        <> 
       
       
        <Accordion pl={0} defaultExpanded className={classes.transparent}>
        <AccordionSummary pl={0}
          expandIcon={<ExpandMoreIcon className={classes.textLight} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
        <Typography variant={'subtitle'} >
        <Box fontWeight="fontWeightBold" className={classes.textWhite}>
          {value < 25 ? 'Experience level' : `Experience level`}
        </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            color='default'
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={3}
            max={336}
          />
           
        </AccordionDetails>
      </Accordion>

      <Accordion pl={0} defaultExpanded className={classes.transparent}>
        <AccordionSummary pl={0}
          expandIcon={<ExpandMoreIcon  className={classes.textLight} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
        <Typography variant={'subtitle'} >
          <Box fontWeight="fontWeightBold" className={classes.textWhite}>
            {value < 25 ? 'Company size' : `Company size`}
          </Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            color='default'
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={3}
            max={336}
          />
       
           
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded className={classes.transparent}>
        <AccordionDetails>
        
        <DarkTooltip placement="right-start" title="Show only jobs written in English">        
            <FormControlLabel
            checked 
            control={<Checkbox 
            style={{color:'#8a8a95'}}
            size="small"
            onChange={handleChange} name="checkedA" />}
            label="Jobs in English"
            className={classes.textLight}
            /> 
        </DarkTooltip>
           </AccordionDetails> 
      </Accordion>
      
    

      <Accordion defaultExpanded className={classes.transparent}>
        <AccordionSummary
          className={classes.textWhite}
          expandIcon={<ExpandMoreIcon  className={classes.textLight} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography fontWeight="bold" variant={'subtitle1'} className={classes.textWhite}>
           <Box fontWeight="fontWeightBold">Country</Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
        
        <Grid container alignItems='center' justify='space-between' align>
          <Grid item> 
          <Typography className={classes.textLight} variant={'subtitle1'}> 
            <Grid container>
            <FormControlLabel
            checked 
            control={<Checkbox 
            style={{color:'#8a8a95'}}
            size="small"
            onChange={handleChange} name="checkedA" />}
            label="Netherlands"
            className={classes.textLight}
            />
            </Grid>
            </Typography>
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              152
            </Typography> 
          </Grid>
        </Grid>

        <Grid container alignItems='center' justify='space-between' align>
          <Grid item> 
          <Typography className={classes.textLight} variant={'subtitle1'}> 
            <Grid container>
            <FormControlLabel
            checked 
            control={<Checkbox 
            style={{color:'#8a8a95'}}
            size="small"
            onChange={handleChange} name="checkedA" />}
            label="Sweden"
            className={classes.textLight}
            />
            </Grid>
            </Typography>
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              152
            </Typography> 
          </Grid>
        </Grid>



        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
            <Box pb={1}>London</Box>
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              98
            </Typography> 
          </Grid>
        </Grid>

        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
              <Box pb={1}>Amsterdam</Box>
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              22
            </Typography> 
          </Grid>
        </Grid>

        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
              Amsterdam
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              22
            </Typography> 
          </Grid>
        </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>



      <Accordion defaultExpanded className={classes.transparent}>
        <AccordionSummary
          className={classes.textWhite}
          expandIcon={<ExpandMoreIcon  className={classes.textLight} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography fontWeight="bold" variant={'subtitle1'} className={classes.textWhite}>
           <Box fontWeight="fontWeightBold">Cities</Box>
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
              <Box pb={1}>Berlin</Box>
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              152
            </Typography> 
          </Grid>
        </Grid>
        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
            <Box pb={1}>London</Box>
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              98
            </Typography> 
          </Grid>
        </Grid>

        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
              <Box pb={1}>Amsterdam</Box>
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              22
            </Typography> 
          </Grid>
        </Grid>

        <Grid container alignItems='center' justify='space-between' align>
          <Grid item>
            <Typography className={classes.textLight} variant={'subtitle1'}> 
              Amsterdam
            </Typography>  
          </Grid>
          <Grid item className={classes.smallBadge}>
            <Typography className={classes.textLight} variant={'body2'}> 
              22
            </Typography> 
          </Grid>
        </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>


      


        </>
    )
}

export default Filter
