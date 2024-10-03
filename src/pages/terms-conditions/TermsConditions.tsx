import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from "react-router-dom";

const TermsConditions: React.FC = () => {
  const navigate = useNavigate()
  const termsText = `Lorem ipsum dolor sit amet consectetur. Urna vitae porta lobortis tellus nec. Sit consequat sed at imperdiet. Purus consectetur velit eget dignissim. Accumsan purus porta eu vulputate tincidunt eleifend morbi neque mauris. At tempor risus fringilla platea et lobortis nisl. Lacus tellus aliquam lectus donec. Orci et mauris urna ornare dictum ipsum in mattis orci. Porttitor quam praesent id enim ullamcorper donec. Velit venenatis et laoreet dignissim. Dictum sit cursus proin leo diam mi sapien ac ut. Amet erat quam mattis porttitor convallis. Neque in risus laoreet auctor tellus vel. Ultrices risus feugiat pellentesque magna. Purus faucibus est enim fringilla at consectetur sit semper.
  Nulla quis nisl metus vivamus faucibus id lorem. Tempus sed eget eu risus in. Consectetur lorem habitasse placerat tempor sed velit aliquam velit. Molestie venenatis tellus phasellus malesuada pellentesque. Cursus consectetur risus lacus mi maecenas nulla morbi. Purus in sagittis tincidunt suspendisse sit non. Malesuada aliquet tempor aliquam libero. Lacus natoque arcu amet felis leo. Et gravida velit adipiscing id sollicitudin fermentum sed condimentum neque. Tellus consectetur viverra sed consectetur id ac leo commodo bibendum. At at aliquet in augue nibh elit morbi mauris. Cum dolor ultricies amet sit elementum gravida urna.
  Amet dolor enim purus mi sagittis proin. Vel adipiscing egestas dolor nunc aliquet sodales. Mi dui condimentum ligula sed porta tellus. Eu erat feugiat amet aliquam id in dictum ipsum malesuada. Scelerisque sit tellus ultrices aenean posuere mauris in. Egestas leo sapien fringilla venenatis. Adipiscing viverra ut placerat egestas massa sit diam vestibulum. Consequat consectetur bibendum.`;

  const redirectTo = () =>{
    navigate('/propr-home', {state: {loading: true}})
  }
  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJOM3sCUqfpQm-kv2LSib3sFVSl9yjwM-w_fDNGeFJa1JG6ZL"
          alt="Logo"
        />
        <h5 className="my-2 text-sm font-semibold text-gray-900 text-center leading-loose">Term of Use</h5>
        <RxCross2 />
      </div>
      <div>
        <p className="h-[50vh] text-[9px] overflow-scroll my-2">{termsText}</p>
      </div>
      <div>
        <button onClick={()=>redirectTo()} className="w-full rounded-full text-xs bg-green-400 text-white">I Agree</button>
      </div>
    </div>
  );
};

export default TermsConditions;
