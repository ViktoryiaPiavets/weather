import { useState, useEffect } from 'react';
import { CitySection, Title, LeftColumn, Notification, Time } from './City.styled';
import { WeatherDetails } from './../../components/WeatherDetails';
import { TemperatureBlock } from './../../components/TemperatureBlock';
import { useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import { getUrlWithName, getUrlWithCoords } from '../../utils';
import { Modal, Spin } from 'antd';
import { getCurrentDateFormatted } from '../../utils';

const City = () => {
    const cityName = useSelector(state => state.city.name);
    const metrics = useSelector((state) => state.city.metrics);
    const coords = useSelector(state => state.coords);

    const [isModalOpen, setIsModalOpen] = useState(false);

    let url;
    if (coords && coords.latitude && coords.longitude) {
        url = getUrlWithCoords(coords.latitude, coords.longitude);
    } else {
        url = getUrlWithName(cityName);
    }

    const { data, loading, error } = useFetch(url);
    
    const handleModalCancel = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (error) {
            setIsModalOpen(true);
        }
    }, [error])
    
    
    return (
        <CitySection>
            {loading ? 
                <Spin size='large' fullscreen/> : 
                <>
                    <LeftColumn>
                        <Title>{data?.name || cityName}</Title>
                        <Time>{getCurrentDateFormatted()}</Time>
                        <WeatherDetails 
                            wind={data?.wind?.speed} 
                            humidity={data?.main?.humidity} 
                            pressure={data?.main?.pressure}
                            clouds={data?.clouds?.all}
                        />
                    </LeftColumn>
                    <TemperatureBlock 
                        iconPath={data?.weather[0]?.icon}
                        temperature={Math.floor(data?.main?.temp)}
                        metrics={metrics}
                        min={Math.floor(data?.main?.temp_min)}
                        max={Math.floor(data?.main?.temp_max)}
                    /> 
                    <Modal
                        open={isModalOpen}
                        onCancel={handleModalCancel}
                        footer={[]}
                        style={{top: '20%'}}
                    >
                         <Notification>
                            <pre>{`Something went wrong.\nPlease try to find weather in other city.`}</pre>
                        </Notification>
                     </Modal>  
                </>
            }
            
        </CitySection>
    )
}

export {
    City
}