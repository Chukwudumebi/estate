// First solution for background
import bgImage from '../../assets/bg2.png';

// function User() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         id="hero"
//         className="max-auto h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           backgroundBlendMode: 'multiply',
//         }}
//       >
//         <div className="container flex h-full flex-col items-center justify-center space-y-12">
//           <div className="text-4xl text-white">SQE Smart Real Estate</div>
//           <div
//             className="text-md h-fit w-max cursor-pointer rounded border border-white bg-transparent px-4 py-2
//           text-white hover:border-transparent hover:bg-white hover:text-sky-600"
//           >
//             View Property
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default User;

function User() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="max-auto h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container flex h-full flex-col items-center justify-center space-y-12">
          <div className="text-4xl text-white">SQE Smart Real Estate</div>
          <div
            className="text-md h-fit w-max cursor-pointer rounded border border-white bg-transparent px-4 py-2
          text-white hover:border-transparent hover:bg-white hover:text-sky-600"
          >
            View Property
          </div>
        </div>
      </section>
    </div>
  );
}

export default User;
