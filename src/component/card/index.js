import React from "react";


const Card = (props) => {
    /** In props will be all values which are in cards array **/
    console.log('Card props', props);
    
      
    return (
       <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 10px 15px 0px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            /** Add wrapper to card and path to styles={props.style} for correct displaying **/
            ...props.style,
          }}
        >
          <img
            src={props.imageSrc}
            height={'240px'}
            width={'100%'}
            /** Also add width and maxWidth for image if it's large **/
            style={{ borderRadius: '8px 8px 0 0', objectFit: 'cover', width: props.width, maxWidth: props.maxWidth }}
          />
          <div style={{ padding: '16px', fontSize: '18px', fontWeight: 700, borderRadius: '0 0 8px 8px' }}>
            {props.name}
          </div>
       </div>
    );
  };

  export default Card;