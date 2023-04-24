import React from 'react';



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
