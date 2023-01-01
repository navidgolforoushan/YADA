import { createAnimation } from "@ionic/react";

export const pageTransitionAnimationSwipLeft = (baseEl: any, opts: any) => {
  const enterAnimation = createAnimation()
    .addElement(opts.enteringEl.childNodes[0].childNodes[0])
    .fromTo("transform", "translateX(500px)", "translateX(0px)")
    .easing("ease-out")
    .duration(300);

  const leaveAnimation = createAnimation()
    .addElement(opts.leavingEl.childNodes[0].childNodes[0])
    .fromTo("transform", "translateX(0px)", "translateX(-500px)")
    .easing("ease-out")
    .duration(300);

  const animation = createAnimation()
    .addAnimation(enterAnimation)
    .addAnimation(leaveAnimation);

  return animation;
};

export const pageTransitionAnimationSwipRight = (baseEl: any, opts: any) => {
  const leaveAnimation = createAnimation()
    .addElement(opts.leavingEl.childNodes[0].childNodes[0])
    .fromTo("transform", "translateX(0px)", "translateX(500px)")
    .easing("ease-out")
    .duration(300);

  const enterAnimation = createAnimation()
    .addElement(opts.enteringEl.childNodes[0].childNodes[0])
    .fromTo("transform", "translateX(-500px)", "translateX(0px)")
    .easing("ease-out")
    .duration(300);

  const animation = createAnimation()
    .addAnimation(enterAnimation)
    .addAnimation(leaveAnimation);

  return animation;
};

export default pageTransitionAnimationSwipLeft;
