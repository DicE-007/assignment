import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./btn.css";


interface GetStartedButtonProps {
  loading: boolean;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({loading}) => {
  return (
    <div className='btn'>
        <p className="btn-text">Get Started</p>
        {
          loading?<CircularProgress style={{color:"blueviolet"}} />:<KeyboardArrowRightIcon/>
        }
    </div>
  )
}

export default GetStartedButton
