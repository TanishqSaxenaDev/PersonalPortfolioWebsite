window.addEventListener('load', () => {
    let tl = gsap.timeline();
    window.scrollTo(0, 0);
    window.onload = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    tl.from('header', {
        y: -200,
        opacity: 0,
        duration: .5,
    })

    tl.from('#landingBackgroundText', {
        y: 200,
        opacity: 0,
        duration: 1.5,
        ease: "back.inOut(1.7)",
    })

    tl.from('#mainAbout, #secAbout', {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
    })
    tl.from('#myImage', {
        y: '100%',
        opacity: 0,
        duration: 1,
        height: '0vh'
    })
})

// timeline
let LnadingTl = gsap.timeline();

// Landing page 

gsap.to('#secAbout, #mainAbout, #myImage', {
    opacity: 0,
    y: '50%',
    duration: 1,
    scrollTrigger: {
        trigger: '#projectPage',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 56%',
        scrub: 1
    }
})
LnadingTl.to('#landingBackgroundText', {
    scale: '.5, 2',
    top: '-30%',
    duration: 1,
    scrollTrigger: {
        trigger: '#projectPage',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 56%',
        scrub: 1
    }
})

// project section

gsap.from('#projectSecTitle', {
    x: -500,
    scrollTrigger: {
        trigger: '#projectSecTitle',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1
    }
})
gsap.from('#projectSecDiscription', {
    x: 500,
    scrollTrigger: {
        trigger: '#projectSecTitle',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1
    }
})
gsap.from('#filterTab', {
    y: 500,
    scrollTrigger: {
        trigger: '#projectSecTitle',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub: 1
    }
})
gsap.from('#ProjectSecMiddleContainer', {
    y: 700,
    scale: 1.5,
    scrollTrigger: {
        trigger: '#projectSecTitle',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 45%',
        scrub: 1
    }
})
gsap.from('#ProjectSecBottomContainer', {
    y: 700,
    scrollTrigger: {
        trigger: '#projectSecTitle',
        scroller: 'body',
        start: 'top 10%',
        end: 'top 5%',
        scrub: 1
    }
})
gsap.to('#projectPage', {
    opacity: 0,
    y: '50%',
    duration: 1,
    scrollTrigger: {
        trigger: '#skillsPage',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1
    }
})

// Skills Page 
// LnadingTl.to('#landingBackgroundText', {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '#skillsPage',
//         scroller: 'body',
//         start: 'top 40%',
//         end: 'top 36%',
//         scrub: 1
//     }
// })

// gsap.to('#SkillsBackgroundText', {
//     scale: '.5, 3',
//     top: '-40%',
//     opacity: '100%',
//     duration: 1,
//     scrollTrigger: {
//         trigger: '#skillsPage',
//         scroller: 'body',
//         start: 'top 40%',
//         end: 'top 26%',
//         scrub: .5
//     }
// })