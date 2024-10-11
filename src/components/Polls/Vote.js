// src/components/Poll.js
import React, { useState ,useEffect } from 'react';
import { Container ,Row ,Col ,Button } from 'react-bootstrap';
import useApi from '../../service/api';
import { useNavigate ,useParams } from 'react-router-dom';
import Loader from '../Layouts/Loader';

const Vote =({id})=> {
    const {pollId} = useParams()
    const navigate = useNavigate();
    const api = useApi();
    const pollObj = {quetion : "",options:[]}
    const [selectedOption, setSelectedOption] = useState(null);
    const [poll ,setPoll] = useState(pollObj);
    const [isLoading ,setIsLoading] =useState(false);


    useEffect(()=>{
        const apiCall = async()=>{
            setIsLoading(true)
            try {
                const response = await api.get(`/api/poll/${pollId}`);
                const poll = response.data.poll;
                setPoll(poll);
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
            }
        }
        apiCall();
    },[])

    const handleVote = async() => {
        if (selectedOption !== null) {
           try { 
                await api.post(`/api/vote/${poll._id}`,{optionIndex:selectedOption});
                navigate("/")
           } catch (err) {
            alert(err.response.data)
           } 
        }
    };

    if(isLoading)return <Loader/>

    return (
        <Container className='center'>
            <div>
                <Row>
                    <Col>
                        <h3>{poll.question}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {poll.options.map((opt, index) => (
                        <div key={index}>
                        <label>
                            <input 
                            type="radio" 
                            value={index} 
                            checked={selectedOption === index} 
                            onChange={() => setSelectedOption(index)} 
                            />
                            {opt}
                        </label>
                        </div>
                    ))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleVote} disabled={selectedOption === null}>Vote</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Vote;
