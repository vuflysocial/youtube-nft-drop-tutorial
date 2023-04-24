import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTwitterSquare, faBook, faEnvelope);

const styles = {
  wrapper: 'flex min-h-screen flex-col bg-[#000000] text-gray-200',
  footer: 'flex justify-center items-center',
  button: 'rounded-xl border px-10 py-5 mt-5 bg-[green]',
  font: `url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Source+Sans+Pro:wght@900&display=swap")`,
  h1: {
    fontFamily: "Comfortaa, sans-serif",
    fontSize: "48px",
    fontWeight: "900",
    textAlign: "center",
    color: "#74F836"
  },
  h5Wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
    padding: '1rem',
    background: '#333',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  },
  h5: {
    fontFamily: "Comfortaa, sans-serif",
    fontSize: "18px",
    fontWeight: "70",
    textAlign: "center",
  },
  icon: 'fa-2x'
};

const Login = ({ login }) => {
  return (
    <>
      <div className="banner">
        <link rel="stylesheet" href="icons/font-awesome/css/all.css" />
        <img src="https://i.postimg.cc/kXdBbDY1/Untitled-design-11.png" alt="dogs" width="1480" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <button className={styles.button} onClick={login}>
            Join the Club
          </button>
        </div>
        <br />
        <div className={styles.footer}>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faTwitterSquare} className={styles.icon} />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faBook} className={styles.icon} />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
        </div>
        <div>
          <h1 style={styles.h1}>
            Melo JackedUp Dogs Club
          </h1>
        </div>
        <br/>
        <div style={styles.h5Wrapper}>
          <h5 style={styles.h5}>Join
        The Melo JackedUp Dogs Club (MJDC) is the melo inu official collection of 3D NFT Dogs Jacked Up on a melo life. By holding a Jacked Dogs, you will get exclusive access to future collections, to real world events & meetups, to exclusive rights and revenues within the melo
 ecosystem and other perks as a member of the MJDC.</h5>
        </div>
        <div>
          <img src="https://i.postimg.cc/4dk7vT6Z/Black-Modern-Tiger-Mascot-Circle-Logo.png" alt="
dogs" width="200" />
        </div>
      </div>
    </>
  );
};

export default Login;
