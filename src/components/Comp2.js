import React,{useRef,useEffect, useState} from 'react'
import "../Styles/comp2.css"
import { useNavigate } from 'react-router-dom';

export default function Comp2() {
  const [bigScreen,setBigScreen] = useState(true)
  const navigate = useNavigate()
  const designRef = useRef();
  const divRef3 = useRef();
  const divRef5 = useRef();
  const dreamItRef = useRef();
  const designItRef = useRef();  

  function mouseMoveHandler3(event){
    const cursorX = event.clientX;
    const cursorY = event.clientY;
  const divContainerTop = divRef5.current.getBoundingClientRect().top
    const divContainerLeft = divRef5.current.getBoundingClientRect().left
    const newCursorX = cursorX - divContainerLeft;
    const newCursorY = cursorY - divContainerTop;
    if(window.innerWidth >= 768){
      setBigScreen(true);
      divRef3.current.classList.remove("disappear");
      divRef3.current.classList.add("appear");
      divRef3.current.style.top = `${newCursorY}px`;
      divRef3.current.style.left = `${newCursorX}px`;
    }
    else{
      setBigScreen(false)
    }
}
function mouseLeaveHandler2(event) {
  const divRef4 = divRef3.current;
  if (divRef4) {
    if (window.innerWidth >= 768) {
      setBigScreen(true);
      divRef4.classList.remove("appear");
      divRef4.classList.add("disappear");
    } else {
      setBigScreen(false);
    }
  }
}


useEffect(()=>{
  const dreamItRefNode = dreamItRef.current
  const observe = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dreamItRefNode.classList.add("scrollTo")
        }
        else{
          dreamItRefNode.classList.remove("scrollTo")
        }
      });
    }
  );

  if (dreamItRefNode) {
    observe.observe(dreamItRefNode);
  }

  return () => {
    // Clean up the observer when the component unmounts.
    observe.disconnect();
  };

},[])

useEffect(()=>{
  const designItRefNode = designItRef.current
  const observe = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          designItRefNode.classList.add("scrollTo")
        }
        else{
          designItRefNode.classList.remove("scrollTo")
        }
      });
    }
  );

  if (designItRefNode) {
    observe.observe(designItRefNode);
  }

  return () => {
    // Clean up the observer when the component unmounts.
    observe.disconnect();
  };

},[])

useEffect(()=>{
  const divNode = divRef5.current

  divNode.addEventListener("mousemove", mouseMoveHandler3)
  divNode.addEventListener("mouseleave", mouseLeaveHandler2)
    
  return () =>{
    divNode.removeEventListener("mousemove", mouseMoveHandler3)
    divNode.removeEventListener("mouseleave", mouseLeaveHandler2)
  }
},[])

  useEffect(()=>{
    const designRefNode = designRef.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            designRefNode.classList.add("scrollTo")
          }
          else{
            designRefNode.classList.remove("scrollTo")
          }
        });
      }
    );
  
    if (designRefNode) {
      observe.observe(designRefNode);
    }
  
    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };    
  },[])
  return (
    <div  className="design-it" ref={designRef}>
      <div ref={divRef5}>
        <div className="container">
          <div>
            <div ref={dreamItRef}>
              <p>You</p>
              <p>dream it</p>
            </div>
            <div ref={designItRef}>
              <p>I</p>
              <p>design it</p>
            </div>
          </div>
        </div>
        <div ref={divRef3} onClick={()=>{navigate("/letstalk")}} className="lets-go-together">
          Let's Talk
        </div>
      </div>
    </div>
  )
}
