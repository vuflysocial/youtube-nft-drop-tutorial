import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTwitterSquare, faBook, faEnvelope);

const styles = {
  wrapper: 'flex min-h-screen flex-col bg-[#000000] text-gray-200',
  footer: 'flex justify-center items-center',
  button: 'rounded-xl border px-10 py-5 mt-5',
};

const Login = ({ login }) => {
  return (
    <>
      <div className="banner">
        <img src="https://i.postimg.cc/kXdBbDY1/Untitled-design-11.png" alt="dogs" width="1480" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <button className={styles.button} onClick={login}>
            Join the Club
          </button>
        </div>
        <br/>
        <div className={styles.footer}>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faTwitterSquare} className="icon fa-2x" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faBook} className="icon fa-2x" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faEnvelope} className="icon fa-2x" />
          </a>
        </div>
        <div>
          <h1>
            MJDC
          </h1>
        </div>
        <div>
        <img src="https://i.postimg.cc/rsvr3Jq5/MJDC-removebg-preview.png" alt="dogs" width="56" />
      </div>
      </div>
    </>
  );
};

export default Login;
