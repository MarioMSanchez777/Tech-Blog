import React from 'react';

const RelevantResources = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* <Image source="" link="" />
      <Image source="" link="" />
      <Image source="" link="" />
      <Image source="" link="" /> */}
    </div>
  );
};

const Image = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img
        src={props.source}
        alt='resourceImage'
        style={{
          width: '200px',
          height: '200px',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: '10px',
          borderColor: 'black',
          padding: '10px',
        }}
      />
    </a>
  )
}


export default RelevantResources;
