import React, { useState } from 'react'
import { createGetRequest } from '../utils/network_utils';
import { PeopleResponse } from '../interface/interface';
import { useNavigate } from 'react-router-dom';
import "./get_started.css";
import GetStartedButton from '../components/get_started_button';
import { dataApi } from '../constants';
const Get_Started: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const handleClick = async () => {
    setIsLoading(true);
    const data: PeopleResponse = await createGetRequest(dataApi)
    setIsLoading(false);
    navigate("/home_page", { state: data });
  }
  return (
    <div className='getstarted'>
      <div className='content'>
        <h1>Scizers Technologies LLP</h1>
        <h3>Ready to check the assignment?</h3>
      </div>
      <div className='btn' onClick={handleClick}><GetStartedButton loading={loading} /></div>
    </div>
  )
}

export default Get_Started;
