// import logo from '../../assets/svg/logo-no-background1.png'

const Logo = () => {
    return (
      <div 
      className="w-[100px] h-[35px] border-2  absolute" 
      style={{
        borderImage: '-webkit-linear-gradient(left, #E63B60, #067FD0, #223BC9, #E63B60)',
        borderImageSlice: '1',
      }}>
        <p 
        className="relative w-[250px] z-10 font-sans font-extrabold text-sm text-center mt-1 " 
        style={{ background: '-webkit-linear-gradient(left, #E63B60, #067FD0, #223BC9,#E63B60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            TechLegacyIntegration
            </p>
      </div>
    );
  };
  
  export default Logo;
  

//   const Logo = () => {
//     return (
//       <div className="w-[150px] h-[35px] border-2 border-white absolute">
//         <p className="relative z-10 left-10 font-extrabold text-[#E63B60] bg-gradient-to-r from-[#067FD0] to-[#223BC9] text-transparent bg-clip-text">TechLegacyIntegration</p>
//       </div>
//     );
//   };
  
//   export default Logo;
  
  
  