import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import banner1 from '../../assets/images/Home/banner/banner_1.png'
import banner2 from '../../assets/images/Home/banner/banner_2.png'
import banner3 from '../../assets/images/Home/banner/banner_3.png'
import "../../assets/styles/Slider.css";

gsap.registerPlugin(Draggable, InertiaPlugin);

const Slider = () => {
  const slidesRef = useRef([]);
  const proxyRef = useRef(null);
  const animationRef = useRef(null);
  const slideAnimationRef = useRef(null);
  const draggableRef = useRef(null);
  const slideWidthRef = useRef(0);
  const wrapWidthRef = useRef(0);
  const timerRef = useRef(null);

  const slideDelay = 3;
  const slideDuration = 0.3;
  const wrap = true;

  const progressWrap = gsap.utils.wrap(0, 1);

  const resize = () => {
    const norm = (gsap.getProperty(proxyRef.current, "x") / wrapWidthRef.current) || 0;

    slideWidthRef.current = slidesRef.current[0].offsetWidth;
    wrapWidthRef.current = slideWidthRef.current * slidesRef.current.length;

    if (!wrap) {
      draggableRef.current.applyBounds({
        minX: -slideWidthRef.current * (slidesRef.current.length - 1),
        maxX: 0
      });
    }

    gsap.set(proxyRef.current, {
      x: norm * wrapWidthRef.current
    });

    animateSlides(0);
    slideAnimationRef.current.progress(1);
  };

  const snapX = (value) => {
    const snapped = gsap.utils.snap(slideWidthRef.current, value);
    return wrap
      ? snapped
      : gsap.utils.clamp(
        -slideWidthRef.current * (slidesRef.current.length - 1),
        0,
        snapped
      );
  };

  const updateProgress = () => {
    animationRef.current.progress(
      progressWrap(gsap.getProperty(proxyRef.current, "x") / wrapWidthRef.current)
    );
  };

  const updateDraggable = function () {
    timerRef.current.restart(true);
    if (slideAnimationRef.current) {
      slideAnimationRef.current.kill();
    }
    this.update();
  };

  const animateSlides = (direction) => {
    timerRef.current.restart(true);
    if (slideAnimationRef.current) {
      slideAnimationRef.current.kill();
    }
    const x = snapX(
      gsap.getProperty(proxyRef.current, "x") + direction * slideWidthRef.current
    );

    slideAnimationRef.current = gsap.to(proxyRef.current, {
      x,
      duration: slideDuration,
      onUpdate: updateProgress
    });
  };

  const autoPlay = () => {
    if (
      draggableRef.current.isPressed ||
      draggableRef.current.isDragging ||
      draggableRef.current.isThrowing
    ) {
      timerRef.current.restart(true);
    } else {
      animateSlides(-1);
    }
  };

  useEffect(() => {
    gsap.set(slidesRef.current, {
      backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
      xPercent: (i) => i * 100
    });

    proxyRef.current = document.createElement("div");

    animationRef.current = gsap.to(slidesRef.current, {
      xPercent: `+=${slidesRef.current.length * 100}`,
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, (slidesRef.current.length - 1) * 100)
      }
    });

    draggableRef.current = Draggable.create(proxyRef.current, {
      trigger: ".slides-container",
      inertia: true,
      onPress: updateDraggable,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      }
    })[0];

    timerRef.current = gsap.delayedCall(slideDelay, autoPlay);

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main>
      <div className="slides-container">
        <div className="slides-inner">
          <div
            className="slide"
            ref={(el) => (slidesRef.current[0] = el)}
          >
            <img src={banner1} alt="banner1" />
          </div>

          <div
            className="slide"
            ref={(el) => (slidesRef.current[1] = el)}
          >
            <img src={banner2} alt="banner2" />
          </div>

          <div
            className="slide"
            ref={(el) => (slidesRef.current[2] = el)}
          >
            <img src={banner3} alt="banner3" />
          </div>
        </div>
      </div>
      {/* <div className="controls">
        <button onClick={() => animateSlides(1)}>Prev</button>
        <button onClick={() => animateSlides(-1)}>Next</button>
      </div> */}
    </main>
  );
};

export default Slider;
