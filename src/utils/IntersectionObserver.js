import ParallaxAnimation from './ParallaxAnimation'

export default class IntersectionAnimation {
  parallaxAnimation;

  constructor(nodeList) {
    this.parallaxAnimation = new ParallaxAnimation();
    this.observeIntersection = this.observeIntersection.bind(this);

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };
    
    this.animetedElemenstArr = nodeList;

    console.log(this.animetedElemenstArr);

    const observer = new IntersectionObserver(this.observeIntersection, options);
    this.animetedElemenstArr.forEach((item) => {
      observer.observe(item);
    });


  }

  observeIntersection(entries) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        console.log(entry);
        this.parallaxAnimation.addElement(entry.target);

      } else {
        this.parallaxAnimation.removeElement(entry.target);
      }
    });
  }
}