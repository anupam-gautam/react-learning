import React from "react";

// export const Greet = (name, heroName) => {
//   console.log(name);
//   return (
//     <div>
//       <h1>
//         Hello {name} and {heroName}
//       </h1>
//     </div>
//   );
// };

const Greet = (props) => {
  const { name, heroName } = props;
  console.log(name);
  return (
    <div>
      <h1>
        Hello {name} and {heroName}
      </h1>
    </div>
  );
};

export default Greet;
