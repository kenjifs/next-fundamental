'use client';

const ViewUserButton = (props: any) => {
  return (
    <>
      <button
        onClick={() => {
          alert(`AKU ADALAH USER ID ${props.userId}`);
        }}
      >
        <br />
        <p>CLICK HERE!</p>
      </button>
    </>
  );
};

export default ViewUserButton;
