const Logo = () => {
    return (
      <div 
      className="w-[100px] h-[35px] border-2  absolute" 
      style={{
        borderImage: '-webkit-linear-gradient(left, #E63B60, #067FD0, #223BC9, #E63B60)',
        borderImageSlice: '1',
      }}>
        <p 
        className="relative z-10 font-sans font-extrabold text-sm text-center mt-1 " 
        style={{ background: '-webkit-linear-gradient(left, #E63B60, #067FD0, #223BC9,#E63B60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            TLI
            </p>
      </div>
    );
  };
  
  export default Logo;
  
  
  