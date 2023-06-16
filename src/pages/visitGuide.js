import React, { useState, useEffect } from 'react';
import './visitGuide.css';
import { useNavigate } from 'react-router-dom';
import { TfiTicket } from 'react-icons/tfi';
import ContentSlider from './sslider';
import MyImageGallery from './gallery';
import two from '../component/image/imageone.png';
import Footer from '../component/footer';
import Loader from '../component/loader';
function VisitGuide() {
  const nv = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTickets] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dmuseum.fly.dev/reservation/ticket/`
        );
        const data = await response.json();
        setTickets(
          data.map(info => {
            return {
              type: info.ticket_type,
              price: info.price,
            };
          })
        );

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(ticket);

  return (
    <>
      {loading ? (
        <div className='error'>
         <Loader/>
        </div> // Show loading indicator when isLoading is true
      ) : (
      <div>
        <div className='whole'>
          <div className='main-v'>
            <h1>Museum vision</h1>
            <div className='vision'>
              <div className='left'>
                <p>
                  Presenting the tangible and intangibel Egyption heritage
                  within a culutral framework that allows visitors from differen
                  background to easily relate to the obejcts in the display
                  while acquiring a deeper understaning of the the Egyption
                  culutral in welcoming and exciting envoirmnet .
                </p>
              </div>
              <div className='right'>
                <img src={two} alt='photo' />
              </div>
            </div>
            <div className='mission'>
            <h1>The Royal Carriage Misson</h1>
            <h4>As major New Natoinal Egyptoin Institution ,The Royal Carriage Will.</h4>
            <p>-Provide a dynamic and innovative vision of past and current Egyption civilization.</p>
            <p>-Promote a new kind of meseum with an integrated approach to cultural hertage.</p>
            <p>-Develp national and international exhibitions programs.</p>
            <p>-Host a documation and collection center for Egypt's tangible and intangible heritage.</p>
            <p>-Provide access to educatoinal and research resources through a library ,study ,online data , photographs, teaching-resourses, and publicatons.</p>
          </div></div>
          <div className='ticket'>
            <div className='left'>
              <h1 className='word'>Tickets</h1>
              <h1>
                {' '}
                <TfiTicket />
              </h1>
            </div>
            <div className='right'>
              <h1>prices</h1>
              <table>
                <thead>
                  <td>type</td>
                  <td>price</td>
                </thead>
                {ticket.map(data => {
                  return (
                    <tr>
                      <td>{data.type}</td>
                      <td>{data.price}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <button
              className='bt'
              onClick={e => {
                nv('/ticket');
              }}
            >
              Book Your ticket
            </button>
          </div>
          <div className='tips'>
            <h1>Our Services</h1>
            <ContentSlider />
            {/* <MyImageGallery/> */}
          </div>
        </div>
        <Footer/>
        </div>
      )}
    </>
  );
}
export default VisitGuide;
