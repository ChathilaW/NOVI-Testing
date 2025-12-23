import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex flex-col items-center animate-fade-in pt-16">
      
      <ThreeDot variant="bounce" color="#da32f8ff" size="medium" text="" textColor="" />  

    </div>
  );
};

export default Loading;